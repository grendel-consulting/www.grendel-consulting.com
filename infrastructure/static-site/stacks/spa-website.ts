import {
  CloudBackend,
  NamedCloudWorkspace,
  TerraformStack,
  TerraformOutput,
} from "cdktf";
import { AwsProvider } from "@cdktf/provider-aws/lib/provider";
import { DataAwsRoute53Zone } from "@cdktf/provider-aws/lib/data-aws-route53-zone";
import { CloudfrontOriginAccessIdentity } from "@cdktf/provider-aws/lib/cloudfront-origin-access-identity";
import { Construct } from "constructs";
import { z } from "zod";

const SpaWebsiteConfig = z.object({
  apexDomain: z.string(),
  subDomain: z.string(),
  tfc_organisation: z.string(),
  region: z.string(),
  target: z.string(),
});

export type SpaWebsiteConfigType = z.infer<typeof SpaWebsiteConfig>;

export class SpaWebsite extends TerraformStack {
  constructor(scope: Construct, ns: string, config?: SpaWebsiteConfigType) {
    super(scope, ns);

    const props = SpaWebsiteConfig.parse(config ?? {});
    const targetDomain = `${props.subDomain}.${props.apexDomain}`;
    const targetWorkspace = targetDomain.replaceAll(".", "-");

    new CloudBackend(this, {
      hostname: "app.terraform.io",
      organization: props.tfc_organisation,
      workspaces: new NamedCloudWorkspace(targetWorkspace),
    });

    // Default provider is in the target AWS Account
    new AwsProvider(this, "aws", {
      region: props.region,
      assumeRole: [
        {
          roleArn: `arn:aws:iam::${props.target}:role/tfc-role`,
        },
      ],
    });

    // const cloudfront = new AwsProvider(this, "aws.cloudfront", {
    //   region: "us-east-1",
    //   alias: "cloudfront",
    //   assumeRole: [
    //     {
    //       roleArn: `arn:aws:iam::${props.target}:role/tfc-role`,
    //     },
    //   ],
    // });

    const controlPlaneProvider = new AwsProvider(this, "aws.controlplane", {
      alias: "controlplane",
      region: props.region,
    });

    // const cloudfrontOai =
    new CloudfrontOriginAccessIdentity(this, "oai", {
      comment: `CloudFront OAI for ${targetDomain}`,
    });

    const existingZone = new DataAwsRoute53Zone(this, "existing", {
      provider: controlPlaneProvider,
      name: props.apexDomain,
    });

    new TerraformOutput(this, "targetDomains", {
      value: targetDomain,
    });

    new TerraformOutput(this, "targetZone", {
      value: existingZone.zoneId,
    });
  }
}

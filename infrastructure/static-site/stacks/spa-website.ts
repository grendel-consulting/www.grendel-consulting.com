import { TerraformStack, TerraformOutput } from "cdktf";
import { AwsProvider } from "@cdktf/provider-aws/lib/provider";
import { Construct } from "constructs";

export class SpaWebsite extends TerraformStack {
  constructor(scope: Construct, ns: string) {
    super(scope, ns);

    const apexDomain = "grendel-consulting.com";
    const subDomain = "www";
    const targetDomain = `${subDomain}.${apexDomain}`;
    const region = "eu-west-1";

    new AwsProvider(this, "aws", {
      region,
    });

    new TerraformOutput(this, "targetDomains", {
      value: targetDomain,
    });
  }
}

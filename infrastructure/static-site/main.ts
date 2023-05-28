import { App } from "cdktf";
import { SpaWebsite } from "./stacks/spa-website";

const stacks = new App();
const commonConfig = {
  apexDomain: "grendel-consulting.com",
  region: "eu-west-1",
  tfc_organisation: "grendel-consulting",
};

new SpaWebsite(stacks, "staging", {
  ...commonConfig,
  ...{ subDomain: "staging-www" },
});
new SpaWebsite(stacks, "production", {
  ...commonConfig,
  ...{ subDomain: "www" },
});

stacks.synth();

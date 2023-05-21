import { App, CloudBackend, NamedCloudWorkspace } from "cdktf";
import { SpaWebsite } from "./stacks/spa-website";

const app = new App();
const stack = new SpaWebsite(app, "website");

new CloudBackend(stack, {
  hostname: "app.terraform.io",
  organization: "grendel-consulting",
  workspaces: new NamedCloudWorkspace("www.grendel-consulting.com"),
});

app.synth();

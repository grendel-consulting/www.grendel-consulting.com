import { App } from "cdktf";
import { SpaWebsite } from "./stacks/spa-website";

const stacks = new App();
new SpaWebsite(stacks, "staging");
new SpaWebsite(stacks, "production");

stacks.synth();

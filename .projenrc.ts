import { AwsCdkConstructLibrary } from "@pepperize/projen-awscdk-construct";
const project = new AwsCdkConstructLibrary({
  author: "Patrick Florek",
  authorAddress: "patrick.florek@gmail.com",
  cdkVersion: "2.29.1",
  defaultReleaseBranch: "main",
  name: "@pepperize/cdk-lambda-deno",
  projenrcTs: true,
  repositoryUrl: "https://github.com/patrick.florek/cdk-lambda-deno.git",

  devDeps: ["@pepperize/projen-awscdk-construct"],
});

project.gitignore.exclude("src/layer.zip");

project.preCompileTask.exec("./layer/build.sh");

project.synth();

import { AwsCdkConstructLibrary } from "@pepperize/projen-awscdk-construct";
import { javascript } from "projen";

const project = new AwsCdkConstructLibrary({
  author: "Patrick Florek",
  authorAddress: "patrick.florek@gmail.com",
  cdkVersion: "2.29.1",
  defaultReleaseBranch: "main",
  name: "@pepperize/cdk-lambda-deno",
  description: "AWS CDK custom AWS Lambda runtime with Deno",
  keywords: ["aws", "cdk", "lambda", "layer", "runtime", "function", "deno", "javascript", "typescript"],
  repositoryUrl: "https://github.com/patrick.florek/cdk-lambda-deno.git",

  projenrcTs: true,

  devDeps: ["@pepperize/projen-awscdk-construct", "@types/mock-fs", "mock-fs"],

  releaseToNpm: true,
  npmAccess: javascript.NpmAccess.PUBLIC,
  publishToNuget: {
    dotNetNamespace: "Pepperize.CDK",
    packageId: "Pepperize.CDK.LambdaDeno",
  },
  publishToPypi: {
    distName: "pepperize.cdk-lambda-deno",
    module: "pepperize_cdk_lambda_deno",
  },
  publishToMaven: {
    mavenEndpoint: "https://s01.oss.sonatype.org",
    mavenGroupId: "com.pepperize",
    mavenArtifactId: "cdk-lambda-deno",
    javaPackage: "com.pepperize.cdk.lambda_deno",
  },

  gitpod: true,
});

project.addDevDeps("ts-node@^10");
project.addDevDeps("@types/jest@^27");
project.addDevDeps("jest@^27");
project.addDevDeps("ts-jest@^27");
project.addDevDeps("@types/prettier@2.6.0");

project.gitignore.exclude("src/layer.zip");
project.npmignore?.exclude("example/");
project.npmignore?.exclude("layer/");
project.npmignore?.exclude("src/layer.zip");
project.npmignore?.include("lib/layer.zip");

project.formatTask.reset(
  "prettier --write example/**/*.ts src/**/*.ts test/**/*.ts .projenrc.ts CONTRIBUTING.md README.md"
);

project.gitpod?.addCustomTask({
  name: "setup",
  init: "yarn install && npx projen build",
  command: "npx projen watch",
});

project.gitpod?.addVscodeExtensions("dbaeumer.vscode-eslint");

project.synth();

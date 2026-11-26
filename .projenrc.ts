import { AwsCdkConstructLibrary } from "@pepperize/projen-awscdk-construct";
import { javascript } from "projen";

const project = new AwsCdkConstructLibrary({
  author: "Patrick Florek",
  authorAddress: "patrick.florek@gmail.com",
  cdkVersion: "2.278.0",
  jsiiVersion: "~6.0.0",
  defaultReleaseBranch: "main",
  name: "@pepperize/cdk-lambda-deno",
  description: "AWS CDK custom AWS Lambda runtime with Deno",
  keywords: ["aws", "cdk", "lambda", "layer", "runtime", "function", "deno", "javascript", "typescript"],
  repositoryUrl: "https://github.com/pepperize/cdk-lambda-deno.git",

  projenrcTs: true,
  minNodeVersion: "22.13.0",
  workflowNodeVersion: "24.x",
  jestOptions: {
    jestVersion: "^30",
  },
  packageManager: javascript.NodePackageManager.YARN_CLASSIC,

  devDeps: ["@pepperize/projen-awscdk-construct@~0.1.1", "@types/node@^22", "typescript@~6.0"],

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
    mavenGroupId: "com.pepperize",
    mavenArtifactId: "cdk-lambda-deno",
    javaPackage: "com.pepperize.cdk.lambda_deno",
  },

  gitpod: true,
});

project.gitignore.exclude("src/layer.zip");
project.npmignore?.exclude("example/");
project.npmignore?.exclude("layer/");
project.npmignore?.exclude("src/layer.zip");
project.npmignore?.include("lib/layer.zip");

project.formatTask.reset(
  "prettier --write example/**/*.ts src/**/*.ts test/**/*.ts .projenrc.ts CONTRIBUTING.md README.md",
);

project.gitpod?.addCustomTask({
  name: "setup",
  init: "yarn install && npx projen build",
  command: "npx projen watch",
});

project.gitpod?.addVscodeExtensions("dbaeumer.vscode-eslint");

project.synth();

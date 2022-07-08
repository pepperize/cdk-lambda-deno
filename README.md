[![GitHub](https://img.shields.io/github/license/pepperize/cdk-lambda-deno?style=flat-square)](https://github.com/pepperize/cdk-lambda-deno/blob/main/LICENSE)
[![npm (scoped)](https://img.shields.io/npm/v/@pepperize/cdk-lambda-deno?style=flat-square)](https://www.npmjs.com/package/@pepperize/cdk-lambda-deno)
[![PyPI](https://img.shields.io/pypi/v/pepperize.cdk-lambda-deno?style=flat-square)](https://pypi.org/project/pepperize.cdk-lambda-deno/)
[![Nuget](https://img.shields.io/nuget/v/Pepperize.CDK.LambdaDeno?style=flat-square)](https://www.nuget.org/packages/Pepperize.CDK.LambdaDeno/)
[![Sonatype Nexus (Releases)](https://img.shields.io/nexus/r/com.pepperize/cdk-lambda-deno?server=https%3A%2F%2Fs01.oss.sonatype.org%2F&style=flat-square)](https://s01.oss.sonatype.org/content/repositories/releases/com/pepperize/cdk-lambda-deno/)
[![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/pepperize/cdk-lambda-deno/release/main?label=release&style=flat-square)](https://github.com/pepperize/cdk-lambda-deno/actions/workflows/release.yml)
[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/pepperize/cdk-lambda-deno?sort=semver&style=flat-square)](https://github.com/pepperize/cdk-lambda-deno/releases)
[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod&style=flat-square)](https://gitpod.io/#https://github.com/pepperize/cdk-lambda-deno)

# CDK Lambda Deno

AWS CDK custom AWS Lambda runtime with Deno

> Based on [hayd/deno-lambda](https://github.com/hayd/deno-lambda) with bundled layer

## Install

### TypeScript

```shell
npm install @pepperize/cdk-lambda-deno
```

or

```shell
yarn add @pepperize/cdk-lambda-deno
```

### Python

```shell
pip install pepperize.cdk-lambda-deno
```

### C\# / .Net

```
dotnet add package Pepperize.CDK.LambdaDeno
```

### Java

```xml
<dependency>
  <groupId>com.pepperize</groupId>
  <artifactId>cdk-lambda-deno</artifactId>
  <version>${cdkLambdaDeno.version}</version>
</dependency>
```

## Contributing

Contributions of all kinds are welcome :rocket: Check out our [contributor's guide](https://github.com/pepperize/cdk-lambda-deno/blob/main/CONTRIBUTING.md).

For a quick start, [fork or check out](https://github.com/pepperize/cdk-lambda-deno/fork) a development environment:

```shell
git clone git@github.com:pepperize/cdk-lambda-deno
cd cdk-lambda-deno
# install dependencies
yarn
# build with projen
yarn build
```

## Usage

- Using the deno function construct

```typescript
const stack = new Stack();

new DenoFunction(stack, "Function", {
  code: lambda.Code.fromAsset(path.join(__dirname, "../example/function")),
});
```

- Using the deno layer construct

```typescript
const stack = new Stack();

const layer = new DenoLayer(stack, "Layer", { version: DenoVersion.of("1.23.3")});
new lambda.Function(stack, "Function", {
  runtime: lambda.Runtime.PROVIDED_AL2,
  code: lambda.Code.fromAsset(path.join(__dirname, "../example/function")),
  handler: "index.handler",
  layers: [layer],
});
```

## References

https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html#configuration-envvars-runtime
https://docs.aws.amazon.com/lambda/latest/dg/runtimes-custom.html
https://aws.amazon.com/de/blogs/compute/build-a-custom-java-runtime-for-aws-lambda/
https://docs.aws.amazon.com/lambda/latest/dg/runtimes-api.html
https://github.com/hayd/deno-lambda

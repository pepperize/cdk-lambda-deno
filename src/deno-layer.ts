import * as lambda from "aws-cdk-lib/aws-lambda";
import { Construct } from "constructs";
import * as path from "path";

export class DenoLayer extends lambda.LayerVersion {
  public constructor(scope: Construct, id: string) {
    const props: lambda.LayerVersionProps = {
      code: lambda.Code.fromAsset(path.join(__dirname, "layer.zip")),
      description: "/bin/deno",
    };

    super(scope, id, props);
  }
}
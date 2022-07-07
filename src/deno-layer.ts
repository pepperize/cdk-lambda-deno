import * as path from "path";
import { Stack } from "aws-cdk-lib";
import * as lambda from "aws-cdk-lib/aws-lambda";
import { Construct } from "constructs";

export class DenoLayer extends lambda.LayerVersion {
  public static getOrCreate(scope: Construct): DenoLayer {
    const stack = Stack.of(scope);
    const id = "DenoLayer";
    const existing = stack.node.tryFindChild(id);
    return (existing as DenoLayer) || new DenoLayer(stack, id);
  }

  public constructor(scope: Construct, id: string) {
    const props: lambda.LayerVersionProps = {
      code: lambda.Code.fromAsset(path.join(__dirname, "layer.zip")),
      description: "/bin/deno",
    };

    super(scope, id, props);
  }
}

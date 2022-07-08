import * as path from "path";
import { DockerImage, Stack } from "aws-cdk-lib";
import * as lambda from "aws-cdk-lib/aws-lambda";
import { Construct } from "constructs";
import { DenoVersion } from "./deno-version";

export interface DenoLayerOptions {
  /**
   * @default 1.23.3
   */
  readonly version?: DenoVersion;
}

export class DenoLayer extends lambda.LayerVersion {
  public static getOrCreate(scope: Construct, options: DenoLayerOptions): DenoLayer {
    const stack = Stack.of(scope);
    const id = "DenoLayer";
    const existing = stack.node.tryFindChild(id);
    return (existing as DenoLayer) || new DenoLayer(stack, id, options);
  }

  public constructor(scope: Construct, id: string, options: DenoLayerOptions) {
    const version = options.version ?? DenoVersion.V1_23_3;

    const image = DockerImage.fromBuild(path.join(__dirname, "../layer"), {
      buildArgs: { DENO_VERSION: version.version },
    });
    image.cp("/layer.zip", path.join(__dirname));

    const props: lambda.LayerVersionProps = {
      code: lambda.Code.fromAsset(path.join(__dirname, "layer.zip")),
      description: "/bin/deno",
    };

    super(scope, id, props);
  }
}

import * as lambda from "aws-cdk-lib/aws-lambda";
import { Construct } from "constructs";
import { DenoLayer } from "./deno-layer";

export interface DenoFunctionProps extends lambda.FunctionOptions {
  readonly code: lambda.Code;
  readonly handler?: string;
}

export class DenoFunction extends lambda.Function {
  public constructor(scope: Construct, id: string, props: DenoFunctionProps) {
    const layer: lambda.ILayerVersion = DenoLayer.getOrCreate(scope);
    const layers = props.layers || [];
    layers.unshift(layer);
    const handler = props.handler ?? "index.handler";

    super(scope, id, {
      runtime: lambda.Runtime.PROVIDED_AL2,
      handler: handler,
      ...props,
      layers: layers,
    });
  }
}

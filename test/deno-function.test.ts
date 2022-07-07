import * as path from "path";
import { Stack } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import * as lambda from "aws-cdk-lib/aws-lambda";
import { DenoFunction } from "../src";

describe("DenoFunction", () => {
  it("should match snapshot", () => {
    // Given
    const stack = new Stack();

    // When
    new DenoFunction(stack, "Function", {
      code: lambda.Code.fromAsset(path.join(__dirname, "../example/function")),
    });

    // Then
    const template = Template.fromStack(stack);

    expect(template.toJSON()).toMatchSnapshot();
  });
  it("should synthesize to a function", () => {
    // Given
    const stack = new Stack();

    // When
    new DenoFunction(stack, "Function", {
      code: lambda.Code.fromAsset(path.join(__dirname, "../example/function")),
    });

    // Then
    Template.fromStack(stack).hasResourceProperties("AWS::Lambda::Function", {
      Handler: "index.handler",
    });
  });
});

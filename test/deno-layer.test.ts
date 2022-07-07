import { Stack } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import { DenoLayer } from "../src";

describe("DenoLayer", () => {
  it("should match snapshot", () => {
    // Given
    const stack = new Stack();

    // When
    DenoLayer.getOrCreate(stack);

    // Then
    const template = Template.fromStack(stack);

    expect(template.toJSON()).toMatchSnapshot();
  });
  it("should synthesize to a layer version", () => {
    // Given
    const stack = new Stack();

    // When
    new DenoLayer(stack, "Layer");

    // Then
    Template.fromStack(stack).hasResourceProperties("AWS::Lambda::LayerVersion", {
      Description: "/bin/deno",
    });
  });
});

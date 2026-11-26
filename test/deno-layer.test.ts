import * as fs from "fs";
import * as path from "path";
import { DockerImage, Stack } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import { DenoLayer } from "../src";

describe("DenoLayer", () => {
  let dockerImageMock: jest.SpyInstance<DockerImage>;

  beforeAll(() => {
    dockerImageMock = jest.spyOn(DockerImage, "fromBuild");
    dockerImageMock.mockImplementation((image: string) => {
      return {
        image: image,
        toJSON: jest.fn(),
        cp: jest.fn((imagePath: string, hostPath: string) => {
          fs.writeFileSync(path.join(hostPath, path.basename(imagePath)), "");
          return hostPath;
        }),
        run: jest.fn(),
      };
    });
  });

  afterAll(() => {
    dockerImageMock.mockRestore();
  });

  it("should match snapshot", () => {
    // Given
    const stack = new Stack();

    // When
    DenoLayer.getOrCreate(stack, {});

    // Then
    const template = Template.fromStack(stack);

    expect(template.toJSON()).toMatchSnapshot();
  });
  it("should synthesize to a layer version", () => {
    // Given
    const stack = new Stack();

    // When
    new DenoLayer(stack, "Layer", {});

    // Then
    Template.fromStack(stack).hasResourceProperties("AWS::Lambda::LayerVersion", {
      Description: "/bin/deno",
    });
  });
});

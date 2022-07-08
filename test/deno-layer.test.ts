import * as path from "path";
import { DockerImage, Stack } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
// eslint-disable-next-line @typescript-eslint/no-require-imports
import mockFs = require("mock-fs");
import { DenoLayer } from "../src";

describe("DenoLayer", () => {
  let dockerImageMock: jest.SpyInstance<DockerImage>;

  beforeAll(() => {
    dockerImageMock = jest.spyOn(DockerImage, "fromBuild");
    dockerImageMock.mockImplementation((image: string) => {
      return {
        image: image,
        toJSON: jest.fn(),
        cp: jest.fn(),
        run: jest.fn(),
      };
    });
  });

  afterAll(() => {
    dockerImageMock.mockRestore();
  });

  beforeEach(() => {
    mockFs({
      [path.join(__dirname, "../src/layer.zip")]: "",
    });
  });

  afterEach(() => {
    mockFs.restore();
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

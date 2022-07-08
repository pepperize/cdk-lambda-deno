import * as path from "path";
import { DockerImage, Stack } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import * as lambda from "aws-cdk-lib/aws-lambda";
// eslint-disable-next-line @typescript-eslint/no-require-imports
import mockFs = require("mock-fs");
import { DenoFunction } from "../src";

describe("DenoFunction", () => {
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
      [path.join(__dirname, "../example/function")]: {
        "index.ts": "",
      },
    });
  });

  afterEach(() => {
    mockFs.restore();
  });

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

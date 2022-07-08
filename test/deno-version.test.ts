import { DenoVersion } from "../src";

describe("DenoVersion", () => {
  it("Should return the version string", () => {
    // Given
    const given = DenoVersion.V1_23_3;

    // When
    const result = given.version;

    // Then
    expect(result).toEqual("1.23.3");
  });
  it("Should return the version string", () => {
    // Given
    const given = DenoVersion.of("1.23.1");

    // When
    const result = given.version;

    // Then
    expect(result).toEqual("1.23.1");
  });
  it("Should throw an error if not semantic version", () => {
    // Given
    const given = "v1.23.3";

    // When
    const throwable = () => {
      DenoVersion.of(given);
    };

    // Then
    expect(throwable).toThrow(Error);
    expect(throwable).toThrow(`'${given}' is not a valid semantic version`);
  });
});

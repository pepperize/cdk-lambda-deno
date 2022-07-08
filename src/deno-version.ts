// https://semver.org/#is-there-a-suggested-regular-expression-regex-to-check-a-semver-string
const regex =
  /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/g;

export class DenoVersion {
  /**
   * 1.23.3
   */
  public static readonly V1_23_3 = new DenoVersion("1.23.3");

  /**
   * Specify a custom version.
   * Use this if the version you need is not available in one of the predefined versions.
   *
   * @param version The semantic version number without prefix 'v'.
   */
  public static of(version: string): DenoVersion {
    if (!regex.test(version)) {
      throw new Error(`'${version}' is not a valid semantic version`);
    }

    return new DenoVersion(version);
  }

  /**
   * The version string.
   */
  public readonly version: string;

  private constructor(version: string) {
    this.version = version;
  }
}

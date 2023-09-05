import { RequestError } from "@octokit/request-error";

export function assertNonNull<T>(
  input: T,
  name: string,
): asserts input is NonNullable<T> {
  if (input == null) {
    const error = new Error(
      `${name}: unexpected nullish ${JSON.stringify(input)}`,
    );

    // Bonus: recapture stack trace from the callsite
    // https://nodejs.org/api/errors.html#errorcapturestacktracetargetobject-constructoropt
    Error.captureStackTrace(error, assertNonNull);
    throw error;
  }
}

export function isGitHubRequestError(error: unknown): error is RequestError {
  return error instanceof RequestError;
}

import { request } from "@octokit/request";

/**
 * Construct the requester with the `Next.js` fetch API and the bearer token.
 *
 * @param revalidate When will this request invalidate? (in seconds)
 */
export function constructRequester(revalidate?: number) {
  const token = retrieveToken();

  return request.defaults({
    request: {
      // The `fetch` method is provided by `Next.js`,
      // which supports Server Component.
      fetch: ((input, init) => {
        return fetch(input, {
          ...init,
          next: {
            revalidate,
          },
        });
      }) satisfies typeof fetch,
    },
    headers: {
      authorization: `bearer ${token}`,
    },
  });
}

/**
 * Retrieve the token from the environment variable.
 */
function retrieveToken(): string {
  const token = process.env.GH_API_BEARER_TOKEN;

  if (!token) {
    throw new Error("GH_API_BEARER_TOKEN is not set");
  }

  return token;
}

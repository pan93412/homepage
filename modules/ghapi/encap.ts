import { type graphql } from "@octokit/graphql";
import { constructGraphqlInstance } from "./construct";

/**
 * The extra options to be combined with `graphql`'s
 * original options.
 */
export interface GgraphqlExtraOptions {
  /**
   * The token to use.
   *
   * @default process.env.GH_API_BEARER_TOKEN
   */
  token?: string;

  /**
   * When will the followers cache in components
   * be invalidated, in seconds?
   *
   * In other words, how long should we fetch the data again?
   */
  revalidateSeconds?: number;
}

/**
 * Extract the signature from {@link graphql}.
 *
 * So we won't depend on the `dist-types` too much.
 */
type ggraphqlSignature<T> = typeof graphql<T> extends (
  query: infer Q,
  parameters: infer P
) => unknown
  ? {
      /**
       * GraphQL query. Example: `'query { viewer { login } }'`.
       */
      query: Q;
      /**
       * URL, query or body parameters, as well as `headers`,
       * `mediaType.{format|previews}`, `request`, or `baseUrl`.
       */
      parameters: P;
    }
  : never;

/**
 * The pretty high-level `graphql` for my usage.
 */
export async function ggraphql<ResponseData>(
  query: ggraphqlSignature<ResponseData>["query"],
  {
    token = process.env.GH_API_BEARER_TOKEN,
    revalidateSeconds,
    ...graphqlParameters
  }: ggraphqlSignature<ResponseData>["parameters"] & GgraphqlExtraOptions = {}
): Promise<ResponseData> {
  if (!token) {
    throw new Error("No token passed to `ggraphql`.");
  }

  const graphql = constructGraphqlInstance(revalidateSeconds);
  // eslint-disable-next-line jsdoc/require-jsdoc
  const response = await graphql<ResponseData>(query, {
    ...graphqlParameters,
    headers: {
      ...graphqlParameters.headers,
      authorization: `Bearer ${token}`,
    },
  });

  return response;
}

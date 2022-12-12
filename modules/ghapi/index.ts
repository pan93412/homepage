import { type graphql, withCustomRequest } from "@octokit/graphql";
import { constructRequester } from "./request";

/**
 * Construct a GraphQL instance.
 */
export function constructGraphqlInstance(revalidate?: number): typeof graphql {
  const request = constructRequester(revalidate);
  return withCustomRequest(request);
}

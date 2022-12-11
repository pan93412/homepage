import { type graphql, withCustomRequest } from "@octokit/graphql";
import { constructRequester } from "./request";

let graphqlInstance: typeof graphql | null = null;

/**
 * Get the singleton GraphQL instance.
 */
export function getGraphqlInstance(): typeof graphql {
  if (!graphqlInstance) {
    const request = constructRequester();
    graphqlInstance = withCustomRequest(request);
  }

  return graphqlInstance;
}

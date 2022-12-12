import "server-only";
import { type User } from "@octokit/graphql-schema";
import { REVALIDATE_SECONDS } from "../const";
import { constructGraphqlInstance } from "@modules/ghapi";

/**
 * Get the follower count from GitHub.
 */
export async function GitHubFollowerCount() {
  const USERNAME = "pan93412";
  const token = process.env.GH_API_BEARER_TOKEN;

  if (!token) {
    throw new Error("GH_API_BEARER_TOKEN is not set");
  }

  const graphql = constructGraphqlInstance(REVALIDATE_SECONDS);
  // eslint-disable-next-line jsdoc/require-jsdoc
  const response = await graphql<{ user: User }>(
    `
        {
            user(login: "${USERNAME}") {
              followers {
                totalCount
              }
            }
        }
    `,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
  const followers = response.user.followers.totalCount;

  return `${followers} fo!`;
}

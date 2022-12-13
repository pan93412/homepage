import "server-only";
import { type User } from "@octokit/graphql-schema";
import { REVALIDATE_SECONDS } from "../const";
import { ggraphql } from "@modules/ghapi";

/**
 * Get the follower count from GitHub.
 */
export async function getGitHubFollowerCount() {
  const USERNAME = "pan93412";

  // eslint-disable-next-line jsdoc/require-jsdoc
  const response = await ggraphql<{ user: User }>(
    `
    {
        user(login: "${USERNAME}") {
          followers {
            totalCount
          }
        }
    }
  `,
    { revalidateSeconds: REVALIDATE_SECONDS }
  );

  return response.user.followers.totalCount;
}

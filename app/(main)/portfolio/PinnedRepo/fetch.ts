import "server-only";
import { type Repository, type User } from "@octokit/graphql-schema";
import { REVALIDATE_SECONDS } from "./const";
import { type RepositoryInfo } from "./types";
import { ggraphql } from "@modules/ghapi";

/**
 * Get the pinned repos from GitHub.
 */
export async function getGitHubPinnedRepositories(): Promise<RepositoryInfo[]> {
  const USERNAME = "pan93412";

  // eslint-disable-next-line jsdoc/require-jsdoc
  const response = await ggraphql<{ user: User }>(
    `
{
  user(login: "${USERNAME}") {
    pinnedItems(first: 6) {
      edges {
        node {
          ... on Repository {
            name
            owner {
              login
              avatarUrl
            }
            url
            stargazers {
              totalCount
            }
            forks {
              totalCount
            }
          }
        }
      }
    }
  }
}
`,
    { revalidateSeconds: REVALIDATE_SECONDS }
  );

  const pinned = response.user.pinnedItems.edges
    ?.map((edge) => {
      const repo = edge?.node as Repository | null;
      if (!repo) return null;

      return {
        repo: repo.name,
        owner: repo.owner.login,
        avatar: repo.owner.avatarUrl,
        link: repo.url,
        stars: repo.stargazers.totalCount,
        forks: repo.forks.totalCount,
      } satisfies RepositoryInfo;
    })
    .filter((repo) => repo !== null) as RepositoryInfo[];

  return pinned;
}

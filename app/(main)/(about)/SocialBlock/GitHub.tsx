import { BsGithub } from "react-icons/bs";
import type { User } from "@octokit/graphql-schema";
import { SpecializedSocialButton } from "./Specials";
import { NonFatalWrapper } from "./Wrappers";
import { getGraphqlInstance } from "@modules/ghapi";

/**
 * The GitHub Social Button that includes
 * the latest followers count.
 */
export function GitHubSocialButton() {
  return (
    <SpecializedSocialButton
      name="GitHub"
      href="https://github.com/pan93412"
      childrenOnHover={
        <NonFatalWrapper>
          {/* @ts-expect-error Server Component */}
          <GitHubFollowerCount />
        </NonFatalWrapper>
      }
    >
      <BsGithub />
    </SpecializedSocialButton>
  );
}

/**
 * Get the follower count from GitHub.
 */
async function GitHubFollowerCount() {
  const USERNAME = "pan93412";
  const token = process.env.GH_API_BEARER_TOKEN;

  if (!token) {
    throw new Error("GH_API_BEARER_TOKEN is not set");
  }

  const graphql = getGraphqlInstance();
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

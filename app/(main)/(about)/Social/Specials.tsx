/**
 * Specials: The social button that provides some
 * additional features, such as “followers count”.
 */

import classNames from "classnames";
import { type ReactNode } from "react";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { SocialButton, type SocialButtonProps } from "./Button";
import { NonFatalWrapper } from "./Wrappers";

/**
 * The specialized social button, including
 * some cool features such as
 * “change content on hovering”.
 */
function SpecializedSocialButton({
  className,
  childrenOnHover,
  children,
  ...props
}: SocialButtonProps & {
  /**
   * Hover 時的內容
   */
  childrenOnHover: ReactNode;
}) {
  return (
    <SocialButton
      className={classNames(
        className,
        "SocialButtonWithFollowers",
        "group relative overflow-hidden leading-none"
      )}
      {...props}
    >
      <div
        className="
          absolute
          translate-y-0 opacity-100
          transition-transform
          group-hover:-translate-y-12 group-hover:opacity-0"
      >
        {children}
      </div>
      <div
        className="
            block
            translate-y-12 opacity-0
            transition-transform
            group-hover:translate-y-0 group-hover:opacity-100"
      >
        {childrenOnHover}
      </div>
    </SocialButton>
  );
}

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

  const response = await fetch(`https://api.github.com/users/${USERNAME}`, {
    headers: {
      Accept: "application/vnd.github.v3+json",
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
  const followers = await response.json().then((json) => json.followers);

  if (typeof followers === "number") {
    return `${followers} fo!`;
  } else {
    throw new Error(`Invalid response: ${JSON.stringify(followers)}`);
  }
}

/**
 * The Twitter Social Button that includes
 * the latest followers count.
 */
export function TwitterSocialButton() {
  return (
    <SpecializedSocialButton
      name="Twitter"
      href="https://twitter.com/byStarTW"
      childrenOnHover={
        <NonFatalWrapper>
          {/* @ts-expect-error Server Component */}
          <TwitterFollowerCount />
        </NonFatalWrapper>
      }
    >
      <BsTwitter />
    </SpecializedSocialButton>
  );
}

/**
 * Get the follower count from Twitter.
 */
async function TwitterFollowerCount() {
  const USERNAME = "byStarTW";
  const token = process.env.TWITTER_API_BEARER_TOKEN;

  if (!token) {
    throw new Error("TWITTER_API_BEARER_TOKEN is not set");
  }

  const response = await fetch(
    `https://api.twitter.com/1.1/users/show.json?screen_name=${USERNAME}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const followers = await response.json().then((json) => json.followers_count);

  if (typeof followers === "number") {
    return `${followers} fo!`;
  } else {
    throw new Error(`Invalid response: ${JSON.stringify(followers)}`);
  }
}

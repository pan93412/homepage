import { BsTwitter } from "react-icons/bs";
import { SpecializedSocialButton } from "./Specials";
import { NonFatalWrapper } from "./Wrappers";

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

  return null;

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
  const json = await response.json();
  const followers = json.followers_count;

  if (typeof followers === "number") {
    return `${followers} fo!`;
  } else {
    throw new Error(`Invalid response: ${JSON.stringify(json)}`);
  }
}

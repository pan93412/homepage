import "server-only";
import { REVALIDATE_SECONDS } from "../const";

/**
 * Get the follower count from Twitter.
 */
export async function TwitterFollowerCount() {
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
      next: {
        revalidate: REVALIDATE_SECONDS,
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

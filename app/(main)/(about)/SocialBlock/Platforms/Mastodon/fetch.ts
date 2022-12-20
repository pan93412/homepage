import "server-only";
import { REVALIDATE_SECONDS } from "../../const";

/**
 * Get the follower count from Twitter.
 */
export async function getMastodonFollowerCount() {
  const HOST = "https://social.slat.org";
  const USER_ID = "14492";
  const token = process.env.MASTODON_API_BEARER_TOKEN;

  if (!token) {
    throw new Error("MASTODON_API_BEARER_TOKEN is not set");
  }

  const response = await fetch(new URL(`/api/v1/accounts/${USER_ID}`, HOST), {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    next: {
      revalidate: REVALIDATE_SECONDS,
    },
  });
  const json = await response.json();
  const followers = json.followers_count;

  if (typeof followers === "number") {
    return followers;
  } else {
    throw new Error(`Invalid response: ${JSON.stringify(json)}`);
  }
}

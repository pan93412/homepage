import { BsMastodon } from "react-icons/bs";
import { FollowerIncludedSocialButton } from "../../Special";
import { getMastodonFollowerCount } from "./fetch";

/**
 * The Twitter Social Button that includes
 * the latest followers count.
 */
export function MastodonSocialButton() {
  return (
    <FollowerIncludedSocialButton
      name="Mastodon"
      href="https://social.slat.org/@pan93412"
      icon={<BsMastodon />}
      fetchMethod={getMastodonFollowerCount}
    />
  );
}

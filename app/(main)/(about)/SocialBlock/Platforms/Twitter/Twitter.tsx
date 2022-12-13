import { BsTwitter } from "react-icons/bs";
import { FollowerIncludedSocialButton } from "../../Special";
import { getTwitterFollowerCount } from "./fetch";

/**
 * The Twitter Social Button that includes
 * the latest followers count.
 */
export function TwitterSocialButton() {
  return (
    <FollowerIncludedSocialButton
      name="Twitter"
      href="https://twitter.com/byStarTW"
      icon={<BsTwitter />}
      fetchMethod={getTwitterFollowerCount}
    />
  );
}

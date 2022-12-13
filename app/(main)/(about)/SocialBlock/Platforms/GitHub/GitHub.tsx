import { BsGithub } from "react-icons/bs";
import { FollowerIncludedSocialButton } from "../Special";
import { getGitHubFollowerCount } from "./fetch";

/**
 * The GitHub Social Button that includes
 * the latest followers count.
 */
export function GitHubSocialButton() {
  return (
    <FollowerIncludedSocialButton
      name="GitHub"
      href="https://github.com/pan93412"
      icon={<BsGithub />}
      fetchMethod={getGitHubFollowerCount}
    />
  );
}

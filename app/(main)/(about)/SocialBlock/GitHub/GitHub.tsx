import "server-only";
import { BsGithub } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { SpecializedSocialButton } from "../Specials";
import { NonFatalWrapper } from "../Wrappers";
import { getGitHubFollowerCount } from "./fetch";

/**
 * The GitHub Social Button that includes
 * the latest followers count.
 */
export async function GitHubSocialButton() {
  const count = await getGitHubFollowerCount();

  return (
    <SpecializedSocialButton
      name="GitHub"
      href="https://github.com/pan93412"
      childrenOnHover={
        <NonFatalWrapper>
          <div className="flex justify-center gap-1">
            <BiUser className="block" />
            <div>{count}</div>
          </div>
        </NonFatalWrapper>
      }
    >
      <BsGithub />
    </SpecializedSocialButton>
  );
}

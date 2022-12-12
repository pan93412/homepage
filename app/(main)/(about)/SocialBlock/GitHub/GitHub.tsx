import { BsGithub } from "react-icons/bs";
import { SpecializedSocialButton } from "../Specials";
import { NonFatalWrapper } from "../Wrappers";
import { GitHubFollowerCount } from "./fetch";

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

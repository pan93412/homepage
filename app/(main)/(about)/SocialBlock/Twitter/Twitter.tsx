import { BsTwitter } from "react-icons/bs";
import { SpecializedSocialButton } from "../Specials";
import { NonFatalWrapper } from "../Wrappers";
import { TwitterFollowerCount } from "./fetch";

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

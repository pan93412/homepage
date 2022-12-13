import "server-only";
import { BiUser } from "react-icons/bi";
import { BsTwitter } from "react-icons/bs";
import { SpecializedSocialButton } from "../Specials";
import { NonFatalWrapper } from "../Wrappers";
import { getTwitterFollowerCount } from "./fetch";

/**
 * The Twitter Social Button that includes
 * the latest followers count.
 */
export async function TwitterSocialButton() {
  const count = await getTwitterFollowerCount();

  return (
    <SpecializedSocialButton
      name="Twitter"
      href="https://twitter.com/byStarTW"
      childrenOnHover={
        <NonFatalWrapper>
          <div className="flex justify-center gap-1">
            <BiUser className="block" />
            <div>{count}</div>
          </div>
        </NonFatalWrapper>
      }
    >
      <BsTwitter />
    </SpecializedSocialButton>
  );
}

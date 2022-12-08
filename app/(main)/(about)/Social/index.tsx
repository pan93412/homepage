import {
  BsTwitter,
  BsFacebook,
  BsTelegram,
  BsMailbox,
  BsDiscord,
} from "react-icons/bs";
import { FaKeybase } from "react-icons/fa";
import { SocialButton } from "./Button";
import { GitHubSocialButton } from "./Specials";

/**
 * 社群連結
 */
export function SocialLinks() {
  return (
    <section className="SocialLinks">
      <div className="flex flex-wrap">
        <GitHubSocialButton />
        <SocialButton name="Twitter" href="https://twitter.com/byStarTW">
          <BsTwitter />
        </SocialButton>
        <SocialButton name="Telegram" href="https://t.me/bystartw_chatboard">
          <BsTelegram />
        </SocialButton>
        <SocialButton name="Discord" href="https://discord.gg/TVUjgNA4WD">
          <BsDiscord />
        </SocialButton>
        <SocialButton name="Facebook" href="https://facebook.com/pan93412TW">
          <BsFacebook />
        </SocialButton>
        <SocialButton name="Keybase" href="https://keybase.io/pan93412">
          <FaKeybase />
        </SocialButton>
        <SocialButton name="E-Mail" href="mailto:me@pan93.com">
          <BsMailbox />
        </SocialButton>
      </div>
    </section>
  );
}

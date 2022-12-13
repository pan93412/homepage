import { BsFacebook, BsTelegram, BsMailbox, BsDiscord } from "react-icons/bs";
import { FaBlogger, FaKeybase } from "react-icons/fa";
import { SocialButton } from "./Button";
import { GitHubSocialButton } from "./GitHub";
import { TwitterSocialButton } from "./Twitter";

/**
 * 社群連結
 */
export function SocialLinks() {
  return (
    <section className="SocialLinks">
      <div className="grid grid-cols-4">
        {/* @ts-expect-error Server Component */}
        <GitHubSocialButton />
        {/* @ts-expect-error Server Component */}
        <TwitterSocialButton />
        <SocialButton name="Blog" href="https://blog.pan93.com">
          <FaBlogger />
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

export default SocialLinks;

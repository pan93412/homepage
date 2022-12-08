import {
  BsGithub,
  BsTwitter,
  BsFacebook,
  BsTelegram,
  BsMailbox,
  BsDiscord,
} from "react-icons/bs";
import { FaKeybase } from "react-icons/fa";
import { SocialButton } from "./Button";

/**
 * 社群連結
 */
export function SocialLinks() {
  return (
    <section className="SocialLinks">
      <div className="flex flex-wrap">
        <SocialButton
          name="GitHub"
          icon={<BsGithub />}
          href="https://pan93.com"
        />
        <SocialButton
          name="Twitter"
          icon={<BsTwitter />}
          href="https://twitter.com/byStarTW"
        />
        <SocialButton
          name="Telegram"
          icon={<BsTelegram />}
          href="https://t.me/bystartw_chatboard"
        />
        <SocialButton
          name="Discord"
          icon={<BsDiscord />}
          href="https://discord.gg/TVUjgNA4WD"
        />
        <SocialButton
          name="Facebook"
          icon={<BsFacebook />}
          href="https://facebook.com/pan93412TW"
        />
        <SocialButton
          name="Keybase"
          icon={<FaKeybase />}
          href="https://keybase.io/pan93412"
        />
        <SocialButton
          name="E-Mail"
          icon={<BsMailbox />}
          href="mailto:me@pan93.com"
        />
      </div>
    </section>
  );
}

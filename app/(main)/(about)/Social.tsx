import Link from "next/link";
import { type ReactNode } from "react";
import {
  BsGithub,
  BsTwitter,
  BsFacebook,
  BsDiscord,
  BsTelegram,
  BsMailbox,
} from "react-icons/bs";
import { FaKeybase } from "react-icons/fa";

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
          href="https://t.me/instance0f"
        />
        <SocialButton name="Discord" icon={<BsDiscord />} href="about:blank" />
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

/**
 * The configuration for Social Buttons.
 */
interface SocialButtonProps {
  /**
   * The name of this social platform.
   */
  name: string;
  /**
   * The icon of the button.
   */
  icon: ReactNode;
  /**
   * The link of this button.
   */
  href: string;
}

/**
 * The button that can redirect users to the corresponding social platform
 */
function SocialButton({ name, icon, href }: SocialButtonProps) {
  return (
    <Link href={href} rel="nofollow">
      <button
        type="button"
        className="block rounded p-4 transition hover:bg-neutral-800"
        aria-label={`Pan's social platform on ${name}`}
      >
        {icon}
      </button>
    </Link>
  );
}

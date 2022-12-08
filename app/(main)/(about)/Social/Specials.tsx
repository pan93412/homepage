/**
 * Specials: The social button that provides some
 * additional features that need client rendering.
 */

"use client";
import { BsGithub } from "react-icons/bs";
import { SocialButton } from "./Button";

/**
 * The GitHub Social Button that includes
 * the latest followers count.
 */
export function GitHubSocialButton() {
  return (
    <div>
      <SocialButton name="GitHub" href="https://github.com/pan93412">
        <BsGithub />
      </SocialButton>
    </div>
  );
}

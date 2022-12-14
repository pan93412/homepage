import { ScrollableSocialButton } from "./Specials";
import { type FollowerCountProps, FollowersCount } from "./Count";

/**
 * The props of {@link FollowersCount}.
 */
export interface FollowerIncludedSocialButtonProps extends FollowerCountProps {
  /**
   * The name of this social platform.
   */
  name: string;
  /**
   * The link to the social platform.
   */
  href: string;
  /**
   * The icon of this social platform.
   */
  icon: React.ReactNode;
}

/**
 * The common component for GitHub and Twitter.
 *
 * It is for internal use, to DRY our “follower-included”
 * social buttons as they are almost the same except the
 * fetch function and the icon.
 */
export function FollowerIncludedSocialButton({
  name,
  href,
  icon,
  fetchMethod,
}: FollowerIncludedSocialButtonProps) {
  return (
    <ScrollableSocialButton
      name={name}
      href={href}
      childrenOnHover={
        <div className="text-center">
          {/* @ts-expect-error Server Component */}
          <FollowersCount fetchMethod={fetchMethod} />
        </div>
      }
    >
      {icon}
    </ScrollableSocialButton>
  );
}

import cx from "classix";
import Image from "next/image";
import { type ReactNode } from "react";
import { BiStar, BiGitRepoForked } from "react-icons/bi";
import { type RepositoryInfo } from "../types";

/**
 * The props of repository card.
 */
export type RepoCardProps = RepositoryInfo;

/**
 * The repository card.
 */
export function RepoCard({
  owner,
  repo,
  link,
  avatar,
  stars,
  forks,
}: RepoCardProps) {
  return (
    <a
      href={link}
      title={`navigate to ${owner}/${repo}`}
      target="_blank"
      rel="noreferrer"
      className="group"
    >
      <CardContainer>
        <CardAvatar avatar={avatar} owner={owner} repo={repo} />
        <CardRepoName owner={owner} repo={repo} />
        <CardSwitch onHoverChildren="前往 GitHub →">
          <CardInfo stars={stars} forks={forks} />
        </CardSwitch>
      </CardContainer>
    </a>
  );
}

/**
 * The container of {@link CardAvatar}.
 *
 * @internal
 */
export function CardContainer({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cx(
        className,
        "relative overflow-hidden",
        "flex flex-col gap-7",
        "rounded-xl",
        "px-5 py-4",
        "bg-neutral-800 hover:bg-neutral-700"
      )}
      {...props}
    />
  );
}

/**
 * The props of {@link CardAvatar}.
 */
type CardAvatarProps = Pick<RepositoryInfo, "avatar" | "owner" | "repo">;

/**
 * The avatar part of repository card.
 */
function CardAvatar({ avatar, owner, repo }: CardAvatarProps) {
  return (
    <div className="absolute -left-2 -bottom-2 opacity-10">
      <Image
        className="rounded-full"
        src={avatar}
        alt={`${owner}/${repo}`}
        width={64}
        height={64}
        unoptimized
      />
    </div>
  );
}

/**
 * The props of {@link CardInfo}.
 */
type CardInfoProps = Pick<RepositoryInfo, "stars" | "forks">;

/**
 * The repository information such as stars and forks.
 */
function CardInfo({ stars, forks }: CardInfoProps) {
  const infoChildren = "flex items-center gap-1";
  const infoText = "leading-none";

  return (
    <div className="flex gap-2">
      <div className={infoChildren}>
        <BiStar className="block" />
        <div className={infoText}>{stars}</div>
      </div>
      <div className={infoChildren}>
        <BiGitRepoForked className="block" />
        <div className={infoText}>{forks}</div>
      </div>
    </div>
  );
}

/**
 * The props of {@link CardRepoName}.
 */
type CardRepoNameProps = Pick<RepositoryInfo, "owner" | "repo">;

/**
 * The name header of repository card.
 */
function CardRepoName({ owner, repo }: CardRepoNameProps) {
  const nameChildren = "overflow-hidden leading-none text-ellipsis";

  // Title (H1) > Section (H2) > This card (H3)
  return (
    <h3 className="space-y-1 reset">
      <div className={cx("text-neutral-500", nameChildren)}>{owner}/</div>
      <div className={cx("text-2xl text-white", nameChildren)}>{repo}</div>
    </h3>
  );
}

/**
 * The props of {@link CardSwitch}.
 */
interface CardSwitchProps {
  /**
   * The default (not hovering) children.
   */
  children: ReactNode;

  /**
   * The children when hovering.
   */
  onHoverChildren: ReactNode;
}

/**
 * Switch elements by scrolling up when users hover this element.
 */
function CardSwitch({ children, onHoverChildren }: CardSwitchProps) {
  const switchChildren = "transform transition duration-300";

  return (
    <div className={cx("relative overflow-hidden", "text-sm text-neutral-300")}>
      <div
        className={cx(
          "absolute",
          "group-hover:-translate-y-6",
          "group-hover:opacity-0",
          switchChildren
        )}
      >
        {children}
      </div>
      <div
        className={cx(
          "translate-y-6 group-hover:translate-y-0",
          "opacity-0 group-hover:opacity-100",
          switchChildren
        )}
      >
        {onHoverChildren}
      </div>
    </div>
  );
}

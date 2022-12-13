import { cx } from "classix";
import { BiGitRepoForked, BiStar } from "react-icons/bi";
import { type RepositoryInfo } from "../types";

/**
 * The props of {@link CardInfo}.
 */
export type CardInfoProps = Pick<RepositoryInfo, "stars" | "forks">;

/**
 * The repository information such as stars and forks.
 */
export function CardInfo({ stars, forks }: CardInfoProps) {
  const commonChildrenStyle = "flex items-center gap-1";
  const commonTextStyle = "leading-none";

  return (
    <div className="RepoCard-info flex gap-2">
      <div className={cx("RepoCard-infoStars", commonChildrenStyle)}>
        <BiStar className="block" />
        <div className={commonTextStyle}>{stars}</div>
      </div>
      <div className={cx("RepoCard-infoForks", commonChildrenStyle)}>
        <BiGitRepoForked className="block" />
        <div className={commonTextStyle}>{forks}</div>
      </div>
    </div>
  );
}

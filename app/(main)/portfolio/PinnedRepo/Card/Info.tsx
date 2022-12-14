import { cx } from "classix";
import { BiGitRepoForked, BiStar } from "react-icons/bi";
import { type RepositoryInfo } from "../types";
import styles from "./Card.module.scss";

/**
 * The props of {@link CardInfo}.
 */
export type CardInfoProps = Pick<RepositoryInfo, "stars" | "forks">;

/**
 * The repository information such as stars and forks.
 */
export function CardInfo({ stars, forks }: CardInfoProps) {
  return (
    <div className="RepoCard-info flex gap-2">
      <div className={cx("RepoCard-infoStars", styles.infoChildren)}>
        <BiStar className="block" />
        <div className={styles.infoText}>{stars}</div>
      </div>
      <div className={cx("RepoCard-infoForks", styles.infoChildren)}>
        <BiGitRepoForked className="block" />
        <div className={styles.infoText}>{forks}</div>
      </div>
    </div>
  );
}

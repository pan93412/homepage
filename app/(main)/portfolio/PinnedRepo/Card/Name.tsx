import { cx } from "classix";
import { type RepositoryInfo } from "../types";
import styles from "./Card.module.scss";

/**
 * The props of {@link CardRepoName}.
 */
export type CardRepoNameProps = Pick<RepositoryInfo, "owner" | "repo">;

/**
 * The name header of repository card.
 */
export function CardRepoName({ owner, repo }: CardRepoNameProps) {
  // Title (H1) > Section (H2) > This card (H3)
  return (
    <h3 className="RepoCard-title space-y-1 reset">
      <div
        className={cx(
          "RepoCard-titleOwner text-neutral-500",
          styles.nameChildren
        )}
      >
        {owner}/
      </div>
      <div
        className={cx(
          "RepoCard-titleRepo text-2xl text-white",
          styles.nameChildren
        )}
      >
        {repo}
      </div>
    </h3>
  );
}

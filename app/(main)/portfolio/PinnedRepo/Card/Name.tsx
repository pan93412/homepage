import { cx } from "classix";
import { type RepositoryInfo } from "../types";

/**
 * The props of {@link CardRepoName}.
 */
export type CardRepoNameProps = Pick<RepositoryInfo, "owner" | "repo">;

/**
 * The name header of repository card.
 */
export function CardRepoName({ owner, repo }: CardRepoNameProps) {
  const commonChildrenStyle = "overflow-hidden leading-none text-ellipsis";

  return (
    <div className="RepoCard-title space-y-1">
      <div
        className={cx(
          "RepoCard-titleOwner text-neutral-500",
          commonChildrenStyle
        )}
      >
        {owner}/
      </div>
      <div
        className={cx(
          "RepoCard-titleRepo text-2xl text-white",
          commonChildrenStyle
        )}
      >
        {repo}
      </div>
    </div>
  );
}

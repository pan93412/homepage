import "server-only";
import { RepoCard } from "./Card/Card";
import { RepoCards } from "./Card/Cards";
import { getGitHubPinnedRepositories } from "./fetch";

/**
 * Get the pinned repositories.
 */
export async function PinnedRepo() {
  const repos = await getGitHubPinnedRepositories();
  return (
    <RepoCards>
      {repos.map((props) => (
        <RepoCard {...props} key={`${props.owner}/${props.repo}`} />
      ))}
    </RepoCards>
  );
}

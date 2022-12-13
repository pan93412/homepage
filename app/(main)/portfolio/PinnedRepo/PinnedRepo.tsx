import "server-only";
import { RepoCard } from "./Card";
import { RepoCards } from "./Cards";
import { useGitHubPinnedRepositories } from "./fetch";

/**
 * Get the pinned repositories.
 */
export async function PinnedRepo() {
  const repos = await useGitHubPinnedRepositories();
  return (
    <RepoCards>
      {repos.map((props) => (
        <RepoCard {...props} key={`${props.owner}/${props.repo}`} />
      ))}
    </RepoCards>
  );
}

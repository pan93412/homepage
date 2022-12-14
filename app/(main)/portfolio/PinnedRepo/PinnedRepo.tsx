import "server-only";
import { RepoCard, RepoCards } from "./Card";
import { getGitHubPinnedRepositories } from "./fetch";

/**
 * The pinned repositories.
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

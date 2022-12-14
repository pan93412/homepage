import { type RepositoryInfo } from "../types";
import styles from "./Card.module.scss";
import { CardAvatar } from "./Avatar";
import { CardInfo } from "./Info";
import { CardRepoName } from "./Name";
import { CardSwitch } from "./Switch";

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
      className="RepoCard group"
    >
      <div className={styles.container}>
        <CardAvatar avatar={avatar} owner={owner} repo={repo} />
        <CardRepoName owner={owner} repo={repo} />
        <CardSwitch onHoverChildren="前往 GitHub →">
          <CardInfo stars={stars} forks={forks} />
        </CardSwitch>
      </div>
    </a>
  );
}

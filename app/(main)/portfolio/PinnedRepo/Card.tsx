import Image from "next/image";
import { BiStar, BiGitRepoForked } from "react-icons/bi";
import { type RepositoryInfo } from "./types";

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
      className="group/card"
    >
      <div
        className="
          RepoCard
          relative
          flex flex-col
          gap-7
          overflow-hidden
          rounded-xl
          bg-neutral-800 px-5
          py-4
          transition
          hover:bg-neutral-700
          hover:shadow hover:shadow-neutral-700"
      >
        <div className="RepoCard-avatar absolute -left-2 -bottom-2 opacity-10">
          <Image
            className="rounded-full"
            src={avatar}
            alt={`${owner}/${repo}`}
            width={64}
            height={64}
            unoptimized
          />
        </div>
        <div className="RepoCard-title flex flex-col gap-1">
          <div className="RepoCard-titleOwner overflow-hidden text-ellipsis leading-none text-neutral-500">
            {owner}/
          </div>
          <div className="RepoCard-titleRepo overflow-hidden text-ellipsis text-2xl leading-none text-white">
            {repo}
          </div>
        </div>
        <div className="RepoCard-switch relative overflow-hidden">
          <div
            className="
              RepoCard-info
              absolute
              flex transform
              gap-2
              text-sm text-neutral-300
              transition-all
              duration-300
              group-hover/card:-translate-y-6
              group-hover/card:opacity-0"
          >
            <div className="RepoCard-infoStars flex items-center gap-1">
              <BiStar className="block" />
              <div className="leading-none">{stars}</div>
            </div>
            <div className="RepoCard-infoForks flex items-center gap-1">
              <BiGitRepoForked className="block" />
              <div className="leading-none">{forks}</div>
            </div>
          </div>
          <div
            className="
              RepoCard-info
              flex translate-y-6
              transform
              gap-2 text-sm
              text-neutral-300
              opacity-0
              transition-all
              duration-300
              group-hover/card:translate-y-0
              group-hover/card:opacity-100"
          >
            前往 GitHub →
          </div>
        </div>
      </div>
    </a>
  );
}

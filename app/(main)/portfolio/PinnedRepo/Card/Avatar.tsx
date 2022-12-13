import Image from "next/image";
import { type RepositoryInfo } from "../types";

/**
 * The props of {@link CardAvatar}.
 */
export type CardAvatarProps = Pick<RepositoryInfo, "avatar" | "owner" | "repo">;

/**
 * The avatar part of repository card.
 */
export function CardAvatar({ avatar, owner, repo }: CardAvatarProps) {
  return (
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
  );
}

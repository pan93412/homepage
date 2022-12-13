/**
 * The props of repository card.
 */
export interface RepositoryInfo {
  /**
   * The repository owner.
   */
  owner: string;

  /**
   * The repository name.
   */
  repo: string;

  /**
   * The repository link.
   */
  link: string;

  /**
   * The repository avatar.
   */
  avatar: string;

  /**
   * What stars this repository gets?
   */
  stars: number;

  /**
   * What forks this repository gets?
   */
  forks: number;
}

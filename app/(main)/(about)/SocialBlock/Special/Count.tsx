import "server-only";
import { NotFatalSuspenseWrapper } from "./Wrappers";

/**
 * The props of {@link FollowersCount}.
 *
 * @internal
 */
export interface FollowerCountProps {
  /**
   * The function to fetch the follower count.
   */
  fetchMethod: () => Promise<string | number>;
}

/**
 * The follower count which is wrapped with Suspense and ErrorBoundary.
 *
 * @internal
 */
export async function FollowersCount({ fetchMethod }: FollowerCountProps) {
  const count = await fetchMethod();

  return (
    <NotFatalSuspenseWrapper>
      <div className="flex justify-center gap-1">
        <div>{count}</div>
        <div>f.o.</div>
      </div>
    </NotFatalSuspenseWrapper>
  );
}

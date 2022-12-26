import "server-only";
import { ERROR_PLACEHOLDER, NotFatalSuspenseWrapper } from "./Wrappers";

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
  try {
    const count = await fetchMethod();

    return (
      <NotFatalSuspenseWrapper>
        <>
          <span>{count}</span>
          <span> f.o.</span>
        </>
      </NotFatalSuspenseWrapper>
    );
  } catch (e) {
    console.error(e);
    return ERROR_PLACEHOLDER;
  }
}

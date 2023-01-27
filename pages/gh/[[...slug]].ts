import { type GetServerSideProps } from "next";

/**
 * The placeholder view.
 */
export default function GitHubPlaceholder() {
  return null;
}

const constructRedirectObject = (repo: string, owner = "pan93412") => ({
  redirect: {
    destination: `https://github.com/${owner}/${repo}`,
    permanent: false,
  },
});

/**
 * Redirect to a GitHub repository.
 */
export const getServerSideProps: GetServerSideProps = async (context) => {
  /**
   * The repository component of the repository.
   *
   * When `length == 1`, it redirects to `pan93412/[0]`;
   * when `length == 2`, it redirects to `[0]/[1]`.
   */
  const slug = context.params?.slug;

  if (Array.isArray(slug)) {
    switch (context.params?.slug?.length) {
      case 1:
        return constructRedirectObject(slug[0]);
      case 2:
        return constructRedirectObject(slug[1], slug[0]);
    }
  }

  return {
    redirect: {
      destination: "https://github.com/pan93412",
      permanent: false,
    },
  };
};

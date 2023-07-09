import { notFound } from "next/navigation";

export const metadata = {
  title: "開源專案貢獻",
};

/**
 * A page is UI that is unique to a route.
 * @see https://beta.nextjs.org/docs/api-reference/file-conventions/page
 */
export default function Page() {
  return notFound();
  return (
    <>
      <h1 className="text-2xl">Hi.</h1>
      <p>Welcome to this template.</p>
    </>
  );
}

import Header from "@components/Header";

/**
 * Extras page.
 */
export default function Layout({
  children,
}: {
  // eslint-disable-next-line jsdoc/require-jsdoc
  children: React.ReactNode;
}) {
  return (
    <>
      <Header active="Extras" />
      {children}
    </>
  );
}

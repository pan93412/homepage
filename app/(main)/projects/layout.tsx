import { Header } from "../../../components/Header";

/**
 * Projects page.
 */
export default function Layout({
  children,
}: {
  // eslint-disable-next-line jsdoc/require-jsdoc
  children: React.ReactNode;
}) {
  return (
    <>
      <Header active="Projects" />
      {children}
    </>
  );
}

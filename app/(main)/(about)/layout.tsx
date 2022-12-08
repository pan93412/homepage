import { NextSeo } from "next-seo";
import { Header } from "../../../components/Header";

/**
 * About page.
 */
export default function Layout({
  children,
}: {
  // eslint-disable-next-line jsdoc/require-jsdoc
  children: React.ReactNode;
}) {
  return (
    <>
      <NextSeo
        useAppDir
        title="關於"
        description="pan 是個來自台灣的程式開發者、翻譯員、UI/UX 設計師，也是個學生
        🤓。本頁面主要呈現其個人介紹。"
      />
      <Header active="About" />
      {children}
    </>
  );
}

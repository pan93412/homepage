import { NextSeo } from "next-seo";
import PinnedRepo from "./PinnedRepo";

/**
 * A page is UI that is unique to a route.
 *
 * @see https://beta.nextjs.org/docs/api-reference/file-conventions/page
 */
export default function Page() {
  return (
    <>
      <NextSeo
        useAppDir
        title="作品集"
        description="pan 是個來自台灣的程式開發者、翻譯員、UI/UX 設計師。本頁面主要呈現其個人專案和作品。"
      />
      {/* @ts-expect-error Server Component */}
      <PinnedRepo />
    </>
  );
}

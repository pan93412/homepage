import { NextSeo } from "next-seo";

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
        title="開源專案貢獻"
        description="pan 是個來自台灣的程式開發者、翻譯員、UI/UX 設計師。本頁面主要呈現其做過的開源貢獻。"
      />
      <h1 className="text-2xl">Hi.</h1>
      <p>Welcome to this template.</p>
    </>
  );
}

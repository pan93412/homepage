import "@styles/globals.scss";
// eslint-disable-next-line camelcase
import { Cabin } from "@next/font/google";
import cx from "classix";
import { AnalyticsWrapper } from "./analytics";

// eslint-disable-next-line new-cap
const cabin = Cabin({
  variable: "--font-cabin",
  weight: "variable",
  subsets: ["latin"],
  preload: true,
});

/**
 * The root layout.
 */
export default function RootLayout({
  children,
}: {
  // eslint-disable-next-line jsdoc/require-jsdoc
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-tw" className={cx(cabin.variable)}>
      <body>
        {children}
        <AnalyticsWrapper />
      </body>
    </html>
  );
}

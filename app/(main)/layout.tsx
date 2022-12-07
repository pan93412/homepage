/**
 * The layout of main app (`/*`)
 */
export default function MainAppLayout({
  children,
}: {
  /**
   * The page component
   */
  children: React.ReactNode;
}) {
  return <main className="px-12 py-8 leading-relaxed">{children}</main>;
}

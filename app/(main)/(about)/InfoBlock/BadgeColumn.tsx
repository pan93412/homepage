/**
 * The column for placing badges of Pan.
 *
 * It looks like a strip next to the main content.
 * It won't be shown in mobile mode.
 */
export function BadgeColumn() {
  return (
    <section className="BadgeColumn hidden h-full w-max flex-col gap-2 leading-5 md:flex">
      <div className="BadgeColumn-badge Badge">開發</div>
      <div className="BadgeColumn-badge Badge">翻譯</div>
      <div className="BadgeColumn-badge Badge">設計</div>
      <div className="BadgeColumn-badge Badge">學生</div>
    </section>
  );
}

import { Badge } from "@components/Badge";

/**
 * The column for placing badges of Pan.
 *
 * It looks like a strip next to the main content.
 * It won't be shown in mobile mode.
 */
export function BadgeColumn() {
  return (
    <section className="BadgeColumn hidden h-full w-max flex-col gap-2 leading-5 md:flex">
      <Badge className="BadgeColumn-badge">開發</Badge>
      <Badge className="BadgeColumn-badge">翻譯</Badge>
      <Badge className="BadgeColumn-badge">設計</Badge>
      <Badge className="BadgeColumn-badge">學生</Badge>
    </section>
  );
}

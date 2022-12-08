import { Badge } from "@components/Badge";

/**
 * The column for placing badges.
 *
 * It looks like a strip next to the main content.
 * It won't be shown in mobile mode.
 */
export function BadgeColumn() {
  return (
    <section className="BadgeColumn hidden h-full w-max flex-col gap-2 leading-5 md:flex">
      <Badge>開發</Badge>
      <Badge>翻譯</Badge>
      <Badge>設計</Badge>
      <Badge>學生</Badge>
    </section>
  );
}

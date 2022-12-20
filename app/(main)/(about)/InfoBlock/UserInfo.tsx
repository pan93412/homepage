import { UserColumn } from "./UserColumn";
import { Badge } from "@components/Badge";

/**
 * The block with Pan's information.
 *
 * It contains two columns: the left one is the badge,
 * which is the keywords of Pan; the right one is the
 * introduction and some information.
 *
 * The badge column won't be shown on mobile mode.
 */
export function UserInfo() {
  return (
    <section className="flex items-end gap-6">
      <BadgeColumn />
      <UserColumn />
    </section>
  );
}

/**
 * The column for placing badges of Pan.
 *
 * It looks like a strip next to the main content.
 * It won't be shown in mobile mode.
 */
function BadgeColumn() {
  return (
    <section className="hidden md:block w-min space-y-2 leading-tight">
      <Badge>開發</Badge>
      <Badge>翻譯</Badge>
      <Badge>設計</Badge>
      <Badge>學生</Badge>
    </section>
  );
}

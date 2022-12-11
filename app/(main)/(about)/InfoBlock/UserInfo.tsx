import { BadgeColumn } from "./BadgeColumn";
import { UserColumn } from "./UserColumn";

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
    <section className="UserInfo flex items-end gap-6">
      <BadgeColumn />
      <UserColumn />
    </section>
  );
}

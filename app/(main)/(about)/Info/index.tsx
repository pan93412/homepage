import { BadgeColumn } from "./Badge";
import { UserColumn } from "./User";

/**
 * The flex container with Pan's information.
 */
export function UserInfo() {
  return (
    <section className="UserInfo flex items-end gap-6">
      <BadgeColumn />
      <UserColumn />
    </section>
  );
}

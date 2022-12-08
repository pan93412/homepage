import Image from "next/image";
import { Badge } from "../../../components/Core/Badge";
import panAvatar from "./pan.png";

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

/**
 * The column of Pan93412's information.
 */
function UserColumn() {
  return (
    <section className="UserColumn flex flex-col gap-2">
      <div className="avatar">
        <Image
          src={panAvatar}
          alt="Pan's Avatar"
          className="rounded-full"
          width={64}
          height={64}
        />
      </div>
      <h1 className="name text-2xl font-bold">Yi-Jyun Pan (pan93412)</h1>
      <p>
        嗨，我是 pan93412 😄 也可以直接稱呼我 pan。我是個來自台灣 🇹🇼
        的程式開發者 👨🏻‍💻、本地化翻譯員 💬、UI/UX 設計師 👨🏻‍🎨，也是個學生
        🤓。主要從事開源貢獻工作，也會在閒暇時參與軟體社群、協助解惑。
      </p>
    </section>
  );
}

/**
 * The column for placing badges.
 *
 * It looks like a strip next to the main content.
 * It won't be shown in mobile mode.
 */
function BadgeColumn() {
  return (
    <section className="BadgeColumn hidden h-full w-max flex-col gap-2 leading-5 md:flex">
      <Badge>開發</Badge>
      <Badge>翻譯</Badge>
      <Badge>設計</Badge>
      <Badge>學生</Badge>
    </section>
  );
}

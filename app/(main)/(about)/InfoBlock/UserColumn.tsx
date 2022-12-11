import Image from "next/image";
import panAvatar from "./pan.webp";

/**
 * The column includes the avatar and the
 * brief description of Pan.
 */
export function UserColumn() {
  return (
    <div className="UserColumn flex flex-col gap-2">
      <UserAvatar />
      <UserName />
      <UserIntroduction />
    </div>
  );
}

/**
 * The avatar of Pan.
 */
function UserAvatar() {
  return (
    <Image
      src={panAvatar}
      alt="Pan's Avatar"
      className="block rounded-full"
      width={64}
      height={64}
      priority
    />
  );
}

/**
 * The name of Pan.
 */
function UserName() {
  return <h1 className="name text-2xl font-bold">Yi-Jyun Pan (pan93412)</h1>;
}

/**
 * The brief introduction of Pan.
 */
function UserIntroduction() {
  return (
    <p>
      嗨，我是 pan93412 😄 也可以直接稱呼我 pan。我是個來自台灣 🇹🇼 的程式開發者
      👨🏻‍💻、本地化翻譯員 💬、UI/UX 設計師 👨🏻‍🎨，也是個學生
      🤓。主要從事開源貢獻工作，也會在閒暇時參與軟體社群、協助解惑。
    </p>
  );
}

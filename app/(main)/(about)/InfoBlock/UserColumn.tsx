import Image from "next/image";
import { CurrentAge } from "./CurrentAge";
import panAvatar from "./pan.webp";

/**
 * The column includes the avatar and the
 * brief description of Pan.
 * @internal
 */
export function UserColumn() {
  return (
    <div className="space-y-2">
      {/* Avatar */}
      <Image
        src={panAvatar}
        alt="Pan's Avatar"
        className="block rounded-full"
        width={64}
        height={64}
        priority
      />

      {/* Name */}
      <h1 className="text-2xl font-bold text-green-200">
        Yi-Jyun Pan (pan93412)
      </h1>

      <p className="text-sm text-neutral-400">
        Currently <CurrentAge /> years old.
      </p>

      {/* Introduction */}
      <p>
        嗨，我是 pan93412 😄 也可以直接稱呼我 pan。我是個來自台灣 🇹🇼
        的程式開發者 👨🏻‍💻、本地化翻譯員 💬、UI/UX 設計師 👨🏻‍🎨，也是個學生
        🤓。主要從事開源貢獻工作，也會在閒暇時參與軟體社群、協助解惑。
      </p>
    </div>
  );
}

import Image from "next/image";
import { CurrentAge } from "./CurrentAge";
import panAvatar from "./pan.webp";

/**
 * The column includes the avatar and the
 * brief description of Pan.
 *
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
        å¨ï¼ææ¯ pan93412 ð ä¹å¯ä»¥ç´æ¥ç¨±å¼æ panãææ¯åä¾èªå°ç£ ð¹ð¼
        çç¨å¼éç¼è ð¨ð»âð»ãæ¬å°åç¿»è­¯å¡ ð¬ãUI/UX è¨­è¨å¸« ð¨ð»âð¨ï¼ä¹æ¯åå­¸ç
        ð¤ãä¸»è¦å¾äºéæºè²¢ç»å·¥ä½ï¼ä¹æå¨éææåèè»é«ç¤¾ç¾¤ãåå©è§£æã
      </p>
    </div>
  );
}

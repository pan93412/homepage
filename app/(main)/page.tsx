"use client";

import * as Popover from "@radix-ui/react-popover";

/**
 * The page of main app (`/`)
 */
export default function Page() {
  return (
    <>
      <h1 className="text-2xl">Hi.</h1>
      <p>Welcome to this template.</p>

      <Popover.Root>
        <Popover.Trigger className="px-4 mt-2 rounded bg-neutral-700 first-letter:py-1">
          More info
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content className="p-4 mt-2 rounded bg-neutral-300 text-neutral-800">
            Some more info…
            <Popover.Arrow />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </>
  );
}

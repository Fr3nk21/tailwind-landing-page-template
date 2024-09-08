import Link from "next/link";
import Logo from "./logo";

export default function Footer({ border = false }: { border?: boolean }) {
  return (
    <footer>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div
          className={`grid gap-10 py-8 sm:grid-cols-4 md:py-12 ${border ? "border-t [border-image:linear-gradient(to_right,transparent,theme(colors.slate.200),transparent)1]" : ""}`}
        >
          {/* 1st block */}
          <div className="space-y-2 sm:col-span-12 lg:col-span-2">
            <div>
              <Logo />
            </div>
            <div className="text-sm text-gray-600">
              &copy; Cruip.com - All rights reserved.
            </div>
          </div>

          {/* 2d block */}
          <div className="space-y-2 sm:col-span-12 lg:col-span-2 flex flex-col justify-end h-full">
            <div className="text-sm text-gray-600 text-right">
              email@gmail.com
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { APP_NAME } from "@/app/config";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="my-4 flex justify-between gap-4 text-xs">
      <span className="text-neutral-500">
        © {currentYear} {APP_NAME}. All rights reserved.
      </span>
      <ul className="flex gap-4">
        <li>
          <Link
            href="/privacy"
            className="text-neutral-500 transition-colors duration-300 ease-in-out hover:text-neutral-950 hover:underline">
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link
            href="/terms"
            className="text-neutral-500 transition-colors duration-300 ease-in-out hover:text-neutral-950 hover:underline">
            Terms of Use
          </Link>
        </li>
        <li>
          <Link
            href="/imprint"
            className="text-neutral-500 transition-colors duration-300 ease-in-out hover:text-neutral-950 hover:underline">
            Imprint
          </Link>
        </li>
      </ul>
    </footer>
  );
}

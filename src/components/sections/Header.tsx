import { APP_NAME } from "@/app/config";
import Link from "next/link";

export function Header() {
  return (
    <header className="my-4 flex gap-4">
      <span className="text-sm font-semibold">{APP_NAME}</span>
      <nav className="text-sm">
        <ul className="flex gap-4">
          <li>
            <Link
              href="/"
              className="text-neutral-500 transition-colors duration-300 ease-in-out hover:text-neutral-950">
              Home
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

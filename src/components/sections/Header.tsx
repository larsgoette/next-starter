import { APP_NAME } from "@/app/config";
import Link from "next/link";

export function Header() {
  return (
    <header className="my-4 flex gap-4">
      <Link href="/" className="text-sm font-semibold">
        {APP_NAME}
      </Link>
      <nav className="text-sm">
        <ul className="flex gap-4">
          <li>
            <Link
              href="/"
              className="text-zinc-500 transition-colors duration-300 ease-in-out hover:text-zinc-950">
              Home
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

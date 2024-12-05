import { cn } from "@/lib/utils";
import Link from "next/link";

export function Button({
  className,
  href,
  variant = "filled",
  ...props
}: {
  className?: string;
  href?: string;
  variant?: "filled" | "outlined";
  [key: string]: any;
}) {
  const variants = {
    filled: "bg-zinc-950 hover:bg-zinc-700 text-white",
    outlined: "border-2 border-zinc-200 text-zinc-950 hover:border-zinc-400",
  };

  const buttonClasses = cn(
    "flex min-w-28 items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ease-in-out",
    variants[variant],
    className,
  );

  if (href) {
    return <Link href={href} className={buttonClasses} {...props} />;
  } else {
    return <button className={buttonClasses} {...props} />;
  }
}

import { cn } from "@/lib/utils";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export function Logo({ children, className }: Props) {
  return (
    <Link href={"/"}>
      <h2
        className={cn(
          "text-2xl text-darkColor font-black tracking-wider uppercase",
          className
        )}
      >
        {children}
      </h2>
    </Link>
  );
}

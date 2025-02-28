import { headerData } from "@/constants";
import Link from "next/link";

export function HeaderMenu() {
  return (
    <div>
      {headerData.map((item) => (
        <Link href={item.href} key={item.title}>
          {item.title}
        </Link>
      ))}
    </div>
  );
}

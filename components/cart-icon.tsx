import { ShoppingBag } from "lucide-react";
import Link from "next/link";

export function CartIcon() {
  return (
    <div>
      <Link href={"/cart"} className="group relative">
        <ShoppingBag className="size-5 hover:text-[var(--dark-color)] hoverEffect" />
        <span className="absolute -top-1 -right-1 bg-[var(--dark-color)] text-white h-3.5 w-3.5 rounded-full text-xs font-semibold flex items-center justify-center">
          0
        </span>
      </Link>
    </div>
  );
}

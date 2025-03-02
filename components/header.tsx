import { Container } from "./container";
import { HeaderMenu } from "./header-menu";
import { Logo } from "./logo";
import { MobileMenu } from "./mobile-menu";
import { SearchBar } from "./search-bar";
import { CartIcon } from "./cart-icon";
import { currentUser } from "@clerk/nextjs/server";
import { ClerkLoaded, SignedIn, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import Link from "next/link";
import { ListOrdered } from "lucide-react";
export async function Header() {
  const user = await currentUser();
  return (
    <header className="border-b border-b-gray-400 py-5 text-lightColor">
      <Container className="flex items-center justify-between gap-7 ">
        <HeaderMenu />
        <div className="w-auto md:w-1/3 flex items-center justify-center gap-2.5">
          <MobileMenu />
          <Logo>Tulos</Logo>
        </div>
        <div className="w-auto md:w-1/3 flex items-center justify-end gap-5">
          <SearchBar />
          <CartIcon />
          <ClerkLoaded>
            <SignedIn>
              <Link href={"/orders"} className="group relative">
                <ListOrdered className="size-5 hover:text-[var(--dark-color)] hoverEffect" />
                <span className="absolute -top-1 -right-1 bg-[var(--dark-color)] text-white h-3.5 w-3.5 rounded-full text-xs font-semibold flex items-center justify-center">
                  0
                </span>
              </Link>
              <UserButton />
            </SignedIn>
            {!user && (
              <SignInButton mode="modal">
                <Button>Login</Button>
              </SignInButton>
            )}
          </ClerkLoaded>
        </div>
      </Container>
    </header>
  );
}

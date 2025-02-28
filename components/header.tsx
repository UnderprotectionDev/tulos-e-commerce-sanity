import { Container } from "./container";
import { HeaderMenu } from "./header-menu";
import { Logo } from "./logo";
import { MobileMenu } from "./mobile-menu";
import { SearchBar } from "./search-bar";
import { CartIcon } from "./cart-icon";
export function Header() {
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
          <div className="text-sm font-semibold hover:text-[var(--dark-color)] hoverEffect">
            Login
          </div>
        </div>
      </Container>
    </header>
  );
}

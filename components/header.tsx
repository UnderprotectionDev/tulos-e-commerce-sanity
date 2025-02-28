import { Container } from "./container";
import { HeaderMenu } from "./header-menu";
import { Logo } from "./logo";
import { MobileMenu } from "./mobile-menu";

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
          RightBar
        </div>
      </Container>
    </header>
  );
}

import { Container } from "./container";
import { HeaderMenu } from "./header-menu";
import { Logo } from "./logo";

export function Header() {
  return (
    <header className="border-b border-b-gray-400 py-5 text-lightColor">
      <Container className="flex items-center justify-between gap-7 ">
        <HeaderMenu />
        <Logo />
        <div>RightBar</div>
      </Container>
    </header>
  );
}

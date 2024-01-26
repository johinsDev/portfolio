import { HeaderContainer } from "./header-container";
import { Logo } from "./logo";
import { MobileNav } from "./mobile-nav";
import { Nav } from "./nav";
import { ThemeToggler } from "./theme-toggler";

export function Header() {
  return (
    <HeaderContainer>
      <div className="flex items-center justify-between">
        <Logo />

        <div className="flex items-center gap-x-6">
          <Nav />
          <ThemeToggler />

          <div className="xl:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </HeaderContainer>
  );
}

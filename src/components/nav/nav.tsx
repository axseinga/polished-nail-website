import {
  StyledNav,
  NavLogoWrapper,
  NavMenu,
} from "@/components/nav/nav.styles";
import { Container } from "@/styles/elements";
import Image from "next/image";
import Link from "next/link";

export const Nav = () => {
  return (
    <StyledNav>
      <Container>
        <NavLogoWrapper>
          <Image
            src="/assets/logo.svg"
            alt="Polished by Charlotte"
            width={159}
            height={74}
          />
        </NavLogoWrapper>
        <NavMenu>
          <Link href="">About</Link>
          <Link href="">Services</Link>
          <Link href="">Book</Link>
          <Link href="">Gallery</Link>
          <Link href="">Blog</Link>
        </NavMenu>
      </Container>
    </StyledNav>
  );
};

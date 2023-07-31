import { StyledHero } from "@/components/hero/hero.styles";
import { Container } from "@/styles/app-styles";

export const Hero = () => {
  return (
      <StyledHero>
        <Container>
            <h1>
                <p>Polished</p>
                <span>by Charlotte</span>
            </h1>
        </Container>
      </StyledHero>
  );
};

import { StyledHero } from "@/components/hero/hero.styles";
import { Container } from "@/styles/app-styles";
import { HeroT } from "@/types";

type HeroProps = {
  data: HeroT;
};

export const Hero = ({ data }: HeroProps) => {
  return (
    <StyledHero $image={data.image}>
      <Container>
        <h1>
          <p>{data.title}</p>
          <span>{data.name}</span>
        </h1>
      </Container>
    </StyledHero>
  );
};

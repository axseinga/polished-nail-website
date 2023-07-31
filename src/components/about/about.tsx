import {
  StyledAbout,
  AboutBody,
  AboutContent,
  AboutImage,
} from "@/components/about/about.styles";
import { Container } from "@/styles/elements";
import { AboutT } from "@/types";
import Image from "next/image";
import { Button } from "../button/button";

type AboutProps = {
  data: AboutT;
};

export const About = ({ data }: AboutProps) => {
  return (
    <StyledAbout>
      <Container>
        <h2>{data.header}</h2>
        <AboutBody>
          <AboutContent>
            <p>{data.description}</p>
            <Button>{data.buttonText}</Button>
          </AboutContent>
          <AboutImage>
            <Image
              src={data.image.src}
              width={520}
              height={551}
              alt={data.image.alt}
            />
          </AboutImage>
        </AboutBody>
      </Container>
    </StyledAbout>
  );
};

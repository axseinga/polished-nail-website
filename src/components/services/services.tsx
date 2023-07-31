import { Container } from "@/styles/elements";
import { ServicesT } from "@/types";
import {
  StyledServices,
  ServicesBody,
  ServicesImageCollage,
  ServicesBigImageWrapper,
  ServicesMediumImageWrapper,
  ServicesSmallImageWrapper,
  ServicesIcons,
  ServicesIcon,
  ServicesIconWrapper,
} from "@/components/services/services.styles";
import Image from "next/image";

type ServicesProps = {
  data: ServicesT;
};

export const Services = ({ data }: ServicesProps) => {
  return (
    <StyledServices>
      <Container>
        <h2>{data.header}</h2>
        <ServicesBody>
          <ServicesImageCollage>
            <ServicesBigImageWrapper>
              <img src={data.imageBig.src} alt={data.imageBig.alt} />
            </ServicesBigImageWrapper>
            <ServicesMediumImageWrapper>
              <img src={data.imageMedium.src} alt={data.imageBig.alt} />
            </ServicesMediumImageWrapper>
            <ServicesSmallImageWrapper>
              <img src={data.imageSmall.src} alt={data.imageBig.alt} />
            </ServicesSmallImageWrapper>
          </ServicesImageCollage>
          <ServicesIcons>
            {data.icons &&
              data.icons.map((icon, index) => (
                <ServicesIcon key={icon.text}>
                  <ServicesIconWrapper
                    $color={index % 2 === 0 ? "primary" : "secondary"}
                  >
                    <Image src={icon.src} alt={icon.alt} fill />
                  </ServicesIconWrapper>
                  <p>{icon.text}</p>
                </ServicesIcon>
              ))}
          </ServicesIcons>
        </ServicesBody>
      </Container>
    </StyledServices>
  );
};

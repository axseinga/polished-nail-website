export type ImageT = {
  src: string;
  alt: string;
};

export type HeroT = {
  title: string;
  name: string;
  image: string;
};

export type AboutT = {
  header: string;
  description: string;
  buttonText: string;
  image: ImageT;
};

export type ServicesT = {
  header: string;
  icons: {
    src: string;
    alt: string;
    text: string;
  }[];
  imageBig: ImageT;
  imageMedium: ImageT;
  imageSmall: ImageT;
};

export type HomepageT = {
  hero: HeroT;
  about: AboutT;
  services: ServicesT;
};

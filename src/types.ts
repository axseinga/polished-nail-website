export type HeroT = {
  title: string;
  name: string;
  image: string;
};

export type AboutT = {
  header: string;
  description: string;
  buttonText: string;
  image: string;
  imageAlt: string;
}

export type HomepageT = {
  hero: HeroT;
  about: AboutT;
};

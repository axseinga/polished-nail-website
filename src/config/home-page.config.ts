import { HomepageT } from "@/types";

export const homepageConfig: HomepageT = {
  hero: {
    title: "Polished",
    name: "by Charlotte",
    image: "/assets/hero.png",
  },
  about: {
    header: "About Charlotte",
    description:
      "Welcome to Polished by Charlotte! I'm Charlotte, your dedicated nail beautician. With a passion for creativity and an eye for detail, I'm here to provide you with exceptional nail care and stunning designs. At Polished by Charlotte, you can expect a luxurious experience tailored to your unique style. Book your appointment today and let's bring your nail visions to life!",
    buttonText: "Book appointment",
    image: {
      src: "/assets/about-image.png",
      alt: "Charlotte standing in her nail saloon and smiling with her hands crossed.",
    },
  },
  services: {
    header: "My Services",
    icons: [
      {
        src: "/assets/services/services-icon-1.svg",
        alt: "",
        text: "Manicure",
      },
      {
        src: "/assets/services/services-icon-2.svg",
        alt: "",
        text: "Pedicure",
      },
      {
        src: "/assets/services/services-icon-3.svg",
        alt: "",
        text: "Nail Art",
      },
      {
        src: "/assets/services/services-icon-4.svg",
        alt: "",
        text: "Extension",
      },
      {
        src: "/assets/services/services-icon-5.svg",
        alt: "",
        text: "Nail Repair",
      },
      { src: "/assets/services/services-icon-6.svg", alt: "", text: "Removal" },
    ],
    imageBig: { src: "/assets/services/services-image-big.png", alt: "" },
    imageMedium: { src: "/assets/services/services-image-medium.png", alt: "" },
    imageSmall: { src: "/assets/services/services-image-small.png", alt: "" },
  },
};

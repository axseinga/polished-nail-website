import { Fira_Sans_Condensed } from "next/font/google";
import { Parisienne } from "next/font/google";

export const firaSansCondensedFont = Fira_Sans_Condensed({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const parisienneFont = Parisienne({
  weight: ["400"],
  subsets: ["latin"],
});

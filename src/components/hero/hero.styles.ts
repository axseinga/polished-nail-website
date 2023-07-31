"use client";

import styled from "styled-components";

type StyledHero = {
  $image: string;
};

export const StyledHero = styled.header<StyledHero>`
  width: 100%;
  height: 90vh;
  background-image: ${({ $image }) => $image ? `url(${$image})` : `url("/assets/hero.png)`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  & > div {
    height: 100%;
    font-size: clamp(10px, 1.5vw, 4em);

    & h1 {
      padding-top: 4em;
      & p {
        font-size: 5.5em;
        font-weight: 800;
      }

      & span {
        font-size: 2.5em;
        font-family: var(--font-header);
        margin-left: 4.5em;
      }
    }
  }
`;

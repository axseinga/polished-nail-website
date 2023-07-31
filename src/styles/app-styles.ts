"use client";

import styled, { createGlobalStyle } from "styled-components";
import { BREAKPOINT_MOBILE } from "@/const/breakpoints";
import reset from "styled-reset";
import { parisienneFont, firaSansCondensedFont } from "./fonts";

export const AppStyles = createGlobalStyle`
${reset}

  :root {
    --color-white: #ffffff;
    --color-black: #000000;
    --color-text: #000000;
    --color-background: #ffffff;
    --color-primary: #F2A6D6;
    --color-secondary: #F6E39F;
    --font-header: ${parisienneFont.style.fontFamily}, sans-serif;
    --font-text: ${firaSansCondensedFont.style.fontFamily}, sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    color: inherit;
  }

  html {
    font-size: 20px;
    font-family: var(--font-text);
    font-weight: normal;
    font-display: block;
    line-height: 1.2;
    text-rendering: geometricPrecision;
    color: var(--color-text);
    overscroll-behavior: none;

    @media (max-width: ${BREAKPOINT_MOBILE}) {
      inline-size: 100%;
      block-size: 100%;
      overflow: hidden;
    }
  }

  body {
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;
    overscroll-behavior: none;
    position: relative;
    display: flex;
    flex-direction: column;
    inline-size: 100%;
    block-size: 100%;
  }

  main {
    position: relative;
  }

  h1, p {
    font-family: var(--font-text);
  }

  h2, h3 {
    font-family: var(--font-header);
  }

  h2 {
    font-size: 3em;
  }
`;

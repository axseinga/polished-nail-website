"use client";

import styled, { createGlobalStyle } from "styled-components";
import { BREAKPOINT_MOBILE } from "@/const/breakpoints";

export const AppStyles = createGlobalStyle`

  :root {
    --color-white: #ffffff;
    --color-black: #000000;
    --color-text: #000000;
    --color-background: #ffffff;;
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
    font-family: "Fira Sans Condensed", sans-serif;
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
`;

export const Container = styled.div`
  inline-size: 100%;
  max-inline-size: 72em;
  margin-inline: auto;
`;
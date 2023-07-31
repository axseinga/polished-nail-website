"use client";

import styled from "styled-components";

export const StyledAbout = styled.section`
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const AboutBody = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  justify-items: end;
`;

export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3em;
  & p {
    font-size: 1.2em;
    line-height: 1.5em;
    letter-spacing: 0.01em;
  }
`;

export const AboutImage = styled.div``;

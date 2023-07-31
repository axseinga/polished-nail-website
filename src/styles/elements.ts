"use client";

import styled from "styled-components";

type SpacerProps = {
    times?: number;
  };
  
  export const Spacer = styled.div<SpacerProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 1400px;
    height: calc(1em * ${({ times = 2 }) => times});
    margin-left: auto;
    margin-right: auto;
  `;

export const Container = styled.div`
inline-size: 100%;
max-inline-size: 1200px;
margin-inline: auto;
`;
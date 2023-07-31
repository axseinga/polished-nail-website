"use client";

import styled from "styled-components";

export const StyledServices = styled.section`
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4em;
  }
`;

export const ServicesBody = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 42% 53%;
  gap: 5%;
  place-items: center;
`;

export const ServicesImageCollage = styled.div`
  width: 100%;
  position: relative;
  transform: translateX(10%);
`;

export const ServicesBigImageWrapper = styled.div`
  border-radius: 45px;
  width: 23em;
  & img {
    width: 100%;
    height: auto;
  }
`;

export const ServicesMediumImageWrapper = styled.div`
  position: absolute;
  bottom: -22%;
  right: 22%;
  border-radius: 50%;

  & img {
    width: 11em;
    height: auto;
  }
`;

export const ServicesSmallImageWrapper = styled.div`
  position: absolute;
  bottom: -2%;
  left: -8%;
  border-radius: 50%;

  & img {
    width: 8em;
    height: auto;
  }
`;

export const ServicesIcons = styled.div`
  width: 100%;
  height: min-content;
  display: grid;
  grid-template-columns: 33% 33% 33%;
  grid-template-rows: 50% 50%;
  gap: 1em;
`;

export const ServicesIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1em;
`;

type ServicesIconWrapperProps = {
  $color: string;
};

export const ServicesIconWrapper = styled.div<ServicesIconWrapperProps>`
  border: 3px solid
    ${({ $color }) =>
      $color === "primary" ? `var(--color-primary)` : `var(--color-secondary)`};
  border-radius: 50%;
  width: 6em;
  height: 6em;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;

  & img {
    width: 80%;
    height: auto;
    object-fit: contain;
    transform: translateY(10px);
  }
`;

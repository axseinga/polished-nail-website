"use client";

import styled from "styled-components";

export const StyledNav = styled.nav`
  background-color: var(--color-black);

  & > div {
    display: grid;
    grid-template-columns: 40% 60%;
    justify-content: end;
    padding: 0.5em 0;
  }
`;

export const NavLogoWrapper = styled.div`
  & img {
    width: 6em;
    height: auto;
  }
`;

export const NavMenu = styled.div`
  color: var(--color-white);
  font-weight: 500;

  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & a {
    text-decoration: none;
  }
`;

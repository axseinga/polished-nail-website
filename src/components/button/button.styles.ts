"use client";

import styled from "styled-components";
import { ButtonVariantType } from "./button";

type ButtonWrapperProps = {
  variant?: ButtonVariantType;
};

export const ButtonWrapper = styled.button<ButtonWrapperProps>`
  background-color: var(--color-secondary);
  border: none;
  border-radius: 20px;
  padding: 0.5em 1.5em;
  font-size: 1.5em;
  font-weight: 500;
  letter-spacing: 0.02em;
  cursor: pointer;
`;

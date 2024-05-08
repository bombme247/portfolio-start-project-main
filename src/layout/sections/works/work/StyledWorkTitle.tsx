import React from "react";
import styled from "styled-components";
import { theme } from "../../../../styles/Theme";

export const StyledWorkTitle = styled.button`
  max-width: 80%;
  text-align: center;
  color: ${theme.colors.fontAccent};
  text-transform: uppercase;
  font-weight: 600;
  font-size: 20px;
  transition: all .5s ease;
`
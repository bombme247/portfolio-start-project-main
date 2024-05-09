import React from "react";
import styled from "styled-components";
import { theme } from "../styles/Theme";
import { font } from "../styles/Common";

export const SectionTitle = styled.h2`
${font({weight:800, Fmax: 50, Fmin: 35} )};
  /* color: ${theme.colors.fontAccent}; */
`
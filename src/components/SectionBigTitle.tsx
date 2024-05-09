import styled from "styled-components";
import { theme } from "../styles/Theme";
import { font } from "../styles/Common";

export const SectionBigTitle = styled.span`
  position: absolute;
  top: -10px;
  left: 0;
  right: 0;
  color: rgba(255, 255, 255, 0.1);
  z-index: -1;
  ${font({weight:900, Fmax: 90, Fmin: 60, color: theme.colors.secondaryBg})};
`
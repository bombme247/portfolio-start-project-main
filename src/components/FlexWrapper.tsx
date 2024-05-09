import React from "react";
import styled from "styled-components";
import { theme } from "../styles/Theme";

type FlexWrapperPropsType = {
  direction?: string
  justify?: string
  align?: string
  width?: string
  wrap?: string
  gap?: string
  height?: string
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
  display: flex;
  flex-direction: ${props => props.direction || "row"};
  justify-content: ${props => props.justify || "center"};
  align-items: ${props => props.align || "center"};
  width: ${props => props.width || "100%"};
  flex-wrap: ${props => props.wrap || "no-wrap"};
  height: ${props => props.height || "100%"} ;
  gap: ${props => props.gap};

  @media ${theme.media.tablet} {
    flex-wrap: wrap;
  }
`
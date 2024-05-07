import React from "react";
import styled from "styled-components";

type FlexWrapperPropsType = {
  direction?: string
  justify?: string
  align?: string
  width?: string
  wrap?: string
  gap?: string
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
  display: flex;
  flex-direction: ${props => props.direction || "row"};
  justify-content: ${props => props.justify || "space-between"};
  align-items: ${props => props.align || "center"};
  width: ${props => props.width || "90%"};
  flex-wrap: ${props => props.wrap || "no-wrap"};
  height: 100%;
  gap: ${props => props.gap}
`
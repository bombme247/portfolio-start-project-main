import styled from "styled-components";

type StyledSectionPropsType = {
  background?: string
}

export const StyledSection = styled.section<StyledSectionPropsType>`
  /* min-height: 100vh; */
  background-color: ${props => props.background || "#d5cfc7"};
  display: flex;
  flex-direction: column;
`
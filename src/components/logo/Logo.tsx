import React from "react"
import styled from "styled-components"
import { theme } from "../../styles/Theme"

export const Logo = () => {
  return (
    <StyledLogo href="">
      nadia
    </StyledLogo>
  )
}

const StyledLogo = styled.a`
    font-weight: 900;
    font-size: 24px;
    /* text-transform: uppercase; */
    color: ${theme.colors.fontAccent};
`

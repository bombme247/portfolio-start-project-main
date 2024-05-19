import styled from "styled-components"
import { theme } from "../../../styles/Theme"
import { font } from "../../../styles/Common"

const Main = styled.section`
  display: flex;
  min-height: 100vh;
`


const Photo = styled.img`
  width: 375px;
  flex-grow: 1;
  object-fit: cover;
`

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 450px;

  @media ${theme.media.tablet} {
    margin-bottom: 30px;
  }
`

const Subheading = styled.span`
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: ${theme.colors.accent};
`

const NameTitle = styled.h2`
  ${font({weight:800, lineHeight: 1.2, Fmax: 60, Fmin: 40} )};

  span {
    color: ${theme.colors.accent};
    white-space: nowrap;
  }
`

const MainTitle = styled.h1`
  ${font({weight:400, Fmax: 30, Fmin: 20} )};
  p {
    display: none;
  }
`

export const S = {
  Main,
  Photo,
  TitleWrapper,
  Subheading,
  NameTitle,
  MainTitle,
}
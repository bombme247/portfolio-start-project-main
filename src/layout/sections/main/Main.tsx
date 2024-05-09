import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import photo from "../../../assets/images/photo3.png";
import styled from "styled-components";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";
import { font } from "../../../styles/Common";

export const Main = () => {
  return (
    <StyledMain>

      <Container>
        <FlexWrapper>
          <TitleWrapper>
            <Subheading>Hello!</Subheading>
            <NameTitle>I am <span>Nadia Park</span></NameTitle>
            <MainTitle>A Front-end Developer based in South Korea</MainTitle>
          </TitleWrapper>
          <Photo src={photo} alt="" />
        </FlexWrapper>
      </Container>

    </StyledMain>
  )
}

const StyledMain = styled.section`
  display: flex;
  min-height: 100vh;
`


const Photo = styled.img`
  width: 500px;
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
`
import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import photo from "../../../assets/images/photo3.png";
import styled from "styled-components";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper>
          <TitleWrapper>
            <Subheading>Hello!</Subheading>
            <NameTitle>I am <Name>Nadia Park</Name></NameTitle>
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
  width: 600px;
  object-fit: cover;
`

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  min-height: 300px;
  gap: 15px;
  /* border: 1px solid red; */
`

const Subheading = styled.span`
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: ${theme.colors.accent};
`

const NameTitle = styled.h2`
  font-size: 60px;
  color: ${theme.colors.fontAccent};
  line-height: 1.2;
  font-weight: 800;
`

const Name = styled.span`
  color: ${theme.colors.accent};
`

const MainTitle = styled.h1`
  font-size: 30px;
  font-weight: 400;
  color: ${theme.colors.fontAccent};
`
import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import photo from "../../../assets/images/photo.png";
import styled from "styled-components";
import { StyledSection } from "../../../components/StyledSection";

export const Main = () => {
  return (
    <StyledSection>
      <FlexWrapper>
        <div>
          <span>Hello!</span>
          <h2>I am Nadia Park</h2>
          <h1>A Front-end Developer based in South Korea</h1>
        </div>
        <Photo src={photo} alt=""/>
      </FlexWrapper>
    </StyledSection>
  )
}

const Photo = styled.img`
  width: 250px;
  height: 330px;
  object-fit: cover;
`
import React from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Skill } from "./skill/Skill";
import styled from "styled-components";
import { Container } from "../../../components/Container";
import { TitleWrapper } from "../../../components/TitleWrapper";
import { SectionBigTitle } from "../../../components/SectionBigTitle";

export const Skills = () => {
  return (
    <StyledSkills>
      <Container>
      <TitleWrapper>
           <SectionTitle>
          My Skills
        </SectionTitle>
        <SectionBigTitle>
          My Skills
        </SectionBigTitle>
        </TitleWrapper>
        <FlexWrapper wrap="wrap" gap="30px">
          <Skill iconId={"html"} title={"HTML5"} viewbox={"0 0 13.5 15.85"}/>
          <Skill iconId={"css"} title={"CSS3"} viewbox={"0 0 13.5 15.85"}/>
          <Skill iconId={"javascript"} title={"javascript"} viewbox={"0 0 16 16"}/>
          <Skill iconId={"styledComponents"} title={"Styled Components"} viewbox={"0 0 24 10.48"}  width="60px" height="60px"/>
          <Skill iconId={"typescript"} title={"Typescript"} viewbox={"0 0 16 16"}/>
          <Skill iconId={"react"} title={"react"} viewbox={"0 0 16 14.46"}/>
        </FlexWrapper>
      </Container>
    </StyledSkills>
  )
}

const StyledSkills = styled.section`
  display: flex;
  flex-direction: column;
`

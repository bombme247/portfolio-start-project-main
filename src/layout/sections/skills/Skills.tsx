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
        <FlexWrapper wrap="wrap" gap="40px">
          <Skill iconId={"html"} title={"HTML5"} />
          <Skill iconId={"css"} title={"CSS3"} />
          <Skill iconId={"javascript"} title={"javascript"} />
          <Skill iconId={"styledComponents"} title={"Styled Components"} />
          <Skill iconId={"typescript"} title={"Typescript"} />
          <Skill iconId={"react"} title={"react"} />
        </FlexWrapper>
      </Container>
    </StyledSkills>
  )
}

const StyledSkills = styled.section`
  display: flex;
  flex-direction: column;
`

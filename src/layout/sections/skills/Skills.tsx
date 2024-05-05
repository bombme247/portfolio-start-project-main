import React from "react";
import { StyledSection } from "../../../components/StyledSection";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Skill } from "./skill/Skill";

export const Skills = () => {
  return (
    <StyledSection>
      <SectionTitle>My skills</SectionTitle>
      <FlexWrapper>
        <Skill iconId={"html"} title={"HTML5"}/>
        <Skill iconId={"css"} title={"CSS3"}/>
        <Skill iconId={"typescript"} title={"typescript"}/>
        <Skill iconId={"styledComponents"} title={"Styled Components"}/>
      </FlexWrapper>
    </StyledSection>
  )
}
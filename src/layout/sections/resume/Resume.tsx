import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { StyledSection } from "../../../components/StyledSection";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";

export const Resume = () => {
  return (
    <StyledSection background="#787270" >
      <SectionTitle>
        Resume
      </SectionTitle>
      <FlexWrapper direction="column">
        <ResumeText>
          My name is Nadia Park. Currently based in South Korea. 
        </ResumeText>
        <ResumeText>
        Newbie to Development and strive to learn a lot of new interesting things. Passionate about creation.
        </ResumeText>
        <ResumeText>
        Bachelor of Economics | Southern University (Institute of Management Business and Law). 
        </ResumeText>
      </FlexWrapper>
    </StyledSection>
  )
}

const ResumeText = styled.p`
  
`
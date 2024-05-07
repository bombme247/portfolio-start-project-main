import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Container } from "../../../components/Container";
import { SectionBigTitle } from "../../../components/SectionBigTitle";
import { TitleWrapper } from "../../../components/TitleWrapper";

export const Resume = () => {
  return (
    <StyledResume>

      <Container>
        <TitleWrapper>
           <SectionTitle>
          Resume
        </SectionTitle>
        <SectionBigTitle>
          Resume
        </SectionBigTitle>
        </TitleWrapper>
       
        <FlexWrapper direction="column">
          <ResumeText>
            My name is Nadia Park. Currently based in South Korea.
          </ResumeText>
          <ResumeText>
            Bachelor of Economics | Southern University (Institute of Management Business and Law).
          </ResumeText>
          <ResumeText>
            Newbie to Development and strive to learn a lot of new interesting things. Passionate about creation.
          </ResumeText>
        </FlexWrapper>
      </Container>

    </StyledResume>
  )
}

const StyledResume = styled.section`
  display: flex;
  flex-direction: column;
`


const ResumeText = styled.p`
  
`
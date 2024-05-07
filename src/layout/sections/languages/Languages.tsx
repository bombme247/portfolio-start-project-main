import React from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import styled from "styled-components";
import { Language } from "./language/Language";
import { Container } from "../../../components/Container";


export const Languages = () => {
  return (
    <StyledLanguages>

      <Container>
        <SectionTitle>Languages</SectionTitle>
        <FlexWrapper direction="column">
          <Language title={"Russian"} level={"native"} progress={"100%"} />
          <Language title={"English"} level={"B2"} progress={"60%"} />
          <Language title={"Korean"} level={"Topik 3"} progress={"40%"} />
        </FlexWrapper>
      </Container>
      
    </StyledLanguages>
  )
}

const StyledLanguages = styled.section`
  display: flex;
  flex-direction: column;
`

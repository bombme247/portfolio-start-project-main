import React from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import styled from "styled-components";
import { Language } from "./language/Language";
import { Container } from "../../../components/Container";
import { TitleWrapper } from "../../../components/TitleWrapper";
import { SectionBigTitle } from "../../../components/SectionBigTitle";


export const Languages = () => {
  return (
    <StyledLanguages>

      <Container>
        <TitleWrapper>
          <SectionTitle>
            Languages
          </SectionTitle>
          <SectionBigTitle>
            Languages
          </SectionBigTitle>
        </TitleWrapper>
        <FlexWrapper direction="column">
          <Language title={"Russian"} level={"native"} progress={100} />
          <Language title={"English"} level={"B2"} progress={66} />
          <Language title={"Korean"} level={"Topik 3"} progress={40} />
        </FlexWrapper>
      </Container>

    </StyledLanguages>
  )
}

const StyledLanguages = styled.section`
  display: flex;
  flex-direction: column;
`

import React from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import styled from "styled-components";
import { Container } from "../../../components/Container";

export const Slogan = () => {
  return (
    <StyledSlogan>
      <Container>
      <SectionTitle>I'm Available for freelancing</SectionTitle>
      </Container>
    </StyledSlogan>
  )
}

const StyledSlogan = styled.section`
  display: flex;
  flex-direction: column;
`

import React from "react";
import { Container } from "../../../components/Container";
import { S } from "./Slogan_Styles";

export const Slogan: React.FC = () => {
  return (
    <S.Slogan id={"contact"}>
      <Container>
      <S.SloganTitle>I'm <span>Available</span> for freelancing</S.SloganTitle>
      <S.SloganSubtitle>
        Let's create together!
      </S.SloganSubtitle>
      <S.SloganButton>Hire Me</S.SloganButton>
      </Container>
    </S.Slogan>
  )
}


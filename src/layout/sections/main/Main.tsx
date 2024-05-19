import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import photo from "../../../assets/images/photo3.png";
import { Container } from "../../../components/Container";
import { S } from "./Main_Styles";
import Typewriter from 'typewriter-effect';


export const Main: React.FC = () => {
  return (
    <S.Main id={"home"}>
      <Container>
        <FlexWrapper>
          <S.TitleWrapper>
            <S.Subheading>Hello!</S.Subheading>
            <S.NameTitle>I am <span>Nadia Park</span></S.NameTitle>
            <S.MainTitle>
              <p>A Front-end Developer based in South Korea</p>
              <Typewriter
                options={{
                  strings: ['A Front-end Developer based in South Korea'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </S.MainTitle>
          </S.TitleWrapper>
          <S.Photo src={photo} alt="" />
        </FlexWrapper>
      </Container>
    </S.Main>
  )
}

import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { TitleWrapper } from "../../../components/TitleWrapper";
import { SectionBigTitle } from "../../../components/SectionBigTitle";
import { Work } from "./work/Work";
import coffee from "../../../assets/images/coffee.png"
import player from "../../../assets/images/player.png"
import React from "react";
import { S } from "./Works_Styles";

const workData = [
  {
    src: player
  },
  {
    src: coffee
  }
]

export const Works: React.FC = () => {
  return (
    <S.Works id={"works"}>
      <Container>
      <TitleWrapper>
        <SectionTitle>
          My Works
        </SectionTitle>
        <SectionBigTitle>
          My Works
        </SectionBigTitle>
        </TitleWrapper>
        <FlexWrapper justify="space-between" gap="30px">
          {workData.map( (work, index) => {
            return <Work src={work.src} key={index}/>
          })}
        </FlexWrapper>
      </Container>
    </S.Works>
  )
}

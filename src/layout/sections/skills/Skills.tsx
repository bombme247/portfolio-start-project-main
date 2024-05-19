import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { TitleWrapper } from "../../../components/TitleWrapper";
import { SectionBigTitle } from "../../../components/SectionBigTitle";
import { S } from "./Skills_Styles";
import { Skill } from "./skill/Skill";


const skillData = [
  {
    iconId: "html",
    title: "HTML5",
    viewbox: "0 0 13.5 15.85"
  },
  {
    iconId: "css",
    title: "CSS3",
    viewbox: "0 0 13.5 15.85"
  },
  {
    iconId: "javascript",
    title: "javascript",
    viewbox: "0 0 16 16"
  },
  {
    iconId: "styledComponents",
    title: "Styled Components",
    viewbox: "0 0 24 10.48",
    width: "60px",
    height: "60px",
  },
  {
    iconId: "typescript",
    title: "Typescript",
    viewbox: "0 0 16 16",
  },
  {
    iconId: "react",
    title: "React",
    viewbox: "0 0 16 14.46",
  },
]

export const Skills = () => {
  return (
    <S.Skills id={"skills"}>
      <Container>
      <TitleWrapper>
           <SectionTitle>
          My Skills
        </SectionTitle>
        <SectionBigTitle>
          My Skills
        </SectionBigTitle>
        </TitleWrapper>
        <FlexWrapper wrap="wrap" gap="30px">
          {skillData.map( (s, index) => {
            return <Skill iconId={s.iconId} key={index}
                          title={s.title}
                          viewbox={s.viewbox}
                          width={s.width}
                          height={s.height}/>
          })}
        </FlexWrapper>
      </Container>
    </S.Skills>
  )
}

import styled from "styled-components";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { TitleWrapper } from "../../../components/TitleWrapper";
import { SectionBigTitle } from "../../../components/SectionBigTitle";
import { Work } from "./work/Work";
import coffee from "../../../assets/images/coffee.png"
import player from "../../../assets/images/player.png"
import { theme } from "../../../styles/Theme";


export const Works = () => {
  return (
    <StyledWorks>
      <Container>
      <TitleWrapper>
        <SectionTitle>
          My Works
        </SectionTitle>
        <SectionBigTitle>
          My Works
        </SectionBigTitle>
        </TitleWrapper>
        <FlexWrapper justify="space-between" gap="30px" height="350px" wrap="wrap">
          <Work src={player}/>
          <Work src={coffee}/>
        </FlexWrapper>
      </Container>
    </StyledWorks>
  )
}

const StyledWorks = styled.section`
  
`

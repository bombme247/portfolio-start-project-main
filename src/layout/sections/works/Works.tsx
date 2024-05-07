import styled from "styled-components";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { TitleWrapper } from "../../../components/TitleWrapper";
import { SectionBigTitle } from "../../../components/SectionBigTitle";
import { Work } from "./work/Work";
import coffee from "../../../assets/images/coffee.png"
import player from "../../../assets/images/player.png"


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
        <Grid>
          <Work src={player}/>
          <Work src={coffee}/>
        </Grid>
      </Container>
    </StyledWorks>
  )
}

const StyledWorks = styled.section`
  
`

const Grid = styled.div`
width: 90%;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr;
  gap: 50px;
  grid-auto-flow: row;
  grid-template-areas:
    ". .";

`
import styled from "styled-components";
import bgImage from "../../../assets/images/freelanceBg.jpg"
import { theme } from "../../../styles/Theme";


const Slogan = styled.section`
  display: flex;
  min-height: 575px;
  flex-direction: column;
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
  align-items: center;
  justify-content: center;
`

const SloganTitle = styled.h2`
  font-size: 40px;
  font-weight: 900;
  color: ${theme.colors.fontAccent};
  text-align: center;
  
  span {
    color: ${theme.colors.accent};
  }
`

const SloganSubtitle = styled.p`
font-size: 20px;
`
const SloganButton = styled.button`
cursor: pointer;
  width: 158px;
  height: 52px;
  border-radius: 40px;
  background: #ffbd39;
  color: #000000;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
`

export const S = {
  Slogan,
  SloganTitle,
  SloganSubtitle,
  SloganButton
}
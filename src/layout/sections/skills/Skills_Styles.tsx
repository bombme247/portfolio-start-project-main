import styled from "styled-components";
import { theme } from "../../../styles/Theme";

const Skills = styled.section`
  display: flex;
  flex-direction: column;
`

const Skill = styled.div`
  width: 360px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`

const SkillTitle = styled.h3`
  text-transform: lowercase;
  color: ${theme.colors.fontAccent};
`
export const S = {
  Skills,
  Skill,
  SkillTitle,
}
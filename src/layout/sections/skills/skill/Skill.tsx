import React from "react";
import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";
import { theme } from "../../../../styles/Theme";

type SkillPropsType = {
  iconId: string
  title: string
  viewbox: string
  width?: string
  height?: string
}

export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
      <Icon iconId={props.iconId} viewbox={props.viewbox} width={props.width || "50"} height={props.height || "50"}/>
      <SkillTitle>{props.title}</SkillTitle>
    </StyledSkill>
  )
}

const StyledSkill = styled.div`
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

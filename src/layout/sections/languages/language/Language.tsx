import React from "react"
import styled from "styled-components"
import { theme } from "../../../../styles/Theme"

type LanguagePropsType = {
  title: string
  level: string
  progress: string
}

export const Language = (props: LanguagePropsType) => {
  return (
    <LanguageBar>
      <LanguageInfo>
        <LanguageTitle>{props.title} </LanguageTitle>
        <LanguageLevel> ({props.level})</LanguageLevel>
      </LanguageInfo>
      <ProgressLine>
        {/* <ProgressSpan></ProgressSpan> */}
      </ProgressLine>
    </LanguageBar>
  )
}

const LanguageBar = styled.div`
  &:not(:last-child) {
    margin-bottom: 40px;
  }
`
const LanguageInfo = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  width: 30%;
  gap: 20px;
`

const LanguageTitle = styled.p`
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: 500;
  line-height: 1.5;
  color: ${theme.colors.fontAccent};
`

const LanguageLevel = styled.p`
  margin-bottom: 10px;
  line-height: 1.5;
`

const ProgressLine = styled.div`
  height: 10px;
  width: 600px;
  background-color: #1a1a1a;
  border-radius: 0.25rem;
  position: relative;
`

const ProgressSpan = styled.span<LanguagePropsType>`
  height: 100%;
  border-radius: 0.25rem;
  background-color: aliceblue;
  position: absolute;
  width: ${props => props.progress};
`
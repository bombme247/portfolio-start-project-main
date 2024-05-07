import React from "react"
import styled from "styled-components"

type LanguagePropsType = {
  title: string
  level: string
  progress: string
}

export const Language = (props: LanguagePropsType) => {
  return (
    <LanguageBar>
      <LanguageInfo>
        <LanguageTitle>{props.title}</LanguageTitle>
        <LanguageLevel>{props.level}</LanguageLevel>
      </LanguageInfo>
      <ProgressLine>
      {/* <ProgressSpan progress={props.progress}></ProgressSpan> */}
      </ProgressLine>
    </LanguageBar>
  )
}

const LanguageBar = styled.div`

`
const LanguageInfo = styled.div`
  display: flex;
  align-items: center;
`

const LanguageTitle = styled.p`
  
`

const LanguageLevel = styled.p`
  
`

const ProgressLine = styled.div`
  height: 10px;
  width: 600px;
  background-color: #cc7878;
  border-radius: 10px;
  position: relative;
`
const ProgressSpan = styled.span<LanguagePropsType>`
  height: 100%;
  width: ${props => props.progress};
  border-radius: 10px;
  background-color: aliceblue;
  position: absolute;
`
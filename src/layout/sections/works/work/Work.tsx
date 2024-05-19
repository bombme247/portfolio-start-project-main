import React from "react";
import { StyledWorkTitle } from "./StyledWorkTitle";
import { S } from "../Works_Styles";


type WorkPropsType = {
  src: string
}

export const Work: React.FC<WorkPropsType> = (props: WorkPropsType) => {
  return (
    <S.Work>
      <S.ImageWrapper>
        <S.WorkImage src={props.src} alt=""/>
        <StyledWorkTitle>View project</StyledWorkTitle>
      </S.ImageWrapper>
    </S.Work>
  )
}

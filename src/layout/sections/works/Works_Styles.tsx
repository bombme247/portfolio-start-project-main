import styled from "styled-components"
import { StyledWorkTitle } from "./work/StyledWorkTitle"

const Works = styled.section`
  
`
const Work = styled.div`
  max-height: 350px;
  height: 100%;
  border-radius: 5px;
  overflow: hidden;
  `

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: all .7s ease;
 

&:hover{

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #ffbd39;
    opacity: 0.9;
    transition: all .7s ease;
  }

  ${StyledWorkTitle} {
  opacity: 1;
  cursor: pointer;
  }
}

${StyledWorkTitle} {
  opacity: 0;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
`

const WorkImage = styled.img`
  width: 100%;
  border-radius: 5px;
  height: 100%;
  object-fit: cover;
`

export const S = {
  Works,
  Work,
  ImageWrapper,
  WorkImage
}
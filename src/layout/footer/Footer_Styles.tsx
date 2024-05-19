import styled from "styled-components"
import { theme } from "../../styles/Theme"

const Footer = styled.footer`
  padding: 100px 0 20px;
`

const SocialList = styled.ul`
  display: flex;
  margin: 30px 0;
  gap: 25px;
`

const SocialItem = styled.li`
  
`

const SocialLink = styled.a`
  height: 50px;
  width: 50px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  cursor: pointer;
  transition: all .5 ease;

  display: flex;
  justify-content: center;
  align-items: center;

  color: rgba(255, 255, 255, 0.6);
  
  &:hover {
    color: ${theme.colors.accent}
  }
`

const Copyright = styled.small`
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
  font-weight: 400;
  text-align: center;
`

export const S = {
  Footer,
  SocialList,
  SocialItem,
  SocialLink,
  Copyright
}
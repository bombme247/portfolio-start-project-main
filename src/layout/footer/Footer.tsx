import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../components/SectionTitle";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Icon } from "../../components/icon/Icon";
import { Container } from "../../components/Container";
import { theme } from "../../styles/Theme";

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FlexWrapper direction="column">
          <SectionTitle></SectionTitle>
          <SocialList>
            <SocialItem>
              <SocialLink>
                <Icon iconId={"instagram"} height={"25px"} width={"25px"} viewbox={"0 0 25 25"}/>
              </SocialLink>
            </SocialItem>
            <SocialItem>
              <SocialLink>
                <Icon iconId={"github"} height={"25px"} width={"25px"} viewbox={"0 0 25 25"}/>
              </SocialLink>
            </SocialItem>
            <SocialItem>
              <SocialLink>
                <Icon iconId={"linkedIn"} height={"25px"} width={"25px"} viewbox={"0 0 25 25"}/>
              </SocialLink>
            </SocialItem>
            <SocialItem>
              <SocialLink>
                <Icon iconId={"mail"} height={"25px"} width={"25px"} viewbox={"0 0 25 25"}/>
              </SocialLink>
            </SocialItem>
          </SocialList>
          <Copyright>©2024 Nadia Park. All rights reserved.</Copyright>
        </FlexWrapper>
      </Container>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  padding: 20px 0;
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
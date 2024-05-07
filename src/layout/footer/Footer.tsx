import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../components/SectionTitle";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Icon } from "../../components/icon/Icon";
import { Container } from "../../components/Container";

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FlexWrapper direction="column">
          <SectionTitle></SectionTitle>
          <SocialList>
            <SocialItem>
              <SocialLink>
                <Icon iconId={"instagram"} />
              </SocialLink>
            </SocialItem>
            <SocialItem>
              <SocialLink>
                <Icon iconId={"github"} />
              </SocialLink>
            </SocialItem>
            <SocialItem>
              <SocialLink>
                <Icon iconId={"linkedIn"} />
              </SocialLink>
            </SocialItem>
            <SocialItem>
              <SocialLink>
                <Icon iconId={"mail"} />
              </SocialLink>
            </SocialItem>
          </SocialList>
          <Copyright>©2024 Nadia Park. All rights reserved</Copyright>
        </FlexWrapper>
      </Container>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  
`

const SocialList = styled.ul`
  display: flex;
`
const SocialItem = styled.li`
  
`

const SocialLink = styled.a`
  
`

const Copyright = styled.small`
  
`
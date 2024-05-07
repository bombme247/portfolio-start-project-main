import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Container } from "../../components/Container";
import { HeaderMenu } from "./headerMenu/HeaderMenu";
import { theme } from "../../styles/Theme";

const items = ["Home", "Resume", "Skills","Works", "Languages", "Contact"]

export const Header = () => {
  return (
    <StyledHeader>

      <Container>
        <FlexWrapper>
          <Logo />
          <HeaderMenu menuItems={items}/>
        </FlexWrapper>
      </Container>

    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: ${theme.colors.primaryBg};
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 0; 
  right: 0;
  z-index: 10;
  
`
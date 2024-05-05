import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { FlexWrapper } from "../../components/FlexWrapper";

export const Header = () => {
  return (
    <StyledHeader>
      <FlexWrapper>
        <Logo />
        <Menu />
      </FlexWrapper>

    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: #867d71;
  display: flex;
  justify-content: space-between;
`
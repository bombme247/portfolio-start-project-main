import React from "react";
import styled from "styled-components";
import { theme } from "../../../styles/Theme";

export const HeaderMenu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledHeaderMenu>
      <ul>
        {props.menuItems.map((item: string, index: number) => {
          return <ListItem key={index}>
            <Link href="">{item}</Link>
          </ListItem>
        })}
      </ul>
    </StyledHeaderMenu>
  );
};

const StyledHeaderMenu = styled.nav`
  ul {
    display: flex;
    gap: 20px;
    justify-content: flex-end;
  }
`

const ListItem = styled.li`
  
`

const Link = styled.a`
  font-size: 16px;
  font-weight: 400;
  color: ${theme.colors.fontAccent};
  padding-top: .2rem;
  padding-bottom: .2rem;
  /* padding-left: 20px;
  padding-right: 20px; */
  text-align: center;
  position: relative;

  &:hover {
    color: ${theme.colors.accent};
  }

  &::after {
    content: "";
    display: inline-block;
    width: 100%;
    height: 2px;
    background-color: ${theme.colors.accent};
    position: absolute;
    bottom: 0;
    left: 0;
    transform: scale(0);
    transition: .7s;
  }

  &:hover::after {
      transform: scale(1);
    }

  
`
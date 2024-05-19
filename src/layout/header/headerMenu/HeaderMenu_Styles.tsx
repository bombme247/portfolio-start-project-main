import styled, { css } from "styled-components";
import { theme } from "../../../styles/Theme";
import { Link } from "react-scroll";

// ---- Menu ---- 

const MenuItem = styled.li`
  
`

const NavLink = styled(Link)`
  font-size: 16px;
  font-weight: 400;
  color: ${theme.colors.fontAccent};
  padding-top: .2rem;
  padding-bottom: .2rem;
  text-align: center;
  position: relative;
  cursor: pointer;

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

  &:hover, &.active {
    color: ${theme.colors.accent};
    &:after {
      transform: scale(1);
    }
  }
`

// ---- Mobile menu ---- 

const MobileMenu = styled.nav`

`

const MobileMenuPopup = styled.div<{isOpen: boolean}>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${theme.colors.primaryBg};
  display: none;
  z-index: 5;

  ${props => props.isOpen && css<{isOpen: boolean}>`
    display: flex;
    justify-content: center;
    align-items: center;
  `}

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
`

const BurgerButton = styled.button<{isOpen: boolean}>`
  position: fixed;
  top: -100px;
  right: -100px;
  width: 200px;
  height: 200px;
  z-index: 10;
  cursor: pointer;
  

  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${theme.colors.fontAccent};
    position: absolute;
    left: 40px;
    bottom: 50px;
    transition: all .5s ease-in-out;

    ${props => props.isOpen && css<{isOpen: boolean}>`
    background-color: rgba(255, 255, 255, 0);
    `}

    &::before {
      content: "";
      display: block;
      height: 2px;
      background-color: ${theme.colors.fontAccent};
      position: absolute;
      width: 36px;
      transform: translateY(-10px);
      transition: all .5s ease-in-out;

      ${props => props.isOpen && css<{isOpen: boolean}>`
      transform: rotate(-45deg) translateY(0);
      transition: all .5s ease-in-out;
      `}
    }

    &::after {
      content: "";
      display: block;
      height: 2px;
      background-color: ${theme.colors.fontAccent};
      position: absolute;
      width: 36px;
      transform: translateY(10px);
      transition: all .5s ease-in-out;

      ${props => props.isOpen && css<{isOpen: boolean}>`
      transform: rotate(45deg) translateY(0);
      transition: all .5s ease-in-out;
      `}
    }
  }
`

// ---- Desktop menu ---- 

const DesktopMenu = styled.nav`
  ul {
    display: flex;
    gap: 20px;
    justify-content: flex-end;
  }
`

export const S = {
  NavLink, 
  MenuItem,
  MobileMenu,
  MobileMenuPopup,
  BurgerButton,
  DesktopMenu
}
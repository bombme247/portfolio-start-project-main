import React from "react";
import {S} from "./../HeaderMenu_Styles"

const items = [
  {
    title: "Home",
    href: "home",
  },
  {
    title: "Resume",
    href: "resume",
  },
  {
    title: "Skills",
    href: "skills",
  },
  {
    title: "Works",
    href: "works",
  },
  {
    title: "Languages",
    href: "languages",
  },
  {
    title: "Contact",
    href: "contact",
  },
]

export const Menu: React.FC = () => {
  return (
    <ul>
    {items.map((item , index ) => {
      return <S.MenuItem key={index}>
        <S.NavLink
          activeClass="active"
          to={item.href}
          smooth={true}
          spy={true}
        >
          {item.title}
        </S.NavLink>
      </S.MenuItem>
    })}
  </ul>
  )
}

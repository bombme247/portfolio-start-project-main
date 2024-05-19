import React from "react";
import { SectionTitle } from "../../components/SectionTitle";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Icon } from "../../components/icon/Icon";
import { Container } from "../../components/Container";
import { S } from "./Footer_Styles";

const socialItemsData = [
  {
    iconId: "instagram",
    viewbox: "0 0 22 22",
  },
  {
    iconId: "github",
    viewbox: "0 0 20 20",
  },
  {
    iconId: "linkedIn",
    viewbox: "0 0 22 22",
  },
  {
    iconId: "mail",
    viewbox: "0 0 36 36",
  },
]

export const Footer: React.FC = () => {
  return (
    <S.Footer>
      <Container>
        <FlexWrapper direction="column">
          <SectionTitle></SectionTitle>
          <S.SocialList>
            {socialItemsData.map( (s, index) => {
              return(
                <S.SocialItem>
                  <S.SocialLink>
                    <Icon iconId={s.iconId} height={"25px"} width={"25px"} viewbox={s.viewbox}/>
                  </S.SocialLink>
                </S.SocialItem>
              ) 
            })}
          </S.SocialList>
          <S.Copyright>©2024 Nadia Park. All rights reserved.</S.Copyright>
        </FlexWrapper>
      </Container>
    </S.Footer>
  )
}

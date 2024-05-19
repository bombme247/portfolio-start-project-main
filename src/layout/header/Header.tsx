import React from "react";
import { Logo } from "../../components/logo/Logo";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Container } from "../../components/Container";
import { DesktopMenu} from "./headerMenu/desktopMenu/DesktopMenu";
import { MobileMenu } from "./headerMenu/mobileMenu/MobileMenu";
import {S} from "./Header_Styles";


export const Header: React.FC = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breackpoint = 768;

  React.useEffect( () => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener( "resize", handleWindowResize);
    return () => window.removeEventListener( "resize", handleWindowResize);
  }, []);

  return (
    <S.Header>
      <Container>
        <FlexWrapper justify="space-between">
          <Logo />

          {width < breackpoint ? <MobileMenu/> 
                               : <DesktopMenu/>}

        </FlexWrapper>
      </Container>
    </S.Header>
  );
};

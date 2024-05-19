import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { animateScroll as scroll} from "react-scroll";

export const Logo: React.FC = () => {
  return (
    <StyledLogo onClick={() => {scroll.scrollToTop()}}>
      nadia
    </StyledLogo>
  )
}

const StyledLogo = styled.a`
    font-weight: 900;
    font-size: 24px;
    color: ${theme.colors.fontAccent};
    cursor: pointer;
`

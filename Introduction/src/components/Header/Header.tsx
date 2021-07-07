import * as S from "./styles";
import semicolonMap from "../../assets/images/semicolon-map.png";
import github from "../../assets/images/github-logo.png";
import { Fragment } from "react";
const Header = (): JSX.Element => {
  return (
    <Fragment>
      <S.HeaderContainer>
        <S.Logo>
          <img src={semicolonMap} />
          <div>SEMICOLON;</div>
        </S.Logo>
        <S.Github href="https://github.com/semicolonDSM" target="_blank">
          <img src={github} />
        </S.Github>
      </S.HeaderContainer>
    </Fragment>
  );
};

export default Header;

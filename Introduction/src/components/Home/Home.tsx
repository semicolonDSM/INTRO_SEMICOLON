import { Fragment } from "react";
import * as S from "./styles";
import { useRef, useEffect } from "react";

const Home = (): JSX.Element => {
  return (
    <Fragment>
      <S.HomeContainer>
        <S.ClubMainText>
          <b>SEMICOLON</b>&nbsp;is a CLUB
        </S.ClubMainText>
      </S.HomeContainer>
    </Fragment>
  );
};

export default Home;

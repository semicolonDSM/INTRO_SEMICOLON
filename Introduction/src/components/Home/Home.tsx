import { Fragment } from "react";
import * as S from "./styles";
import { useRef, useEffect } from "react";

const Home = (): JSX.Element => {
  return (
    <Fragment>
      <S.HomeContainer>
        <S.ClubMainText>진리를 찾은자, 자유를 얻으라 👀</S.ClubMainText>
      </S.HomeContainer>
    </Fragment>
  );
};

export default Home;

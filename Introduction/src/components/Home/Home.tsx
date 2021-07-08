import { Fragment } from "react";
import * as S from "./styles";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";

const FirstPage = (): JSX.Element => {
    const text1 = useRef(null);

  return (
    <Fragment>
      <S.FirstPageContainer>
        <S.ClubMainText ref={text1}>진리를 찾은자, 자유를 얻으라 👀</S.ClubMainText>
      </S.FirstPageContainer>
    </Fragment>
  );
};

export default FirstPage;

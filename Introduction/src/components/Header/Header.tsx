import * as S from "./styles";
import { Fragment, useEffect, useState } from "react";
import semicolonMap from "../../assets/images/semicolon-map.png";
import { Link, withRouter } from "react-router-dom";
import Hamburger from "../Hamburger/Hamburger";

const Header = ({history}:any): JSX.Element => {
  const [state, setState] = useState<any>({
    initial: false,
    clicked: null,
    menuName: "Menu",
  });
  const [disabled, setDisabled] = useState<boolean>(false);

  useEffect(() => {
    history.listen(() => {
      setState({clicked: false, menuName: "Menu"})
    })
  })

  const handleMenu = () => {
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close",
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu",
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close",
      });
    }
  };

  return (
    <Fragment>
      <S.HeaderContainer>
        <Link to="/" style={{textDecoration: "none"}}>
          <S.Logo >
            {/* <img src={semicolonMap} /> */}
            <div>SEMICOLON;</div>
          </S.Logo>
        </Link>
        <S.HamburgerBar onClick={handleMenu}>{state.menuName}</S.HamburgerBar>
      </S.HeaderContainer>
      <Hamburger state={state}/>
    </Fragment>
  );
};

export default withRouter(Header);

import * as S from "./styles";
import { Fragment, useEffect, useState } from "react";
import semicolonLogo from "../../assets/images/semicolon-logo.png";
import { Link, withRouter } from "react-router-dom";
import Hamburger from "../Hamburger/Hamburger";

const Header = ({ history }: any): JSX.Element => {
  const [state, setState] = useState<any>({
    initial: false,
    clicked: null,
    menuName: "Menu",
  });
  const [menuColor, setMenuColor] = useState<string>("#191919");
  const [disabled, setDisabled] = useState<boolean>(false);

  useEffect(() => {
    history.listen(() => {
      setState({ clicked: false, menuName: "Menu" });
    });
  });

  useEffect(() => {
    if (state.clicked === false || state.initial === false) {
      setTimeout(() => {
        setMenuColor("#191919");
      }, 700);
    } else if (state.clicked === true) {
      setTimeout(() => {
        setMenuColor("#ffffff");
      }, 500);
    }
  }, [state]);

  const handleMenu = () => {
    disableMenu();
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

  const disableMenu = () => {
    setDisabled(true);
    setTimeout(() => {
      setDisabled(false);
    }, 1000);
  };

  return (
    <Fragment>
      <S.HeaderContainer>
        <Link to="/" style={{ textDecoration: "none" }}>
          <S.Logo color={menuColor}>
            <img src={semicolonLogo} />
            <div>SEMICOLON;</div>
          </S.Logo>
        </Link>
        <S.HamburgerBar
          onClick={handleMenu}
          disabled={disabled}
          color={menuColor}
        >
          {state.menuName}
        </S.HamburgerBar>
      </S.HeaderContainer>
      <Hamburger state={state} />
    </Fragment>
  );
};

export default withRouter(Header);

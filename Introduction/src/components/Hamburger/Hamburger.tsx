import * as S from "./styles";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  hoverAnimation,
  hoverExitAnimation,
  closeHamburgerMenuBackground,
  closeHamburgerMenu,
  closeMenuLinks,
  revealMenuLinks,
  revealHamburgerMenu,
  revealHamburgerMenuBackground,
  revealHamburgerMenuBackgroundSetting,
  revealNavBar,
} from "./animations";

const Hamburger = ({ state }: any): JSX.Element => {
  let menu = useRef<any>(null);
  let revealMenu = useRef(null);
  let revealMenuBackground = useRef<any>(null);
  let menuLinks = useRef<any>(null);
  let nav1 = useRef<any>(null);
  let nav2 = useRef<any>(null);
  let nav3 = useRef<any>(null);

  useEffect(() => {
    if (state.clicked === false) {
      closeMenuLinks(menuLinks.current);
      closeHamburgerMenuBackground(revealMenu.current, revealMenuBackground.current);
      closeHamburgerMenu(menu.current);
    } else if (
      state.clicked == true ||
      (state.clicked == true && state.initial === null)
    ) {
      revealMenuLinks(menuLinks.current);
      revealHamburgerMenu(menu.current);
      revealHamburgerMenuBackgroundSetting(revealMenuBackground.current, revealMenu.current);
      revealHamburgerMenuBackground(revealMenuBackground.current, revealMenu.current);
      revealNavBar(nav1.current, nav2.current, nav3.current);
    }
  }, [state]);

  return (
    <S.HamburgerMenu ref={menu}>
      <S.MenuSecondaryBackgroundColor ref={revealMenuBackground} />
      <S.MenuLayer ref={revealMenu}>
        <S.MenuLinks ref={menuLinks}>
          <S.UnorderedList>
            <S.List ref={nav1}>
              <Link
                to="/introduction"
                onMouseOver={(e) => hoverAnimation(e)}
                onMouseOut={(e) => hoverExitAnimation(e)}
              >
                Introduction
              </Link>
            </S.List>
            <S.List ref={nav2}>
              <Link
                to="/projects"
                onMouseOver={(e) => hoverAnimation(e)}
                onMouseOut={(e) => hoverExitAnimation(e)}
              >
                Projects
              </Link>
            </S.List>
            <S.List ref={nav3}>
              <Link
                to="/contactus"
                onMouseOver={(e) => hoverAnimation(e)}
                onMouseOut={(e) => hoverExitAnimation(e)}
              >
                Contact us
              </Link>
            </S.List>
          </S.UnorderedList>
        </S.MenuLinks>
      </S.MenuLayer>
    </S.HamburgerMenu>
  );
};

export default Hamburger;

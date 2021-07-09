import * as S from "./styles";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

const Hamburger = ({ state }: any): JSX.Element => {
  let menu = useRef<any>(null);
  let revealMenu = useRef(null);
  let revealMenuBackground = useRef(null);
  let nav1 = useRef(null);
  let nav2 = useRef(null);
  let nav3 = useRef(null);

  useEffect(() => {
    if (state.clicked === false) {
      gsap.to([revealMenu.current, revealMenuBackground.current], {
        duration: 0.8,
        height: 0,
        ease: 'power3.inOut',
        stagger: {
          amount: 0.07
        }
      });
      gsap.to(menu.current, {
        duration: 1,
        css: {display: "none"}
      })
    } else if (
      state.clicked == true ||
      (state.clicked == true && state.initial === null)
    ) {
      gsap.to(menu.current, {
        duration: 0,
        css: { display: "block" },
      });
      gsap.to([revealMenuBackground.current, revealMenu.current], {
        duration: 0,
        delay: 0,
        opacity: 1,
        height: "100%",
      });
      gsap.from([revealMenuBackground.current, revealMenu.current], {
        duration: 0.8,
        height: 0,
        transformOrigin: "right top",
        ease: "power3.inOut",
        skewY: 2,
        stagger: {
          amount: 0.1,
        },
      });
    }
  }, [state]);

  return (
    <S.HamburgerMenu ref={menu}>
      <S.MenuSecondaryBackgroundColor ref={revealMenuBackground} />
      <S.MenuLayer ref={revealMenu}>
        <S.MenuLinks>
          <S.UnorderedList>
            <S.List ref={nav1}>
              <Link to="/introduction">Introduction</Link>
            </S.List>
            <S.List ref={nav2}>
              <Link to="/projects">Projects</Link>
            </S.List>
            <S.List ref={nav3}>
              <Link to="/contactus">Contact us</Link>
            </S.List>
          </S.UnorderedList>
        </S.MenuLinks>
      </S.MenuLayer>
    </S.HamburgerMenu>
  );
};

export default Hamburger;

import * as S from "./styles";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

const Hamburger = ({ state }: any): JSX.Element => {
  let menu = useRef<any>(null);
  let revealMenu = useRef(null);
  let revealMenuBackground = useRef(null);
  let menuLinks = useRef<any>(null);
  let nav1 = useRef<any>(null);
  let nav2 = useRef<any>(null);
  let nav3 = useRef(null);

  useEffect(() => {
    if (state.clicked === false) {
      gsap.to(menuLinks.current, {
        delay: 0,
        css: {display: "none"}
      })   
      gsap.to([revealMenu.current, revealMenuBackground.current], {
        delay: .1,
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
      gsap.to(menuLinks.current, {
        delay: 0,
        css: {display: "block"}
      })  
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
        skewY: 3,
        stagger: {
          amount: 0.07,
        },
      });
      gsap.from([nav1.current, nav2.current, nav3.current], {
        duration: 0.8,
        y: 100,
        delay: 0.1,
        height: 0,
        ease: 'power3.inOut',
        stagger: {
          amount: 0.3
        }
      })
    }
  }, [state]);

  const hoverAnimation = (e:any) => {
    gsap.to(e.target.parentNode, {
      duration: .1,
      y: 3,
      skewX: 4,
      ease: 'power3.inOut'
    })
  }

  const hoverExitAnimation = (e:any) => {
    gsap.to(e.target.parentNode, {
      duration: .1,
      y: -3,
      skewX: 0,
      ease: "power3.inOut"
    })
  }

  return (
    <S.HamburgerMenu ref={menu}>
      <S.MenuSecondaryBackgroundColor ref={revealMenuBackground} />
      <S.MenuLayer ref={revealMenu}>
        <S.MenuLinks ref={menuLinks}>
          <S.UnorderedList>
            <S.List ref={nav1} >
              <Link to="/introduction" onMouseOver={e => hoverAnimation(e)} onMouseOut={e => hoverExitAnimation(e)}>Introduction</Link>
            </S.List>
            <S.List ref={nav2}>
              <Link to="/projects" onMouseOver={e => hoverAnimation(e)} onMouseOut={e => hoverExitAnimation(e)}>Projects</Link>
            </S.List>
            <S.List ref={nav3} >
              <Link to="/contactus" onMouseOver={e => hoverAnimation(e)} onMouseOut={e => hoverExitAnimation(e)}>Contact us</Link>
            </S.List>
          </S.UnorderedList>
        </S.MenuLinks>
      </S.MenuLayer>
    </S.HamburgerMenu>
  );
};

export default Hamburger;

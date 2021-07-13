import { gsap, TweenLite } from "gsap";

export const closeMenuLinks = (node: any) => {
  TweenLite.to(node, {
    delay: 0,
    css: { display: "none" },
  });
};

export const closeHamburgerMenuBackground = (node1: any, node2: any) => {
  TweenLite.to([node1, node2], {
    delay: 0.1,
    duration: 0.8,
    height: 0,
    ease: "power3.inOut",
    stagger: {
      amount: 0.06,
    },
  });
};

export const closeHamburgerMenu = (node: any) => {
  TweenLite.to(node, {
    duration: 1,
    css: { display: "none" },
  });
};

export const revealMenuLinks = (node: any) => {
  TweenLite.to(node, {
    delay: 0,
    css: { display: "block" },
  });
};

export const revealHamburgerMenu = (node: any) => {
  TweenLite.to(node, {
    duration: 0,
    css: { display: "block" },
  });
};

export const revealHamburgerMenuBackgroundSetting = (
  node1: any,
  node2: any
) => {
  TweenLite.to([node1, node2], {
    duration: 0,
    delay: 0,
    opacity: 1,
    height: "100%",
  });
};

export const revealHamburgerMenuBackground = (node1: any, node2: any) => {
  TweenLite.from([node1, node2], {
    duration: 0.8,
    height: 0,
    transformOrigin: "right top",
    ease: "power3.inOut",
    skewY: 3,
    stagger: {
      amount: 0.06,
    },
  });
};

export const revealNavBar = (node1: any, node2: any, node3: any) => {
  TweenLite.from([node1, node2, node3], {
    duration: 0.8,
    y: 100,
    delay: 0.1,
    height: 0,
    ease: "power3.inOut",
    stagger: {
      amount: 0.3,
    },
  });
};

export const hoverAnimation = (e: any) => {
  TweenLite.to(e.target.parentNode, {
    duration: 0.1,
    y: 3,
    skewX: 4,
    ease: "power3.inOut",
  });
};

export const hoverExitAnimation = (e: any) => {
  TweenLite.to(e.target.parentNode, {
    duration: 0.1,
    y: -3,
    skewX: 0,
    ease: "power3.inOut",
  });
};

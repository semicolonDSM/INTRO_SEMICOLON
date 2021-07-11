import gsap from "gsap";

export const hoverAnimation = (e: any) => {
  gsap.to(e.target.parentNode, {
    duration: 0.1,
    y: 3,
    skewX: 4,
    ease: "power3.inOut",
  });
};

export const hoverExitAnimation = (e: any) => {
  gsap.to(e.target.parentNode, {
    duration: 0.1,
    y: -3,
    skewX: 0,
    ease: "power3.inOut",
  });
};

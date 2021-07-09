import { COLOR } from "./../../style/index";
import styled from "@emotion/styled";

export const HamburgerMenu = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
  display: none;
`;

export const MenuSecondaryBackgroundColor = styled.div`
  background-color: ${COLOR.black};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  /* overflow: hidden; */
`;

export const MenuLayer = styled.div`
  display: flex;
  background-color: ${COLOR.purple200};
  height: 100%;
  width: 100%;
  /* justify-content: space-between; */
`;

export const Container = styled.div``;

export const MenuLinks = styled.div`
  height: 100%;
  margin: 200px 200px;
`;

export const UnorderedList = styled.ul``;

export const List = styled.li`
    margin: 30px;
  a {
    text-decoration: none;
    color: white;
    font-size: 120px;
    font-weight: 700;
    font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    /* -webkit-text-stroke: 1px black; */
  }
`;

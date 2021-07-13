import { COLOR } from "../../style/index";
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
  background: ${COLOR.purple200};
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
  background-color: black;
  height: 100%;
  width: 100%;
`;

export const MenuLinks = styled.div`
  height: 100%;
  margin: 200px 200px;
`;

export const UnorderedList = styled.ul``;

export const List = styled.li`
  height: 140px;
  margin: 30px;
  overflow: hidden;
  a {
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: white;
    font-size: 90px;
    font-weight: 700;
    font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    &:hover {
      /* color: ${COLOR.purple400}; */
      /* text-shadow: -2px 0 #ff52f7, 0 2px #ff52f7, 2px 0 #ff52f7, 0 -2px #ff52f7; */

    }
  }
`;

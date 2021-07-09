import styled from "@emotion/styled";
//헤더
export const HeaderContainer = styled.div`
  height: 70px;
  background-color: #ffffff;
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 160px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  color: ${({ color }) => color};
  img {
    width: 32px;
    height: 32px;
    margin-right: 10px;
    z-index: 10;
  }

  div {
    z-index: 10;
  }
`;

export const HamburgerBar = styled.button`
  color: ${({ color }) => color};
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  z-index: 10;
  background: none;
  border: none;
`;

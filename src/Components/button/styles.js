import styled from "styled-components";

export const Container = styled.div`
  width: 60px;
  height: 20px;
  border-radius: 32px;
  cursor: pointer;
  box-shadow: inset 0 0 20px 2px rgb(0 0 0 / 20%);
  position: relative;
  overflow: hidden;
`
export const Ball = styled.div`
  width: 19.2px;
  height: 19.3px;
  background-color: red;
  box-shadow: inset 0 0 20px 2px rgb(0 0 0 / 20%);
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: ${props=> props.left ? "calc(100% - 19.2px)" : "0"};
  transition: .5s;
`
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 60px 122px;
  background-color: ${props => props.check ? "#1A2020" : "#ffffff"};
`

export const Box = styled.div`
  display: flex;
  justify-content: space-around;
  border-top: solid #2d3748;
  p{
    margin-top: 20px;
    color: ${props => props.check ? "#cbd5e0" : "#000"};
    font-size: 24px;
  }
`
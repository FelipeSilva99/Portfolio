import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;
  padding-top: 60px;
  background-color: ${props => props.check ? "#1A2020" : "#ffffff"};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export const BoxTitle = styled.div`
  width: 50%;
  height: auto;
  padding-top: 60px;
  h1{
    color: ${props => props.check ? "#cbd5e0" : "#000"};
    font-size: 56px;
  }
`

export const Box = styled.div`
  width: 70%;
  height: auto;
  display: flex;
`
export const BoxImg = styled.div`
  img{
    width: 320px;
    border-radius: 30px;
  }
`
export const BoxTopic = styled.div`
  padding-top: 40px;
  width: 80%;
  p{
    color: ${props => props.check ? "#cbd5e0" : "#000"};
    padding-top: 5px;
  }
`
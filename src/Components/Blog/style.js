import styled from 'styled-components';

import { Link } from 'gatsby';

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
  width: 76%;
  height: auto;
  padding-top: 60px;
  h1{
    color: ${props => props.check ? "#cbd5e0" : "#000"};
    font-size: 56px;
  }
`

export const Box = styled.div`
  width: 76%;
  height: auto;
`
export const BoxTopic = styled.div`
  padding-top: 40px;
  p{
    color: ${props => props.check ? "#cbd5e0" : "#000"};
    padding-top: 5px;
  }
`

export const Title = styled(Link)`
  color: ${props => props.check ? "#cbd5e0" : "#000"};
  font-size: 24px;
`
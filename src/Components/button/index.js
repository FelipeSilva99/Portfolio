import React from "react";
import * as S from './styles';

export default function Button(props) {
  return (
    <S.Container onClick={props.click}>
      <S.Ball left={props.check}/>
    </S.Container>
  )
}
import React from 'react';
import * as S from './style';
import { graphql, useStaticQuery } from 'gatsby';


export default function Footer(props) {
  
  const data = useStaticQuery(graphql`
    query {
        alldata {
          footers{
            paragraph
          }
        }
    }`
    )

  const {
    paragraph
  } = data.alldata.footers[0]

  return (
    <S.Container check={props.check}>
      <S.Box check={props.check}>
        <p check={props.check}>{paragraph[0]}</p>
        <p check={props.check}>{paragraph[1]}</p>
      </S.Box>
    </S.Container>
  )
}

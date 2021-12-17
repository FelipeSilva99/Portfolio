import React from 'react';
import * as S from './style';
import { graphql, useStaticQuery } from 'gatsby';


export default function Footer() {
  
  const data = useStaticQuery(graphql`
    query {
        alldata {
          footers{
            paragraph
          }
          }
        }
    }`
    )

  const {
    paragraph
  } = data.alldata.footers[0]

  return (
    <S.Container>
      <S.Box>
        <p>{paragraph[0]}</p>
        <p>{paragraph[1]}</p>
      </S.Box>
    </S.Container>
  )
}

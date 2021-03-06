import React from 'react';
import * as S from './style';
import { graphql, useStaticQuery } from 'gatsby';

import Lindo from '../../images/Felipe.jpg';
// import App from '../App/app';


export default function Sobre(props) {

  const data = useStaticQuery(graphql`
    query {
        alldata {
          abouts{
            title
            subtitle
          }
        }
    }`
  )

  const {
    title,
    subtitle
  } = data.alldata.abouts[0]

  return (
    <S.Container check={props.check}>
      <S.Box check={props.check}>
        <div>
          <S.BoxTitle check={props.check}>
            <h1>{title}</h1>
          </S.BoxTitle>
          <S.BoxTopic check={props.check}>
            <p>{subtitle[0]}</p>
            <p>{subtitle[1]}</p>
            <p>{subtitle[2]}</p>
            <p>{subtitle[3]}</p>
          </S.BoxTopic>
        </div>
        <S.BoxImg>
          {/* <App /> */}
          {/* <iframe class="caas-iframe-instagram" src="https://www.instagram.com/p/Bd22d_fAWID/?utm_source=ig_web_copy_link" style="height: 818px;"></iframe> */}
          <img src={Lindo} alt="#" />
        </S.BoxImg>
      </S.Box>
      <div></div>
    </S.Container>
  )
}

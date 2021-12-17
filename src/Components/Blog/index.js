import React, { useState, useEffect } from 'react';
import * as S from './style';

import axios from 'axios';

export default function Blog(props) {
  const [dataRepos, setDataRepos] = useState([])
  useEffect(() => {
    getData();
  }, [])
  const getData = async () => {
    const response = await axios.get("http://api.github.com/users/FelipeSilva99/repos")
    setDataRepos(response.data)
    console.log(response.data)
  }
  return (
    <S.Container check={props.check}>
      <S.BoxTitle check={props.check}>
        <h1>Blog</h1>
      </S.BoxTitle>
      <S.Box>
        {dataRepos.slice(0, 5).map(item => (
          <S.BoxTopic check={props.check}>
            <S.Title to={item.html_url} check={props.check}>{item.name}</S.Title>
            <p>Data : {item.created_at}</p>
            <p>Linguagem : {item.language}</p>
          </S.BoxTopic>
        ))}
      </S.Box>
    </S.Container>
  )
}

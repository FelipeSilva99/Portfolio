import React from 'react';
import * as S from './style';
import Btn from '../button';
import { graphql, useStaticQuery } from 'gatsby';
import { Link } from 'gatsby';


export default function Header(props) {
	const data = useStaticQuery(graphql`
    query {
        alldata {
          homes{
            title
            pages
          }
        }
    }`
    )

  const {
    title,
    pages
  } = data.alldata.homes[0]

	return (
		<>
			<S.Container	check={props.check}>
				<S.BoxBlog check={props.check}>
          <S.Box>
            <h2>{title}</h2>
            <Btn click={props.Click} check={props.check}/>
          </S.Box>
					<S.BoxTopcs check={props.check}>
						<Link to='/' check={props.check}>{pages[0]}</Link>
						<Link to='/about' check={props.check}>{pages[1]}</Link>
						<Link to='/projetos' check={props.check}>{pages[2]}</Link>
					</S.BoxTopcs>
				</S.BoxBlog>
			</S.Container>
		</>
	)
}

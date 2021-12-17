import React from 'react';
import * as S from './style';
import { graphql, useStaticQuery } from 'gatsby';


export default function Header(props) {
	const data = useStaticQuery(graphql`
    query {
        alldata {
          homes{
            title
            pages
          }
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
			<S.Container	onClick={props.Click} check={props.check}>
				<S.BoxBlog>
					<h2>{title}</h2>
					<S.BoxTopcs>
						<p>{pages[0]}</p>
						<p>{pages[1]}</p>
						<p>{pages[2]}</p>
					</S.BoxTopcs>
				</S.BoxBlog>
			</S.Container>
		</>
	)
}

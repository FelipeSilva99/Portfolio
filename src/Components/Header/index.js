import React from 'react';
import * as S from './style';


export default function Header(props) {

	
	return (
		<>
			<S.Container	onClick={props.Click} check={props.check}>
				<S.BoxBlog>
					<h2>Blog Pessoal</h2>
					<S.BoxTopcs>
						<p>Blog</p>
						<p>Sobre</p>
					</S.BoxTopcs>
				</S.BoxBlog>
			</S.Container>
		</>
	)
}

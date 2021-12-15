import React, {useState, useEffect} from 'react';
import * as S from './style';

import axios from 'axios';
import { Link } from 'gatsby';


export default function Blog() {
	const [dataRepos, setDataRepos] = useState([])
	useEffect(()=>{
		getData();
	},[])
	const getData = async () => {
		const response = await axios.get("http://api.github.com/users/FelipeSilva99/repos")
		setDataRepos(response.data)
		console.log(response.data)
	}
	return (
		<S.Container>
			<S.BoxTitle>
				<h1>Blog</h1>
			</S.BoxTitle>
			<S.Box>
				{dataRepos.slice(0, 5).map(item =>( 
					<>
						<Link to={item.html_url}>{item.name}</Link>
						<p>Data : {item.created_at}</p>
						<p>Linguagem : {item.language}</p>
					</>
				))}
			</S.Box>
			<div></div>
		</S.Container>
	)
}

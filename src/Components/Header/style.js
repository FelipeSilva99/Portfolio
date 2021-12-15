import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: auto;
  padding-top: 30px;
	background-color: ${props => props.check ? "#1A2020" : "#ffffff"} ;
	display: flex;
  justify-content: center;
  align-items: center;
`
export const BoxBlog = styled.div`
	width: 1300px;
	border-bottom: solid #2d3748 ;
	h2{
		color: #cbd5e0;
		font-size: 35px;
		margin-bottom: 30px;
	}
`
export const BoxTopcs = styled.div`
	display: flex;
	p{
		color: #cbd5e0;
		margin-right: 30px;
		margin-bottom: 10px;
	}
`
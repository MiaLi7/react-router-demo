import React from 'react';
import { Link } from 'react-router-dom';
import App from '../App.js';

 class Page2 extends React.Component {
 	render() {
 		return (
 			<div>
	 			<div>
	 				<p>这是page2的内容</p>
	 				<Link to="/">返回home</Link>
	 				
	 			</div>
		 	</div>
 			
 		);
 	}
 }
 export default Page2;

 
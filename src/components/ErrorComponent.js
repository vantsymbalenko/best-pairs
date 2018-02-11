import React from 'react';

export default function ErrorComponent(props){
	return(
		<div className="error">
			Ooops something wrong :( Please try again later
			<div>{props.error}</div>
		</div>
	)
}
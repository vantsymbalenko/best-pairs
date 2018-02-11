import React from 'react';

export default function UserInfo(props){
	return(
		<div>
			<div className="img">
			<img src={props.info.picture.large} alt={`${props.info.name.first} ${props.info.name.last}`} title={props.info.phone} />
			</div>
			<div className="name">{props.info.name.first} </div>
			<div className="surname">{props.info.name.last}</div>
		</div>
	)
}
import React from 'react';
import UserInfo from './UserInfo';

export default function PairsComponent(props){
	return(
		<div>
			<h2>Best Pairs</h2>
			<div className="pairs">
				{props.pairs.map((item) => {
					return(
						<div className="pair" key = {item.firstUserId.registered}>
							<UserInfo info = {item.firstUserId} />
							<div className="distance">Distance between this peoples only {item.distance}</div>
							<UserInfo info = {item.secondUserId}/>
						</div>
					);
				})}
			</div>
		</div>
	)
}
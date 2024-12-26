import React, { useEffect, useState } from 'react';
import './styles/pageStyle.css';

export default function UserCard() {

	const [data, setData] = useState(null); 


	const fetchUserData = async () => {
		try {
		  const response = await fetch('https://randomuser.me/api/?page=1&results=1&seed=abc');
		  
		  if (!response.ok) {
			throw new Error('Network response was not ok');
		  }

		  const fetchedData = await response.json();
		  setData(fetchedData.results[0]);  
		} catch (error) {
		  console.log(error.message); 
		}
	};

	useEffect(() => {
		fetchUserData();
	}, []);

	return (
		<div className='wraper'>
			{
				data ? (
					<div className="mainBody">
						<div className="card">
							<div className="leftContainer">
								<img src={data?.picture?.large || 'https://via.placeholder.com/120'} alt="User" />
							</div>
							<div className="rightContainer">
								<div className="keyCol">
									<div className="desc">Name</div>
									<div className="desc">Gender</div>
									<div className="desc">Phone No</div>
								</div>
								<div className="sepratorCol">
									<div className="seprator">:</div>
									<div className="seprator">:</div>
									<div className="seprator">:</div>
								</div>
								<div className="valueCol">
									<div className="nameRow">
										<div className="titleName">{data?.name?.title}</div>
										<div className="firstName">{data?.name?.first}</div>
										<div className="lastName">{data?.name?.last}</div>
									</div>
									<div className="genderRow">{data?.gender}</div>
									<div className="phoneNoRow">{data?.phone}</div>
								</div>
							</div>
						</div>
					</div>
				) : (
					<div>Loading...</div>
				)
			}
		</div>
	);
}

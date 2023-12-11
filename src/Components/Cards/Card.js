import React from 'react';
import "./Card.css";


const Card = ({ results }) => {
	let display;

	if (Array.isArray(results)) {
		display = results.map(({ id, name, image, location, status }) => {
			return (
				<div key={id} className='mb-4 col-4 position-relative'>
					<div className='card'>
						<img
							className='img-fluid'
							src={image}
							alt=''
						/>
						<div style={{ padding: "10px" }} className='content'>
							<div className='fs-4 fw-bold mb-4'>{name}</div>
							<div className='fs-6 fw-bold mb-4'>Last Location</div>
							<div className='fs-5'>{location.name}</div>
						</div>
					</div>
					{
						(() => {
							if (status === "Dead") {
								return (<div className='badge bg-danger position-absolute'>
									{status}
								</div>)
							} else if (status === "Alive") {
								return <div className='badge bg-success position-absolute'>
									{status}
								</div>
							}
							else {
								return <div className='badge bg-secondary position-absolute'>
									{status}
								</div>
							}
						})()
					}
				</div>
			)
		})
	} else display = "Not found"

	return (
		< >
			{display}
		</>);
}


export default Card;
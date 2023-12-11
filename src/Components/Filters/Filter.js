import React from 'react';
import Gender from './Category/Gender';
import Species from './Category/Species';
import Status from './Category/Status';

const Filter = ({ setPageNumber, setGender, setSpecies, setStatus }) => {
	return (
		<div className='col-3'>
			<div className='text-center fw-bold fs-4 mb-4'>
				Filter
			</div>
			<div className='text-center text-primary text-decoration-underline mb-4'>
				Clear Filter
			</div>
			<div className="accordion" id="accordionExample">
				<Status
					setPageNumber={setPageNumber}
					setStatus={setStatus}
				/>
				<Species
					setPageNumber={setPageNumber}
					setSpecies={setSpecies}
				/>
				<Gender
					setPageNumber={setPageNumber}
					setGender={setGender}
				/>
			</div>
		</div>
	)
}



export default Filter;
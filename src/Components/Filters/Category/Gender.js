import React from 'react';
import FilterBTN from '../FilterBTN';

const Gender = ({ setPageNumber, setGender }) => {
	const gender = ["male", "female", "genderless", "unknown"]
	return (
		<div className="accordion-item">
			<h2 className="accordion-header">
				<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
					Gender
				</button>
			</h2>
			<div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
				<div className="accordion-body d-flex flex-wrap gap-3">
					{
						gender.map((items, index) => <FilterBTN key={index} name="status" index={index} items={items} setPageNumber={setPageNumber} task={setGender} />)
					}

				</div>
			</div>
		</div>
	);
}

export default Gender;
import React from 'react';

const FilterBTN = ({ name, index, items, task, setPageNumber }) => {

	console.log({ name, index, items, task, setPageNumber })
	return (
		<div>
			<style jsx>{
				`.x:checked + label {
					background-color: #0b5ed7;
					color: white;
				}
				input[type=radio]{
    				display:none
				}
				`
			}</style>
			<div className="form-check">
				<input className="form-check-input"				
					type="radio"
					name={name}
					id={`${name}-${index}`} disabled />
				<label class="btn btn-outline-primary" htmlFor={`${name}-${index}`}
				onClick={() => {
					setPageNumber(1);
					task(items)
				}}>{items}</label>
			</div>
		</div>
	);
}

export default FilterBTN;
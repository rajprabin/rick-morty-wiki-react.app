import React from 'react';
import "./Search.css";

const Search = ({ setPageNumber, setSearch }) => {
	return (
		<form className='d-flex justify-content-center gap-4 mb-5'>
			<input className='' onChange={(e) => {
				setPageNumber(1)
				setSearch(e.target.value)
			}} type='text' />
			<button className='btn btn-primary fs-5' onClick={(e) => e.preventDefault()} >Search</button>
		</form>
	);
}

export default Search;
import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ info, pageNumber, setPageNumber }) => {

	return (
		<ReactPaginate
			className='pagination justify-content-center gap-4 my-4'
			nextLabel="Next"
			previousLabel="Prev"
			pageClassName='page-item'
			pageLinkClassName='page-link'
			previousClassName="btn btn-secondary"
			nextClassName="btn btn-secondary"
			onPageChange={(data) => {
				setPageNumber(data.selected + 1)
			}}
			activeLinkClassName='active'
			forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
			pageCount={info?.pages}
		/>
	);
}


export default Pagination;
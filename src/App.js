import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'
import Filter from './Components/Filters/Filter';
import { useEffect, useState } from 'react';
import Card from './Components/Cards/Card';
import Pagination from './Components/Pagination/Pagination';
import Search from './Components/Search/Search';

function App() {
	let [pageNumber, setPageNumber] = useState(1);
	let [fetchedData, updateFetchedData] = useState([]);
	let [search, setSearch] = useState("");
	let [gender, setGender] = useState("");
	let [species, setSpecies] = useState("");
	let [status, setStatus] = useState("");
	let { info, results } = fetchedData;



	let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

	console.log(api)

	useEffect(() => {
		(async function () {
			let data = await fetch(api).then(res => res.json());
			updateFetchedData(data)
		})()
	}, [api]);

	return (
		<div className="App">
			<h1 className='text-center  my-4 ubuntu'>
				Rick & Morty <span className='text-primary'>Wiki</span>
			</h1>
			<Search setSearch={setSearch} setPageNumber={setPageNumber} />
			<div className='container'>
				<div className='row'>
					<Filter
						setPageNumber={setPageNumber}
						setStatus={setStatus}
						setSpecies={setSpecies}
						setGender={setGender}
					/>
					<div className='col-8'>
						<div className='row'>
							<Card results={results} />
						</div>
					</div>
				</div>
				<Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber} />
			</div>
		</div>
	);
}

export default App;


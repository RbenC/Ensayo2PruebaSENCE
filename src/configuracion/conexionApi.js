import axios from 'axios';
import store from '../store';




export async function series() {
	try {
		await axios.get('http://rickandmortyapi.com/api/character/')
		.then(response => {
			//console.log(response.data.results);
			store.dispatch('llamarApiRickMorty', response.data.results);
		})
	} catch (error) {
		console.log("error", error);
	
	}	
}



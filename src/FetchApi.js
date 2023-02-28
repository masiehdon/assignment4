const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f3b59305d4msh9b466e3218abfedp1615a8jsn477cd320c6da',
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
	}
};

fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=game%20of%20thr', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

    export default fetch;
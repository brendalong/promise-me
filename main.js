getAllPromise = () => {
	//get data from join table
	return fetch(`${firebaseConfig.databaseURL}/regional.json/?orderBy="regionId"&equalTo=1`)
	.then(response => response.json())
	.then(parsedResponse => {
		console.log("firstCall", parsedResponse)
		//convert to array with url
		const urlArray = Object.keys(parsedResponse).map(item => {
			// const fetchDataURL = parsedResponse[item].pName;
			return fetch(`${firebaseConfig.databaseURL}/allPokemon.json/?orderBy="slug"&equalTo="${parsedResponse[item].pName}"`)
			.then(response => response.json())
			.then(parsedResponse => {
				console.log("parsed", Object.values(Object.entries(parsedResponse))[0][1]);
				//Object.keys(parsedResponse).map((key) => [Number(key), obj[key]]);
			})
		})
			return urlArray; 
		})
	.then(requests => {
		// return  Promise.all(requests) // short for the following...
		let newStuff = Promise.all(requests)
		  .then(responses => {
		  	return responses;
		  	})
		return newStuff;
	})
}

getAllPromise()
.then(response => {
console.log("what now", response);
})

//https://javascript.info/promise-api
	
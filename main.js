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
		})
			return urlArray; 
		})
	.then(requests => {
		Promise.all(requests)
		  .then(responses => {
		  console.log("responses", responses)
		  })
	})
}

getAllPromise();

//https://javascript.info/promise-api
	
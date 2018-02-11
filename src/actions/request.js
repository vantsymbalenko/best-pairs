export const IS_LOADING = "IS_LOADING";
export const IS_ERROR 	= "IS_ERROR";
export const IS_ACCESS  = "IS_SUCCESS";

const loaderAction = () => ({
	type : IS_LOADING
});

const status = (response) => {
	if(response.status !== 200){
		return Promise.reject(new Error(response.statusText + " " + response.status))
	}
	return Promise.resolve(response);
}

const isSuccess = (data) => ({
	type : IS_ACCESS,
	payload : data
});

const isError = (error) => ({
	type : IS_ERROR,
	payload : error
});

const getNumberByWord = (word) => 
	[].reduce.call(word, (acc, char) => acc + char.charCodeAt(),0) % 100;

function request(){
	return (dispatch) => {
		dispatch(loaderAction());
		return fetch('https://randomuser.me/api/?results=1000')
			.then(status)
			.then(response => response.json())
			.then(json => {
				let results  = [];
				let distance  = 0;
				let xCoord1, yCoord1, xCoord2, yCoord2;				
				for(let i = 0; i < json.results.length; i++){
					for(let j = i + 1; j < json.results.length; j++){
						if(json.results[i].gender === json.results[j].gender){
							continue;
						}
						xCoord1 = getNumberByWord(json.results[i].name.first);
						yCoord1 = getNumberByWord(json.results[i].name.last);
						xCoord2 = getNumberByWord(json.results[j].name.first);
						yCoord2 = getNumberByWord(json.results[j].name.last);
						distance = Math.sqrt(Math.pow((xCoord2 - xCoord1),2) + Math.pow((yCoord2 - yCoord1),2));
						results.push({
							firstUserId : json.results[i],
							secondUserId : json.results[j],
							distance : distance
						});
					}
				}
				results.sort((next, prev) => next.distance - prev.distance).splice(5, results.length - 5);
				dispatch(isSuccess(results));
			})
			.catch(error => {
				dispatch(isError(error.message))
			})
	}
}

export default request

// Utilities to handle some of the user management features shared
// across the various components
//

const hugoRestURL = 'http://rest.genenames.org/';

const debug = true;

// request Hugo Api
export const getHugoGeneInfo = (gene_symbol, callback) => {

    (!debug) || console.log("HugoUtils.js getHugoGeneInfo() {gene_symbol}", gene_symbol);

		let path = 'fetch/symbol/' + gene_symbol.toUpperCase();
		let data = getHugoApiData(path, callback);

    (!debug) || console.log("HugoUtils.js getHugoGeneInfo() {data}", data);

		return data;
}

const handleResponse = (response, callback) => {
  (!debug) || console.log("HugoUtils.js handleResponse() {response, callback}", response, callback);

  callback(response);
}

// request Hugo Api
export const getHugoApiData = (path, callback) => {

  (!debug) || console.log("HugoUtils.js getHugoGeneInfo() {path, callback}", path, callback);

	const otherParameters={
		headers: {
			"Accept" : "application/json"
		}
	};
  let url = hugoRestURL + path;

	(!debug) || console.log('Url : ', url);
	//
	fetch(url,otherParameters)
  .then(response => response.json())
  .then(data=>{
    (!debug) || console.log("Response Data: ", data);
    let results = data.response.docs;
    if (results.length === 1) {
      results = results[0];
    }
    (!debug) || console.log("Response Results: ", results);
    handleResponse(results, callback);
  })
	.catch(error=>console.log(error));
}

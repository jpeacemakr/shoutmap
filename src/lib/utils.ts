import BPromise from "bluebird";
require("isomorphic-fetch");

//export { createShout }; 



function handleError(error:any) {
  //console.log(error);
  return null;
}



{/*returns a Json object from a url*/}
function getJson(url:any){
	return fetch(url).then(function(resp){
		console.log(url,resp);
		return resp.json();
		}
	)
}

{/*returns the json oject of a campground*/}
function getFood(foodname:any){
	console.log(`http://localhost/api/search?food=${foodname}`);
	return getJson(`http://localhost/api/search?food=${foodname}`);
}

{/* .all waits to return all the asynchronous functions*/}
function getFoodData(name:any) {
	return BPromise.all([getFood(name)]).then(function([food]){
		console.log("getFoodData:");
		console.log(food);
		return { food };
		} 
	)
}






//post request
//user_info is json object with username and password
export function createShout(shout_info:any) {
  const header = {
    Accept: "application/json",
    "Content-Type": "application/x-www-form-urlencoded"
  };
  console.log(shout_info);  
  const searchParams = new URLSearchParams(shout_info);
  
  console.log(searchParams);  

  return fetch("http://localhost:3000/api/newshout", {
    method: "POST",
    headers: header,
    body: searchParams

  }).then(function(resp) {
    console.log("returning json");
    return resp.json();
  });
}






/*
module.exports = {

	newShout: function(shoutData:any) {
    	return createShout(shoutData).catch(handleError);
  	}


};

*/






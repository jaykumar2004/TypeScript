let score : number | string = 33 //sometimes it can be a string so we can use "|"
// we can use as a strictness in your code
//"|" we can also assume it as "or"
score = 44 
score = "55"
type User = {
	name : string;
	id: number 
}
type Admin = {
	username : string;
	id : number 
}
let hitesh : User | Admin = {name: "hitesh",id:334}
hitesh = {username : "hc",id:334}

// function getDbId(id: number | string){
// 	//making some API calls
// 	console.log(`DB id is: ${id}`);
// } 
// getDbId(3)
// getDbId("3")

// But if we want to perform some actions on the params tha are not allpwed then causes error
function getDbId(id: number | string){
	id.toLowerCase() // this will cause error cause we cannot perform this operation on the number 
	//instead use 
	if(typeof id === "string"){
		id.toLowerCase()
	}
} 

//In case of the array 
const data : number[] = [1,2,3]'
const data2 : string[] = ["1","2","3"]
const data3: (string | number | boolean)[] = ["1","2",3,true]  //either all the numbers or a string
//we need to put "[]" so that it does not give any error
// Or you can use any but there is not type safety then
const data3: any[] = ["1","2",3,true]
let seatAllotment : "aisle"|"middle"|"window"
seatAllotment = "aisle" //This will not cause any error
seatAllotment = "crew" //But this will cause error
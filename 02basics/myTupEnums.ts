let tUser : [string ,number, boolean]
tUser = ["hc",131,true]
let rgb : [number,number,number] = [255,125,112]

type User = [number , string]
const newUser: User = [112, "example@google.com"]
const newUser: User = [112, "example@google.com",true] //this will cause error
newUser[1] = 2324 //this will cause error 
newUser[1] = "hc.com"
newUser.push(true) //this will not give error but it is not right coz there is no boolean parameter in the User
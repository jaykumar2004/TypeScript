function addTwo(num: number): number {
    return num + 2;
}

function getUpper(val: string) {
    return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {
}

let loginUser = (name: string, email: string, isPaid: boolean) => {
};

addTwo(3);
getUpper("5");
signUpUser("jay", "jay@gmail.com", false);
loginUser("jay", "jay@gmail.com", false);

// function getValue(myVal: number) {
//     if (myVal > 5) {
//         return true;
//     }
//     return "200ok";
// }

const getHello =
    (s: String): string => {
        return ""
    }

const heros = ["thor", "spiderman", "thor"];

heros.map((hero): string => {
    return `hero is ${hero}`
})

function consoleError(errmsg: string): void{ //we type void because we don't want to return anything
    console.log(errmsg);
}
function handleError(errmsg: string): never{ //we type void because we don't want to return anything
    throw new Error(errmsg);
}
function handlenotError(errNewmes:string){
    throw new Error(errNewmes);
}



export {};

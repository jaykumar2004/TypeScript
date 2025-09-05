const User = {
  name: "Jay Kumar",
  email: "jay859119@gmail.com",
  isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}

// function createCourse(): { name: string; price: number } {
//   return { name: "jay", price: 60000 };
// }

let newUser = { name: "jay", isPaid: true, email: "jay@gmail.com" };
createUser(newUser);



type User = {
  name : string;
  email : string;
  isActive: boolean;
}



export {};

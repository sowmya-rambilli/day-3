// let user1 = "Bhanu";
// let user2 = "Sowmya";
// let user3 = "Shannu";
// let user4 = "Preethi";
// let user5 = "Tinky";

// console.log(user1);
// console.log(user2);
// console.log(user3);
// console.log(user4);
// console.log(user5);

// let users = ["Bhanu","Sowmya","Shannu"];
// console.log(user0);
// console.log(user1);
// console.log(user2);

// for(let i=0;i<users.length;i++)
// {
//     console.log(users[i]);
// }

// users.map((users ,i)=>{
//     console,log(users, i)
// })

// let x = users.map((user ,i)=>{
//     return user;
// });
// console.log(x);

// let x = users.forEach((user,i)=>{
//     console.log(user);
//     return user;
// });
// console.log(x);

// let userDetails = {
//     name :"Akshay",
//     age :22,
//     address:{
//     city:"Hyderabad",
//     pincode:{
//         pin1:500018,
//         pin2:512347
//     }
//     }
// };
// console.log(userDetails.name);
// console.log(userDetails.address.city);

let userData ={
    name:"Sowmya",
    age:20,
    city:"hyd"
};
console.log(userData.name , typeof(userData));

let x = JSON.stringify(userData);
console.log(x , typeof(x));

let y = JSON.parse(x);
console.log(y);


console.log(10);
console.log(20);
setTimeout(()=>{
    console.log(30);
})
console.log(40);
console.log(50);


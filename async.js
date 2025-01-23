// console.log(10);
// console.log(20);
// setTimeout(()=>{
//     console.log(30);
// })
// console.log(40);
// console.log(50);

// setInterval

//! Promise

// let p1 = new Promise(()=>{});
// console.log(p1);

// let p2 = new Promise((resolve , reject)=>{
//      resolve("Success");
// });
// console.log(p2);
// p2.then((res)=>{
//      console.log(res);
// })

// p2.catch(err=>console.log(err));

// p2.finally(()=>console.log("final"));

//  let p3 = new Promise((resolve , reject)=>{
//      reject("fullfilled");
//  });

// p3
// .then(res=>console.log(res))
// .catch(err=>console.log(err))
// .finally(()=>console.log("final"))
// // console.log(p3);

// ! API FECTHING

// function fetchUsers()
// {
//     let response = fetch("https://jsonplaceholder.typicode.com/users")
//     // console.log(response);
//     // x.then(res=>console.log(res))
//     response.then(res=>{
//         // console.log(res.json());
//         return res.json().then(data=>{
//             console.log(data);
//         })
//     })
//     response.catch(err=>console.log(err))
// }
// fetchUsers();

// ASYNC & AWAIT !!

// function demo()
// {
//     console.log("start");
//     console.log(10);
//     console.log(20);
//     return;
//     console.log(30);
//     console.log("end");
// }
// demo();

// let p = new Promise((resolve , reject)=>{
//     setTimeout(()=>{
//         resolve("success")
//     },4000);
// });

// async function demo(){
//     console.log("start");
//     let x =await p;
//     console.log(x);
//     console.log("end");
// }
// demo();

// async function fetchUsers(){
//     let response =await fetch("https://jsonplaceholder.typicode.com/users")
//     let data =await response.json();
//     console.log(data);
// };
// fetchUsers();

// console.log(window)

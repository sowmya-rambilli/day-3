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
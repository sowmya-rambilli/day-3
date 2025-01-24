// let element = document.getElementById("demo");
// element.innerHTML = "DOM"
// console.log(element);

// let test = document.getElementById("test");
// test.innerHTML = "<h1>Header</h1>"
// console.log(test);


let ele = document.getElementsByClassName("test");
ele[0].style.backgroundColor = "doggerblue"
console.log(ele);
console.log(Array.isArray(ele));


let x = [...ele];
console.log(x, Array.isArray(x));
x.map(element=>{
    console.log(element);
    element.style.backgroundColor = "tomato";
    element.style.color = "white";
    element.style.textTransform = "uppercase";
})
// const test = 'somthing'
// let x
// console.log(test.charAt(0).toUpperCase() + test.slice(1))

// x = Math.round(Math.random()* 100)
// console.log(x)

// const x = Math.round(Math.random() * 100 + 1)
// const y = Math.round(Math.random() * 50 + 1)
// let res = x + " + " + y +" = " + (x+y)
// console.log(res)

// const x2 = Math.round(Math.random() * 100 + 1)
// const y2 = Math.round(Math.random() * 50 + 1)
// let res2 = x2 + " - " + y2 +" = " + (x2-y2)
// console.log(res2)

// const x3 = Math.round(Math.random() * 100 + 1)
// const y3 = Math.round(Math.random() * 50 + 1)
// let res3 = x + " X " + y +" = " + (x*y)
// console.log(res3)

// const x4 = Math.round(Math.random() * 100 + 1)
// const y4 = Math.round(Math.random() * 50 + 1)
// let res4 = x + " : " + y +" = " + (x/y)
// console.log(res4)

// const x5 = Math.round(Math.random() * 100 + 1)
// const y5 = Math.round(Math.random() * 50 + 1)
// let res5 = x5 + " % " + y5 +" = " + (x5%y5)
// console.log(res5)

// let d =     new Date()
// console.log(typeof d, d)

// const arr = [1, 2, 3, 4 ,5]
// arr.push(6)
// arr.unshift(0)
// arr.reverse()

// const arr1 = [1, 2, 3, 4 ,5]
// const arr2 = [5, 6, 7, 8, 9, 10]
// arr1.splice(4, 1)
// let x = [...arr1, ...arr2]
// console.log(x)

// const library = [
//     {
//         title: 'html',
//         author: 'shalev',
//         status: {
//             own: true,
//             reading : false,
//             read : false
//         }
//     },
//     {
//         title: 'css',
//         author: 'sharaby',
//         status: {
//             own: true,
//             reading : false,
//             read : false
//         }
//     },
//     {
//         title: 'javascriptt',
//         author: 'future shalev',
//         status: {
//             own: true,
//             reading : false,
//             read : false
//         }
//     }
// ]

// library[0].status.read = true
// library[1].status.read = true
// library[2].status.read = true

// const {title: firstBook} = library[0]
// const firstBook2 = library[0].title

// const firstJson = JSON.stringify(library)

// console.log(library)
// console.log(firstJson)

// const arr = [1, 2, 3, 4 ,5 ,6 ,7 ,8 ,9]
// function arrRandom(arr) {
//     const randomIndex = Math.floor(Math.random() * arr.length)
//     return arr[randomIndex]
// }
// console.log( arrRandom(arr))

// const getCelsius = (F) => (F - 32) * 5/9 + '°'
// console.log(getCelsius(110))

// const arr = [1, 2, 3, 4 ,5 ,6 ,7 ,8 ,9]
// function minMax(arr){
//     min = Math.min(...arr)
//     max = Math.max(...arr)
//     return{
//         min, max
//     }
// }
// console.log(minMax(arr))

// ( function (width, length) {
//     res = width * length
//     output = 'the width is ' + width + ' and the length is '+ length + ' so the answer is ' + res
//     console.log(output)
// }) (3,4)

// IF / SWITCH CHALLENGE
// IF OPTION
// function calculator(num1, num2, operator){
//     if (operator == `+`) {
//         const res = num1 + num2
//         console.log(res)
//     } else if (operator == `-`){
//         const res = num1 - num2
//         console.log(res)
//     } else if (operator == `*`){
//         const res = num1 * num2
//         console.log(res)
//     } else if (operator == `/`){
//         const res = num1 / num2
//         console.log(res)
//     } else {
//         console.log("there is an error with you input")
//     }
// }
// x= calculator(3, 2, `+`)
// console.log(x)
// SWITCH OPTION
// function calculator(num1, num2, operator){
//     switch (operator) {
//         case `+`:
//         console.log(rnum1 + num2)
//         break
//         case `-`:
//             console.log(num1 - num2)
//             break
//          case `*`:
//             console.log(num1 * num2)
//             break
//         case `/`:
//             console.log(num1 / num2)
//             break
//         default:
//             console.log("there is an error with you input")

//     }
// }
// x= calculator(3, 2, `/`)
// console.log(x)

// LOOPS
// const names = ['alex', 'bar', 'sara', 'tim', 'shun']
// for (let i = 0; i < 7; i++) {
//     if (names[i] == 'sara') {
//         console.log(names[i] + ' is the best')
//     } else {
//     console.log(names[i])
//     console.log(i)
//     }
// }

// FIZZBUZZ CHALLENGE
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log('FizzBuzz')
//     } else if (i % 3 == 0 ) {
//         console.log('Fizz')
//     } else if (i % 5 == 0 ) {
//         console.log('Buzz')
//     } else {
//         console.log(i)
//     }
// }
// FIZZBUZZ CHALLENGE
// let i = 1
// while (i <= 100) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log('FizzBuzz')
//     } else if (i % 3 == 0 ) {
//         console.log('Fizz')
//     } else if (i % 5 == 0 ) {
//         console.log('Buzz')
//     } else {
//         console.log(i)
//     }
//     i++
// }

// LOOPS FOR ARRAY
// numbers = [1,2,3,4,5,6,7,8,9,10]
// LOOPS FOR ARRAY - FOR EACH
// newNumbers = []
// numbers.forEach(num => {
//     if (num % 2 == 0){
//         newNumbers.push(num)
//     }
// });
// console.log(newNumbers)
// LOOPS FOR ARRAY - FILTER
// newNumbers = numbers.filter((num) => num % 2 == 0)
// console.log(newNumbers)
// LOOPS FOR ARRAY - FILTER
// const companies = [
//     {name: 'Company One', category: 'Finance', start: 1981, end: 2004},
//     {name: 'Company Two', category: 'Retail', start: 1992, end: 2008},
//     {name: 'Company Three', category: 'Auto', start: 1999, end: 2007},
//     {name: 'Company Four', category: 'Retail', start: 1989, end: 2010},
//     {name: 'Company Five', category: 'Technology', start: 2009, end: 2014},
//     {name: 'Company Six', category: 'Finance', start: 1987, end: 2010},
//     {name: 'Company Seven', category: 'Auto', start: 1986, end: 1996},
//     {name: 'Company Eight', category: 'Technology', start: 2011, end: 2016},
//     {name: 'Company Nine', category: 'Retail', start: 1981, end: 1989},
//   ]
//   const lastedCompanies = companies.filter((company) => company.end - company.start >= 10)
//   console.log(lastedCompanies)
// LOOPS FOR ARRAY - MAP
// const x = companies.map((company) => company.name)
// console.log(x)
// LOOPS FOR ARRAY - REDUCE
// const cart = [
//     { id: 1, name: 'product 1', price: 100},
//     { id: 2, name: "product 2", price: 150},
//     { id: 3, name: "product 3", price: 200},
//     { id: 4, name: "product 4", price: 60}
// ]
// const total = cart.reduce((bef,cur) => bef + cur.price, 0)
// console.log(total)
// LOOPS CHALLEGES
// CHALLENGE 1
// const people = [
//     {
//       firstName: 'John',
//       lastName: 'Doe',
//       email: 'john@gmail.com',
//       phone: '111-111-1111',
//       age: 30,
//     },
//     {
//       firstName: 'Jane',
//       lastName: 'Poe',
//       email: 'jane@gmail.com',
//       phone: '222-222-2222',
//       age: 25,
//     },
//     {
//       firstName: 'Bob',
//       lastName: 'Foe',
//       email: 'bob@gmail.com',
//       phone: '333-333-3333',
//       age: 45,
//     },
//     {
//       firstName: 'Sara',
//       lastName: 'Soe',
//       email: 'Sara@gmail.com',
//       phone: '444-444-4444',
//       age: 19,
//     },
//     {
//       firstName: 'Jose',
//       lastName: 'Koe',
//       email: 'jose@gmail.com',
//       phone: '555-555-5555',
//       age: 23,
//     },
//   ];

//   const youngPeople = people
//   .filter((peo) => peo.age <=25)
//   .map((peo) => {
//     return {
//         name: peo.firstName + ' ' + peo.lastName,
//         email: peo.email
//     }
//   })
//     console.log(youngPeople)

// // CHALLENGE 2
// const numbers = [2, -30, 50, 20, -12, -9, 7];

// const addPositive = numbers
// .filter((num) => num > 0)
// .reduce((pv,cv) => pv + cv, 0)
// console.log(addPositive)

// // CHALLENGE 3
// const words = ['coder', 'programmer', 'developer'];
// const capitalizedWords = words.map((word) =>
// word[0].toUpperCase() + word.slice(1))
// console.log(capitalizedWords)

// TIME
// setTimeout setInterval

// let intervalId;
// const startBtn = document.getElementById("start");
// const stopBtn = document.getElementById("stop");

// function startInterval() {
//   if (!intervalId) {
//     intervalId = setInterval(changeColor, 2000);
//   }
// }
// function changeColor() {
//   let body = document.querySelector("body");
//   if (body.style.backgroundColor != "black") {
//     body.style.backgroundColor = "black";
//   } else {
//     body.style.backgroundColor = "orange";
//   }
// }
// function stopInterval() {
//   clearInterval(intervalId);
// }

// startBtn.addEventListener("click", startInterval);
// stopBtn.addEventListener("click", stopInterval);

// HTTP REQUEST FETCH API -XHR

// const xhr = new XMLHttpRequest();
// xhr.open("get", `https://api.github.com/users/shalevsha`);

// xhr.onreadystatechange = function () {
//   if (this.readyState == 4 && this.status == 200) {
//     const data = JSON.parse(this.responseText);
//     const p = document.createElement("p");
//     p.textContent = data.login + " : " + data.id;
//     document.body.appendChild(p);
//   }
//   console.log(this.readyState);
//   console.log(this.status);
// };
// xhr.send();

// PROMISE
// const promise = new Promise((resolve, reject) => {
//   console.log("outside the timeout");
//   setTimeout(() => {
//     console.log("inside the timeout");
//     console.log(Date.now());
//     resolve();
//   }, 3000);
// });

// promise.then(() => {
//   console.log("inside the promise");
//   console.log(Date.now());
// });

// FETCH API MEHTOD - GET
// fetch("https://api.github.com/users/shalev")
//   .then((response) => response.json())
//   .then((data) => data.login)
//   .then((ddd) => console.log(ddd));

// FETCH - METHOD POST
// function createPost({ title, body }) {
//   fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "post",
//     body: JSON.stringify({
//       title,
//       body,
//     }),
//     headers: {
//       "Content-Type": "application/json",
//       token: "1234",
//       //   bla: "bli",
//     },
//   })
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// }
// createPost({ title: "fdffd", body: "dfdf" });

// FETCH - HOW TO HENDELE AN ERROR
// fetch("https://httpstat.us/404")
//   .then((res) => {
//     if (!res.ok) {
//       throw new Error("this is an error text");
//     }
//     return res;
//   })
//   .then((x) => console.log("checking if the line is done"))
//   .catch((error) => {
//     console.log(error);
//   });

// ASYNC AND AWAIT
// async function imWaiting() {
//   const promise = await new Promise((resolve, reject) => {
//     console.log("outside the timeout");
//     setTimeout(() => {
//       console.log("inside the timeout");
//       resolve();
//     }, 3000);
//   });
//   console.log("the code wait the first thing will be done");
// }
// imWaiting();

// TRY AND CATCH
// try {
//   console.log(x);
// } catch (error) {
//   console.log("catch");
//   console.log(error);
// }

// ASYNC AWAIT AND TRY CATH TOGETHER
// async function imWaiting() {
//   try {
//     im - putting - here - an - error - on - purpose;
//     const promise = await new Promise((resolve, reject) => {
//       console.log("outside the timeout");
//       setTimeout(() => {
//         console.log("inside the timeout");
//         resolve();
//       }, 3000);
//     });
//     console.log("the code wait the first thing will be done");
//   } catch (error) {
//     console.log(error);
//   }
// }
// imWaiting();

// RIDDLE I WANT TO SOLVE
// const arra = [1, 2, 3, 4, 5, 6, 7, 8];
// function foo(arr, num) {
//   let x = 0;
//   let n = 0;
//   arr.forEach((number) => {
//     x++;
//     if (number + number[x]) {
//       n++;
//     }
//   });
// }
// function foo(arr, num) {
//   let n = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (i == arr.length) {
//       break;
//     } else {
//       for (let a = 0; a < arr.length; a++) {
//         if (i == a) {
//           continue;
//         } else if (arr[i] + arr[a] == num) {
//           n++;
//         }
//       }
//     }
//   }
//   n = n / 2;
//   return n;
// }

// console.log(foo(arra, 32));

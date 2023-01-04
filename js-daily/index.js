// const num = [
//   { name: "arnold", age: 30, job: "boss", salary: 2489, id: 1 },

//   { name: "grace", age: 25, job: "designer", salary: 3000, id: 2 },

//   { name: "ovie", age: 21, job: "soft guy", salary: 700, id: 3 },

//   { name: "obby", age: 26, job: "Engineer", salary: 238, id: 4 },
// ];

// const ages = num.map((person) => {
//   return {
//     firtname: `${person.name} ${person.name}`,

//     age: person.age,
//   };
// });

// const matcheS = num.find(function (item) {
//   return item.id == 3;
// });

// console.log(matcheS);

// const lastMth = num.reduce(function (total, curr) {
//   total += curr.salary;

//   return total;
// }, 0);

// console.log(lastMth);

// const student = [
//   {
//     id: 1,
//     name: "grace",
//     score: 66,
//     favSubject: "math",
//   },
//   {
//     id: 2,
//     name: "kante",
//     score: 96,
//     favSubject: "math",
//   },
//   {
//     id: 3,
//     name: "verane",
//     score: 66,
//     favSubject: "geo",
//   },
//   {
//     id: 4,
//     name: "philip",
//     score: 80,
//     favSubject: "english",
//   },
//   {
//     id: 5,
//     name: "philip",
//     score: 80,
//     favSubject: "geo",
//   },
//   {
//     id: 6,
//     name: "philip",
//     score: 80,
//     favSubject: "english",
//   },
// ];

// const result = student.map((item) => {
//   item.role = "student";
//   return item;
// });

// const result2 = student.filter(function (item) {
//   return item.score >= 80;
// });

// const result3 = student.find(function (item) {
//   return item.id == 2;
// });
// // console.log(result3)

// const result4 =
//   student.reduce(function (total, curr) {
//     total += curr.score;

//     return total;
//   }, 0) / student.length;

// const result5 = student.reduce(function (total, curr) {
//   const values = curr.favSubject;

//   if (total[values]) {
//     total[values] = total[values] + 1;
//   } else {
//     total[values] = 1;
//   }

//   return total;
// }, {});

// console.log(result5);

// const mathF = Math.floor(Math.random() * 10 + 1);
// console.log(mathF);
// 4;

// // dom  //

// const resultValue = document.querySelector('#result')



// console.log(resultValue.children)



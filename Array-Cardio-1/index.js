const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Arnold, boss",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];

//   solutions

//  .1 filter outer inventors born in year 1500

const bornFifteen = inventors.filter(
  (item) => item.year >= 1500 && item.year <= 1599
);
console.table(bornFifteen);

//  .2  Array of inventors with their firat and last names

const Fullname = inventors.map((data) => `${data.first} ${data.last}`);

console.table(Fullname);

// 3. Sort the inventors by birthdate, oldest to youngest

const oldeYoungest = inventors.sort((a, b) => {
  if (a.year > b.year) {
    return 1;
  } else {
    return -1;
  }
});

console.table(oldeYoungest);

// .4a How many years did all the inventors lived

// const yearsLived = inventors
//   .map((item) => {
//     const eachAge = item.passed - item.year;
//     return eachAge;
//   })
//   .reduce((total, accum) => {
//     total += accum;

//     return total;
//   }, 0);

// console.log(yearsLived);

// .4b  How many years did all the inventors lived

const yearsLived = inventors.reduce((total, accum) => {
  return total + (accum.passed - accum.year);
}, 0);

console.log(yearsLived);

// 5a the inventors by years lived

// const byYearsLived = inventors
//   .map((item) => {
//     const eachAge = item.passed - item.year;
//     return eachAge;
//   })
//   .sort((a, b) => {
//     if (a.byYearsLived > b.byYearsLived) {
//       return 1;
//     } else {
//       return -1;
//     }
//   });

// 5b the inventors by years lived

const byYearsLived = inventors.sort((a, b) => {
  if (a.byYearsLived > b.byYearsLived) {
    return 1;
  } else {
    return -1;
  }
});
console.table(byYearsLived);



// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

//     const category = document.querySelector('.mw-category')

// const links = Array.from(category.querySelectorAll('a'))

// const de = links.map(link =>link.textContent).filter(item => item.includes('de'))



// 7.     sort the people data alphabetically by last name



const surname = people.sort((lastone, nextone)=>{
  const [alast, afirst] = lastone.split(', ')
  const [blast, bfirst] = nextone.split(', ')

  return alast > blast ? 1 : -1
})

console.log(surname)






const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick']


const counter = data.reduce((item, acc)=>{
    if(!item[acc]){
        item[acc] = 0
    }
    item[acc]++
    return item
},{})


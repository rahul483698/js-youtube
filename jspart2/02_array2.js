const marval_hero=["thor","ironman","spiderman"];
const dc_hero=["superman","batman","flash"];
marval_hero.push(dc_hero);
//console.log(marval_hero);//merge nahi hoga dc ka pura array ek index ban jayega

const allHero=marval_hero.concat(dc_hero);
//console.log(allHero);//for merge two array

const allNewHeroes=[...marval_hero,...dc_hero];
//console.log(allNewHeroes);

const AnotherArray=[1,3,4,[5,4,7],1,2,[9,7,6]];
//console.log(AnotherArray.flat(Infinity));

console.log(Array.isArray("rahu;"));
console.log(Array.from("rahul"));
console.log(Array.from({name:"rohit"}));//empty array dega

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));



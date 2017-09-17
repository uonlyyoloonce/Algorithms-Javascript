//const arr=['foo','bar'];
//const arr:ReadonlyArray<string>=['foo','bar'];
//const copy=arr.sort();
//const copy=arr.slice().sort();
//arr.sort();
//console.log({arr});
//console.log({copy});
const foo = [1, 3, 24, 11];
foo.sort();
console.log(foo);
/**
 * [1,11,24,3]
 */
// foo.sort((a,b)=>{
// /**
//  * if a>b return +
//  * if a===b return 0
//  * if a<b return -
//  */
// })
foo.sort((a, b) => a - b);
const movies = [
    {
        name: "The Shawshank Redemtion",
        year: 1994
    },
    {
        name: "The Godfather",
        year: 1972
    },
    {
        name: "The Godfather: Part II",
        year: 1974
    },
    {
        name: "The Dark Knight",
        year: 2008
    }
];
// Sorts in ascending order
movies.sort((b, a) => b.year - a.year);
console.log("Sort on an attribute of an object: ", "");
movies.forEach(function (movie) {
    console.log("", movie.name);
});
//# sourceMappingURL=sort.js.map
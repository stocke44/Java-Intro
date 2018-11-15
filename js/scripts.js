// arrays always start at 0
//const myFirstArray = ['Jose',23,true,'Farmersville',['Josie','Gisel','Gonzalo']];

//console.log(myFirstArray[4][1]);
// const geekwise = [['Web for Begginners',true],['Mobile Friendly',true],['Intro to Js',false]]
// console.log(geekwise[1][0]);
// console.log(geekwise[0][0]);
// console.log(geekwise[2][1]);
//console.log(geekwise.length);

//const list = ['Infinity War',21,false,2013]

//console.log(list,list.length,list[1]);

// const array = ['cat'];

// console.log(array[5]); will return undefined inex is outside of length of array
// you can assign variables in your console web page but if you refresh the page you will lose it

// const arr = [];undefined
// typeof(arr); returns object
// Array.isArray(arr); returns wether the variable is an array

//const names = ['jose','gisel','josie','gricelda'];
//names.push('Ted');// adds item to the end of the array
//names.unshift('Pringle'); //adds variable to the beggining of the array
//console.log(names);

//names.pop();//will remove the last item in the array
//names.shift()//removes the first tiem in an array

//names.splice(0,1,'Ruperto');
//console.log(names);
//names.splice(2,1);//removes specific indexes
//names.splice(2)//removes all items after that index
//console.log(names);

// console.log(names.slice(2));//returns indeependent arays after the index

// const family = names.slice(0,2);

// const iPeople = names.slice(2);

// console.log(family , iPeople);

// you can split a string an it will give you all the individual charachters in an array

// const number = [1,2,3,4,'jose',5,6,7,8,9,10];
// console.log(number.indexOf('jose'));// returns index of item
// console.log(number.includes('jose'));// returns weither item is in array or not

// const luckyNums = [6,2,9,4,8,6,9,1,2,2,0];
// console.log(luckyNums.indexOf(2));//only returns first instance of an item
// console.log(luckyNums.lastIndexOf(2));// returns last index where item appears

// console.log(names.reverse());// takes original string and reverses the order of the items within

//.join combines multiple array methids

//str === str.split('').reverse().join('') figures out if items are palindromes

// console.log(names.sort());//sorts by the first charchter of the variable so it will do 1,10,2


//  const favMovie1 = ['Infinity War','Thor'];
//  const favMovie2 = ['DragonBall return of freezia','Goku'];
//  const favMovie3 = ['Seven Deadly Sins','Meliodas'];
//  const favMovie4 = ['My Hero Academia','All Might'];
//  const favMovie5 = ['Fairy Tail','Laxus'];

//  const favoriteMovies = [favMovie1,favMovie2,favMovie3,favMovie4,favMovie5];

// const movieTitles = [];

// movieTitles.push(favoriteMovies[0][0],favoriteMovies[1][0],favoriteMovies[2][0],favoriteMovies[3][0],favoriteMovies[4][0]);

// console.log(movieTitles);

// for (let i=1; i<=10; i++) {
//     console.log(i);
// }

const names =['goku','all might','josie','natsu','sakamoto'];

// for(let i =0;i <names.length;i++){
//     console.log(names[i]);
// }

const albums = ['ACDC','Panic at the Disco','K/D/A'];
// for(let i=0; i<albums.length;i++){
//     console.log(albums[i]);
// }

// for (let name of names) {
//     console.log(name);
// }

//names.forEach(name => console.log(name) );// you  couls use map in place of for each

// for(let album of albums){
//     console.log(album);
//     if(album === 'Panic at the Disco'){
//         break;
//     }
// }

// const person = { 
//     name:'Jose',
//     age:23,
//     favShow:'DragonBall'
// };

// for(let key in person){// for in meant for objects instead of arrays
//     console.log(person[key]);
// }
// console.log(person.name);//you can call the key on the object and it will return the value of the key

// const user = {};
// console.log(user);
// user.name =prompt('whats your name?');
// user.age = +prompt('whats your age?');
// console.log(user);
// console.log(user.name);

const favMovie1 = ['Infinity War','2018'];
const favMovie2 = ['DragonBall return of freezia','2016'];
const favMovie3 = ['Seven Deadly Sins','2015'];
const favMovie4 = ['My Hero Academia','2017'];
const favMovie5 = ['Fairy Tail','2012'];

const favoriteMovies = [favMovie1,favMovie2,favMovie3,favMovie4,favMovie5];
const bestMovie = 'Infinity War';
// for(let movie of favoriteMovies ){
//    if (movie[0]===bestMovie)  {console.log(movie)}
// }

// for(let i = 0;i<favoriteMovies.length;i++ ){
//     if (favoriteMovies[i][0] === bestMovie){
//         console.log(favoriteMovies[i]);}
// }

// favoriteMovies.forEach(movie => {
//     if(movie[0]=== bestMovie){ console.log(movie);}
// })

const obj = {favMovie1,favMovie2,favMovie3,favMovie4,favMovie5};
console.log(obj);
for(let key in obj ){
    if(obj[key][0]=== bestMovie){
        console.log(obj[key]);

    }
}




















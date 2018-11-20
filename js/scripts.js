// const leastFavoriteTeams = ['Yankees', 'Real Madrid', 'Patriots', 'Alabama'];

/**
 * 1) Add 'Lakers' to the front of the leastFavoriteTeams array
 * 2) Add 'Ohio State' to the back of the leastFavoriteTeams array
 * 3) Remove 'Patriots' from the leastFavoriteTeams array
 * 4) Add 'Patriots' back to the beginning of the leastFavoriteTeams array
 * 5) Console log the array to see if you did everything right
 *
 * -> ['Patriots', 'Lakers', 'Yankees', 'Real Madrid', 'Alabama', 'Ohio State']
 */

// leastFavoriteTeams.unshift('Lakers');
// leastFavoriteTeams.push('Ohio State');
// leastFavoriteTeams.splice(3,1);
// leastFavoriteTeams.unshift('Patriots');
// console.log(leastFavoriteTeams);

// const heroes = ['Drow', 'Phantom Lancer', 'Invoker'];

/**
 * 1) Reverse the heroes array
 * 2) Add 'Ember Spirit' after the first index of the heroes array
 * 3) Remove the last member of the heroes array
 * 4) Remove the first item of the heroes array
 * 5) Add 'Shadow Fiend' to the beginning of the heroes array
 * 6) Console log the array to see if you did everything right
 *
 * -> ['Shadow Fiend', 'Phantom Lancer', 'Ember Spirit']
 */

//  heroes.reverse();

//  heroes.splice(2,0, "Ember Spirit");
//  heroes.pop();
// heroes.shift();
// heroes.unshift('Shadow Fiend');
// console.log(heroes);

// const name = 'jose';
// const logSomething = function() {
    
//     console.log(name);
// }
// logSomething();

// console.log(name);

// const number = 42;

// function answerToLife(){
//     console.log(number);
// }

// console.log(number);

// answerToLife();

// const add = (a,b) => {
//     console.log(a+b);

// }

// const sayName= name =>{
//     console.log(name);
// }

// add(464985603,345);

// sayName('Ted');

// const cat = 'meowtherton';

//console.log(cat.substr(2));// similiar to splice but for strings


// function add(num1,num2) {
//     console.log(num1 + num2);

// }

// add(3,8);


// function dogsAge(years){
//     years = +prompt('how old is the dog ?');
//     console.log(years *7);
// }

// dogsAge();

// function lifeTimeSupply(age,amountPerDay,maxAge){
    
//     maxAge =+prompt('How old do you want to live to?');
//     age = +prompt('how old are you');
//     amountPerDay= +prompt('How much of this proguct do you use per day?');
//     alert(`You will need ${((maxAge - age)*365)*amountPerDay} to last until you're ${maxAge}`);
// }

// lifeTimeSupply();
// const team = {homeTown:'farmersville',weather:'thunder',animal:'lion'}
// function teamName(list){
//     console.log(list.homeTown+' '+list.weather+' '+list.animal);
// }

// teamName(team);

class Person {
    constructor(name,age){
        this.name =name;
        this.age= age;
    }

    sayName(){
        console.log(this.name);
    }
    how0ld(){
        console.log(this.age);
    }
}

const jose = new Person('jose',23);

console.log(jose.how0ld());

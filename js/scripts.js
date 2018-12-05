// // const str = new String('Jose');

// // console.log(str);

// // console.log(Object.getPrototypeOf(34));

// // const arr = new Array('jose', 29);

// // console.log(arr);

// // const num = new Number(46);

// // console.log(num);

// // const bool = new Boolean(true);
// // console.log(bool);

// // const person ={
// //     name: 'Jose Barajas'
// // };

// // console.log(person);
// //old way = constructor function
// function Animal(name,energy){
//     this.name = name;
//     this.energy = energy;
//     this.play = function(){
//         this.energy -=5
//     }
// }



// const dog= new Animal('Dog',40);

// console.log(dog);

// // console.log(dog.name);
// // console.log(dog.energy);
// // dog.play();
// // console.log(dog.energy);

// function Todo(text,isDone){
//     this.edit = function (){
        
//     }
// }




// function login(){
//     this.name;
//     this.password;
//     this.getPassword= function(){
//         this.password =prompt('whats your password');    
//     }
//     this.getStuff=function(){
//         this.getName();
//         this.getPassword();
//     }
//     this.getName=function(){
//         this.name=prompt('what is your name');  
//     }
// }
// //calling new on the function initalizes it as a prototype
// const user = new login();

// user.getStuff();
// console.log(user);

//look up inheritance

class Animal{
    constructor(name,energy){
        this.name = name;
        this.energy = energy;
    }        
    play(){
        this.energy -=5;
    }
}

const dog = new Animal('fido',64);
console.log(dog.energy);



class Dog extends Animal{
    constructor(name,energy,says){
        super(...arguments);
        this.says=says;
    }
    speak(){
        alert(`dog says ${this.says}`);
    }
}


const ace = new Dog('Ace',54,'Bark');
console.log(ace.energy);
ace.play();
console.log(ace.energy);



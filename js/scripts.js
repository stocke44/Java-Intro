// console.log(document.forms.loginForm.button);
// //console.log(document.forms['login-form']);

// const btn = document.forms.loginForm.button;


// btn.addEventListener('click',e =>{
//     let firstname = document.forms.loginForm.firstName;
 
//     e.preventDefault();
//     console.log(firstname.value);
//     console.log('Clicked');  
//      firstname.value = '';
// })

/**
 * Javascript this
 */


 //console.log(this);

//  const person = { 
//     firstName:'jose',
//     lastName:'barajas',
//     age : 23,
//     wife:{
//         firstName:'Josie',
//         lastName: 'contreras',
//         age:23,
//         how0ld(){
//             console.log(`${this.firstName} ${this.lastName} is: ${this.age} years old`)

//         }
//     },


//     how0ld(){
//         console.log(`${this.firstName} ${this.lastName} is: ${this.age} years old`)
//     }
//  };

//left of doll for call site
//  person.how0ld();
//  person.wife.how0ld();

//  const btn1 = document.querySelector('#btn1');
//  const btn2 = document.querySelector('#btn2');

//  btn1.addEventListener('click', logThis);
//  btn2.addEventListener('click', logThis);

//  function logThis(){
//      console.log(this);
//  }


//  btn1.addEventListener('click', ()=>{
// // this.style.display = 'none'; button disappears
// // this.parentElement.style.display ='none', deletes all the items 
//      console.log(this);
//  });
//  btn2.addEventListener('click', function(){
//      console.log(this);
//  });

//  const buttons = document.querySelectorAll('button');

//  console.log('buttons',buttons);

// buttons.forEach(button => button.addEventListener('click',function(){
//      this.style.display='none';
//  }))



// const dog ={
//     name:'Ace',
//     says:'woof',
// }

// const cat ={
//     name:'meow',
//     says:'puurrr',
// }

// const baldEagle ={
//     name :'Freedom',
//     says: 'America is #1',
// }



// function speak(location,status){
//     alert(`${this.name} says: ${this.says} from ${location} and looks ${status}`);
// }
//.call gives the function speak passes a scope to work from
// speak.call(dog,'The Yard');
// speak.call(cat,'The house');
// speak.call(baldEagle,'The White House');

// need to pass an array to .apply for it to function
// speak.apply(dog,['The Yard','because hes hungry']);
// speak.apply(cat,['The house','annoyed']);
// speak.apply(baldEagle,['The White House','majestic']);

//

// function speak(){
//     alert(`${this.name} says: ${this.says} `);
// }

// const dogSays = speak.bind(dog);
// const catSays = speak.bind(cat);
// const eagleSays = speak.bind(baldEagle);
// dogSays();
// catSays();
// eagleSays();

class Person {
    constructor(name, age, favColor){
        this.name=name;
        this.age =age;
        this.favColor = favColor;
    }
    sayName(){
        console.log(this.name);
    }
}


const jose = new Person('jose', 23 , 'red');
const david = new Person('David', 40 , 'orange');

jose.sayName();
david.sayName();















//console.log('42' == 42);  loose equals (assumes you where comparing number)
//console.log('5' === 5);  strict equals (compares a string with a number)

//console.log("42" != 42); loose not equals 
//console.log('42' !== 42); strict not equals

const phrase = "They made detective pickachu??";
const phraseNew = new String('They made detective pickachu??');
 
// loose equals dont care about data type strict equals does


// console.log(phrase === phraseNew);
// console.log(phrase == phraseNew);

//fizzbuzz test is a really popular interview question

// weird math things console.log(0.1+0.2) equals .30000000004
//console.log(.99999999999999) equals 1 havascript uses float math

//console.log(0/0); == NaN not a Number

let cartTotal = 0 ;

// console.log("number",number);
// number++;
// console.log("number",number);
// number++;
// console.log("number",number);
// number--;
// console.log("number",number);

// const item = 9.99;
// const item2 = 7.99;
// const discount = .5;

// console.log(cartTotal += item);
// console.log(cartTotal += item2);//adding item totals to a cart
// console.log(cartTotal *= discount); //50 %discount using *=


//  let value = 0;
//  const userValue = prompt('Please provide a number ??',10);// after the string you can use a comma to give it a default
//  const userValue2 = prompt('Please provide a second number ??',10);
//  const oper = prompt('Picka numbe to mutilpy by??',5.2);
//  value+=(+userValue);
//  value+=(+userValue2);
//  value*=(+oper);
 

//  alert(value)


//control Flow

const firstName = 'Be';

if (firstName === 'Jose') {
// if statment is true , run this code
    console.log('Youre Jose');

}else if(firstName === 'Ben'){

//if statement is false, run this code
    console.log('you are ben');

} else{
    console.log('Your name is not jose or ben');

}

const magicNumber = 1;
 if (magicNumber === 1){
     console.log(1);
 } else if (magicNumber === 2){
     console.log(2);
 }else{
     console.log('no magic number for you');
 }
// && operator requires both sides to be true
// || operator only requires one side to be true

if(false || true  ){
    console.log('Great success!');
}

const age =80;
if(age===21 || age=== 80){
    console.log('You are 21 or 80')
}

const lastName = '';
// looking for truthy or falsy values
if(!lastName){
    console.log(`You did not provide a last name`)
}

// prompt user for name
// if they provide a name alert their name
// if they provide no value alert that you need a valid name


// const validName = prompt('What is your name');

// if(!validName){
//     alert('You need a name');
// } else {
//     alert(`Your name is : ${validName}`);
// }

//Refactored the above example to a ternary statement
//const validName = prompt('What is your name');
// evaluation ? true : false ;
//validName ?     alert(`Your name is : ${validName}`):  alert('You need a name') ;

//const animeHero = prompt('What is your favorite anime character?');

// switch(animeHero){
//     case 'goku':
//         console.log('Goku is awesome!!');
//         break;
//     case 'luffy':
//         console.log('luffy is stretchy');
//         break;
//     default:
//         console.log('Sorry, not an anime charachter');
// }

const userAge = +prompt('What is your age');

if(userAge >= 18 && userAge <= 80){
  const likes = confirm('Do you like star wars?');
  if(likes){
      alert('nerd');
  }
   
} else if (userAge> 80){
    const prunes = confirm('do you like prunes');
  prunes ?  alert('gross') : alert('I guess your normal');
}else{
    alert("youre not old enough");
} 










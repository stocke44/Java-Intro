const firstName = prompt('What is your first name?');
const lastName = prompt('Whats your last name?')
const birthday = new Date(prompt('What is your birthday'));

console.log(firstName);
alert(lastName);
console.log(birthday);
confirm(`Is your birthday correct: ${birthday}`);
alert(`your birthday is: ${birthday}`);
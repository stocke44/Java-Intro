//red, orange, yellow, green, blue, pink, purple, black, white, and grey

const name = prompt('What is your name?');
const color = prompt('What is your favorite color amongst the following : red, orange, yellow, green, blue, pink, purple, black, white, and grey?').toLowerCase();

switch(color){
    case 'red':
        console.log(`${name} the color ${color} is awesome.`);
        break;
    case 'orange':
        console.log(`${name} the color ${color} is ok.`);
        break;
    case 'yellow':
        console.log(`${name} the color ${color} is lame.`);
        break;
    case 'green':
        console.log(`${name} the color ${color} is alright.`);
        break;
    case 'blue':
        console.log(`${name} the color ${color} is cool.`);
        break;
    case 'pink':
        console.log(`${name} the color ${color} is scandalous.`);
        break;
    case 'purple':
        console.log(`${name} the color ${color} is makes people moody.`);
        break;
    case 'black':
        console.log(`${name} the color ${color} is like the night maybe you are batman.`);
        break;
    case 'white':
        console.log(`${name} the color ${color} is serene.`);
        break;
    case 'grey':
        console.log(`${name} the color ${color} is bland.`);
        break;
    default:
        console.log(`So ${name} I guess you did not like my color choices. ${color} is cool too i guess.`);
}
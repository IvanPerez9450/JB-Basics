
//This is my first JavaScript code!
console.log('Hello World');



// 1 - Constants // The value of a variable can change, but the value of a constant can't not change
const interstRate = 0.3;
console.log(interstRate)



// 2 - Variables // (store data in a specific name 'age' )
let name = 'Ivan'; 
console.log(name);
//They can't not me a reserved keyword (if, let, const, true, false, return )
// They should be meaninful and descriptives (age, name, race, color)
// They can not start with a number (1name)
// They can not contain a space or hyphen (name-dog, color of skin)
// They are case-sensitive
let firstName = 'Ivan';
let lastName = 'Perez';



// 3 - PRIMITIVE / VALUES TYPES
let name = 'Ivan';         //String
let age =30;               //Number
let isApproved = false;    //Boolean
let firstName = undefined; //Undefine
let selectedColor = null;  //Null





// 4 - REFERENCE TYPES (multiple relative variables can be place inside of an object as a whole) OBJECTS 
let person = {
    name: 'Ivan',
    age: 30,
}

// DOT NOTATION
person.name = 'John';
console.log(person.name);

//BRACKET NOTATION
person['name'] = 'Mary';
console.log(person.name)


// 5 - ARRAYS (are used to represent a list of things)
let selectedColors = ['red','blue'];
selectedColors [2] = '1';
console.log(selectedColors.length);


// 6 - FUNCTION (statements thatset a task or calculates the values)
//PERFORMING A TASK
function greet(name, lastName){
    console.log( ' Hello ' + name + ' ' + lastName)
}
greet('John','Smith')
// CALCULATING A VALUE
function square(number) {
    return number * number;
}
console.log(square(9));


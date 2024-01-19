console.log("heyy")

// primitive type of strin initialization
let last_name = "Babbar"

// Object type of string initialization
let first_name = new String("Love")
//  when we use normal string type object using `first_name.` its acts like a Object type of string
console.log("length of last name", last_name.length)


console.log("type of last name", typeof last_name)

console.log("type of first name", typeof first_name)

numbers = [1,2,3,4,5,6]
console.log(numbers);

console.log(numbers[0]);
console.log("type:" , typeof numbers);

numbers.push(9)
console.log(numbers);

numbers.unshift(5)
console.log(numbers);

numbers.splice(2,0,'a','aa','v','d')
console.log(numbers);

//  number is exists in array

console.log(numbers.includes('z'))

// delition from aray
numbers.pop()
console.log(numbers);

numbers.shift()
console.log(numbers);

numbers.splice(2,2)
console.log(numbers);

// geting empty array
numbers.length= 0
numbers.splice(0,numbers.length)
console.log(numbers);
// find element from object type array
cources = [
    {"id":2, "Naam":"Babbar"},
    {"id":3, "Naam":"tipya"}
];


//  first way to find leelment from object array
let cource = cources.find(function find_(cources) {
    return cources.Naam=="tipya"
})

console.log(cource);

//  second way to find leelment from object array

let cource1 = cources.find(cources => 
    cources.Naam=="tipya");

console.log(cource1);
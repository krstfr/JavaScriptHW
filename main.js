console.log("Hello")

//variaable in JavaScript

var name = "Charlie"
console.log(name)

//Integer 
var some_number = 44; 
console.log(some_number)

//Float 
var some_float = 88.1;
console.log(some_float)

//Array Variable
            //    0,1,1,3
var some_array = [1,2,3,4]
console.log(some_array)
console.log(some_array[2])

//Object Variable -- loooks like a python dictionary 
var some_object = {'test': 'Dont test me'}
console.log(some_object)
console.log(some_object.test)


//Javascript Hoisting, JS will run back through the variable if you define \
//the variable after the function, as oppose to other languages that only work going down the screen
console.log(MUN)
var MUN = "Steve"
console.log(MUN)
MUN = "Joe"
console.log(MUN)

//use "let" instead of "var", also use snakecase in javascript
myVarName= "Chris"
//Let and Const
let fullname = myVarName + ' Brown'
console.log(fullname)

const superHero = 'Ironman'
console.log(superHero)
//superHero = 'Batman' won't run due to the variable being a (const)ant

//MATH in Javascript

//Addition
let sum = 5+5;
console.log(sum);//10

sum+=5;
console.log(sum);//15

//Subtract
let diff = 5-5;
console.log(diff);// 0
diff -= 5;
console.log(diff);// -5

//Multiply
let product = 5*5;
console.log(product);//25
product *= 5;
console.log(product);//125

//Divide
let divide = 5/5;
console.log(divide);//1
divide /= 5;
console.log(divide);//.2

//exponential
let square = 5 ** 2;
console.log(square);//25

//Floor Div (Rounds Down)
let floor = Math.floor(5/2);
console.log(floor);//2

//Ceiling Div (Rounds Up)
let ceil = Math.ceil(5/2)
console.log(ceil)//3

//Weird String and Number Stuff
let stuff = 88.1 + '8';
console.log(stuff)//88.18

// int()  float()
let stuff2 = 3.14 + parseFloat('4');
console.log(stuff2);//7.140000000000001

let num = 3
console.log( num.toString() + " Hoops")

/*
<=======Functions======>
*/

function addNums(){
    let num = 4;
    let num2 = 5; 
    return num + num2
}

console.log(addNums());//9

function addNums2(num, num2){
    return num+num2
}

console.log(addNums2(4,5));//9

const addNums3=function(num, num2){
    return num+num2
}
console.log(addNums2(4,5))//9

// Arrow Function
let multiplyNums = () => {
    let num = 4;
    let num2 = 5;
    return num*num2

}

console.log(multiplyNums())
//if one line in body of arrow function, you don't need the brace and it will 
//return whatever that line euqals to
let multiplyNums2 = (num, num2) => num*num2
console.log(multiplyNums2(4,5));

//one parameter you don't need the params
let doubleNum = num => num*2
console.log(doubleNum(5));

//write a function using the normal funcName()= syntax that prints the first 10 odd numbers

let oddnum = [1,3,5,7,9,11,13,15,17,21,23]
console.log(oddnum)

// write a function as an arrow function that takes two numbers and sums their squares

//What I wrote
let addSquares = ()=>{
    let num3 = 3;
    let num6 = 6; 

    return (num3**2)+(num6**2)
}
console.log(addSquares);

//Kevin Solution (Self Invoking Functions)
console.log(function(name){
    return name
}('Chris'))

//FLOW CONTROL 
// If statements and is && and or ||
function determineAge(age){
    if ( age<18 ){
        return 'Minor'
    }else if (age>=18 && age<=65){
        return 'Adult'
    }else{
        return 'Elderly'
    }
}

console.log(determineAge(18))
console.log(determineAge(10))
console.log(determineAge(80))

//Temporary Operator condition ? exprIfTrue: exprIfFalse

function dAge(age){
    return age < 18 ? "Minor": age >=18 && age<= 65 ? "Adult": "Elderly"
}
console.log(dAge(4));
console.log(dAge(72));

// Loops
// "++" and "--" mean add/subtract by one
function countByOne(){
    for(let i = 0; i < 20; i++){
        console.log(i)
    }
}
countByOne()

function countDownByOne(){
    for(let i = 20; i > 0; i--){
        console.log(i)
    }
}
countDownByOne()

//len(list) in python in JS list.length
let list = ["a", "b", "c", "d"]
for(let i = 0; i< list.length; i++){
    console.log(list[i])
}

//python for in
// is JS for of
for (let char of list) {
    console.log(char)
}

//loop through an array inline!!!
list.forEach((element)=> console.log(element))


console.log(list)
console.log(list.toString())

//.map(), .filter(), .reduce()

//.map() will map a function on an array
names = ["Jackson", "Tyson", "Jordan"]

let j_names = names.map(
    (name_)=>{
        if (name_[0]=='J' || name_[0]== 'j'){
            return name_
        }else{
            return false // lower case for false and true in JS
        }
        
    }
)

console.log(j_names)

// .reduce! this will take an array and return one value
const nums = [2,4,6,8,10]
let nums_sums = nums.reduce(
    (accumulated_num, current_num)=>{
        return accumulated_num + current_num // sum + whatever next number is 
    }
)
console.log(nums_sums)

// .filter() will add/remove elements based on your condition 
let long_names = names.filter(
    element => element.length > 5
)
console.log(long_names)

// array methods .join() .slice() .search() .splice()
console.log(names.join(", "))
// ", ".join(names) python

// names.append("Steve")
names.push('Steve')
console.log(names)

// names.pop() 
console.log(names.pop())
console.log(names)

// fist element .shift()
console.log(names.shift())
console.log(names)

console.log(names.unshift("Jackson"))
console.log(names)

// Formatted string in JS
    //f"my name is {name}" python
myName="Chris"
console.log(`My name is ${myName}`)

// splice()

let captured_value = names.splice(0,1,'Fred')
console.log(`This was removed based on our splices: ${captured_value}`)
console.log(names)

function replace_names(){
    for (let i =0; i < names.length; i++){
        if (i % 2 == 0){
            names.splice(i,1), 'Felicia'
        }
    }
}
replace_names()
console.log(names)

// .search

console.log ("Joshua".search('s'))// 2 b/c s is the [2] index
console.log("Joshua".search('z'))// z is not in index so it returns -1

// .splice with a String
console.log("Joshua".slice(0,4))


// 1------------------------------------------------------------->
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)      // it will console the first car in the list
console.log(otherRandomCar)     // console log the second car in the list
// 2------------------------------------------------------------->
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name);     //output will be an error cause name is not defined cause "name" is used as a reference 
console.log(otherName);     //if there was no error it would print out "Elon"
// 3------------------------------------------------------------->
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);      // output would be "12345"
console.log(hashedPassword);        //output would is undefined cause there is no password in person
// 4------------------------------------------------------------->
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);       //false
console.log(first == third);        //true
// 5------------------------------------------------------------->
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);       //output will be 'value'
console.log(secondKey);     //output will be [1, 5, 1, 8, 3, 3]
console.log(secondKey[0]);      //output will be 1
console.log(willThisWork);      //output will be 5
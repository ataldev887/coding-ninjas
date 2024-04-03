const fs = require("fs");

//to read file content using blocking code
console.log('Starting to read')

// const buffer = fs.readFileSync('data.txt')
// console.log(buffer.toString())

// const buffer = fs.readFileSync('data.txt', {encoding:'utf8'})
// console.log(buffer)

//creating and writing a file
fs.writeFileSync('employee.txt','Name: john doe, age: 40, Position: manager')
// try{
// fs.writeFileSync('employee.txt','Name: john doe. age: 40, Position: manager')
// }catch(err){
//     console.log(err)
// }

//append more employee data

// fs.appendFileSync('employee.txt','Name: devatal,age: 21,position: swe')

//deleting a file
// fs.unlinkSync('employee.txt')

console.log('This is another operation being performed')
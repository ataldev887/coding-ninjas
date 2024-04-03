const fs = require('fs')

//reading data
fs.readFile('data.txt',(err,data)=>{
    if(err){
        console.log(err)
    }else {
        console.log(data.toString())
    }
});

//write or create file
fs.writeFile('employee.txt', 'First Employe', (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('File is written')
    }
});

//append data in the new file

fs.appendFile('employee.txt', '\nAnother Employee',(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('File is updated')
    }
});


//deleting the file
// fs.unlink('employee.txt',(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log('File has been updated')
//     }
// });

console.log('This is another operation')
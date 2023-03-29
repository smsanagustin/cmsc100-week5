import mongoose from "mongoose"; // import mongo

await mongoose.connect('mongodb://127.0.0.1:27017/ICS'), // connects mongodb to app.js

{ useNewUrlParser: true, useUnifiedTopology: true }

// model of the data to be stored
const student = mongoose.model('students', {
    stdnum: String,
    fname: String,
    lname: String,
    age: Number
})// should be based on the structure in mongo db

// finds one data with name tracy
// let data = await student.findOne({ fname: "Tracy"});
// console.log(data)

// // finds more than one data
// let data2 = await student.find({ age: 17});
// console.log(data2)

// ADDING DATA
// creates student
// const newStudent = new student({
//     stdnum: 1283,
//     fname: "Sophia",
//     lname: "San Agustin",
//     age: 20,
// })

// // saves student
// let data = await newStudent.save();

// UPDATING A DATA
// let updateStudent = await student.findOne({ fname: "Sophia"}) // finds student to be updated then saves it to updateStudent variable
// updateStudent.age = "25"
// let data = await updateStudent.save();

// // UPDATE ONE DATA 
// let updateStudent = await student.updateOne(
//     { age: 17 },
//     { $set: {fname: "John"} } updates fname in a record
// );

// console.log(updateStudent)

// UPDATE MANY DATA
// let updateStudent = await student.updateMany(
//     { age: 17},
//     { $set: {fname: "John"} }
// )

// DELETE ONE DATA
// let data = await student.deleteOne({ stdnum: '1283' })

// DELETE MANY DATA
// let data = await student.deleteMany({ age: 17 });

// exits process
process.exit()
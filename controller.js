// all logic will be written here (functions to be used by routes)
// controller: controls what happens when a certain path is visited
// import mongoose library
import mongoose from "mongoose";

// connects to mongodb database named "ICS"
await mongoose.connect('mongodb://127.0.0.1:27017/ICS',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
)

// defines model of database
// 'students' is the name of the collection
const Student = mongoose.model('Student', {
    stdnum: String,
    fname: String,
    lname: String,
    age: Number
});

const homepage = (req, res) => {
    res.send('Welcome to the homepage'); // outputs this text
}

// finds students
const findStudents = async (req, res) => {
    // this is where we perform the query
    let data = await Student.find({}); // find students from the database then stores it to data variable
    res.send(data); // shows contents of data to the site
    console.log(data);
}

// finds a student entry
const findStudentsPost = async(req, res) => {
    let data = await Student.find({age: req.body.age});
    res.send(data);
    console.log(data);
}

// update existing student's data
const updateStudentData = async (req, res) => {
    // find data with fname from request
    let data = await Student.findOne({fname: req.body.fname});
    // update age of data
    data.age = req.body.age; // update age
    await data.save(); // save update

    res.send(data);
    console.log(data);
}

// create method for mongodb that adds a student
const addStudentPost = async (req, res) => {
    try{
        // creates a new student object using the Student mongoose model
        const student = new Student({
            stdnum: req.body.stdnum,
            fname: req.body.fname,
            lname: req.body.lname,
            age: req.body.age
        })
        // saves all data
        const result = await student.save();
        res.send(result);
    }
    catch(err){
        res.status(500).send(err.message); // internal server error
    }
}

export {homepage, findStudents, findStudentsPost, addStudentPost, updateStudentData};
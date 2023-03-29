// all logic will be written here
import mongoose from "mongoose";

// connects to mongodb database ICS
await mongoose.connect('mongodb://127.0.0.1:27017/ICS',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
)

// adds model of database
const Student = mongoose.model('students', {
    stdnum: String,
    fname: String,
    lname: String,
    age: Number
});



const homepage = (req, res) => {
    res.send('Welcome to the homepage'); // outputs this text
}

const findStudents = async (req, res) => {
    // this is where we perform the query
    res.send(await Student.find({})); // find students and shows it to the site
}

const findStudentsPost = async(req, res) => {
    res.send(await Student.find({age: req.body.age}));
}

// create method for mongodb
const addStudentPost = async (req, res) => {
    try{
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

export {homepage, findStudents, findStudentsPost, addStudentPost};
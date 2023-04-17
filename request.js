import needle from "needle";

const data = {
    age: 44
}

// adds data
const addData = {
    stdnum: '2021123455992',
    fname: "Uzziel",
    lname: "Abiday",
    age: 25
}

// send the following data as a request to /add-students route
needle.post('http://localhost:3000/add-students', {
    stdnum: addData.stdnum,
    fname: addData.fname,
    lname: addData.lname,
    age : addData.age
}, (req, res) => {
    console.log(res.body);
});

// updates data with a particular name
needle.post('http://localhost:3000/update-student-data',
    {
        // find student with this name
        fname: "Sophia",

        // update student's age with this age:
        age: 23
    },
    (req, res) => {
        console.log(res.body)
    }
)

// finds data with age data.age
needle.post('http://localhost:3000/find-students-post',{
    age: data.age
}, (req, res) => {
    console.log(res.body);
})
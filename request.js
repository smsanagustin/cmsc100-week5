import needle from "needle";

const data = {
    age: 44
}

// adds data
const addData = {
    stdnum: '20201234',
    fname: "Sophia",
    lname: "San Agustin",
    age: 25
}

needle.post('http://localhost:3000/add-students', {
    stdnum: addData.stdnum,
    fname: addData.fname,
    lname: addData.lname,
    age : addData.age
}, (req, res) => {
    console.log(res.body);
});

needle.post('http://localhost:3000/find-students-post',{
    age: data.age
}, (req, res) => {
    console.log(res.body);
})
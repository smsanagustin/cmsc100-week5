// router: where routes are defined
import {homepage, findStudents, findStudentsPost, addStudentPost, updateStudentData } from './controller.js';

// index file should return homepage
const router = (app) => {
    app.get('/', homepage); 
    app.get('/find-students', findStudents);
    app.get('/find-students-post', findStudentsPost); // read
    app.post('/add-students', addStudentPost); // create
    app.post('/update-student-data', updateStudentData); // update
    // delete
    // update
}

export default router; // lets other js files use router function by the name "router"
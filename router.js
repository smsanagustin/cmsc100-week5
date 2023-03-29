import {homepage, findStudents, findStudentsPost, addStudentPost } from './controller.js';

// index file should return homepage
const router = (app) => {
    app.get('/', homepage); 
    app.get('/find-students', findStudents);
    app.get('/find-students-post', findStudentsPost);
    app.post('/add-students', addStudentPost);
}

export default router; // lets other js files use router function by the name "router"
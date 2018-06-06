var express = require('express');
var router = express.Router();

var grades = require('../model/grade');

/* GET users listing. */
router.get('/', function(req, res, next) {

  res.send(grades);

  // res.json(grades);

  // res.write(JSON.stringify([1,2,3]));
  // res.write(JSON.stringify(grades));
  // res.end();
  // res.send('respond with a resource');
});



// http://localhost:3000/users/1
router.get('/:id', function (req, res, next) {

  console.log('get req.params: ', req.params);

  const grade = grades.find(g => g.id === parseInt(req.params.id));
  console.log('grade: ', grade);

  if(!grade)
    res.status(404).send(`The grade with the given id ${req.params.id} does not exist`)

  res.send(grade);

  // res.write(req.params);
  // res.end();
  // console.log('req.cookies: ', req.cookies);
  // res.render('users', { title: 'Users Page', msg: ''});
  
});

router.delete('/:id', (req,res,next)=>{
  console.log('delete req.params: ', req.params);

  const grade = grades.find(g => g.id === parseInt(req.params.id));
  console.log('grade: ', grade);

  if(!grade)
    res.status(404).send(`The grade with the given id ${req.params.id} does not exist`)

  const index = grades.indexOf(grade);
  console.log('index: ', index);
  grades.splice(index, 1);

  res.send(JSON.stringify(grade) + " deleted");

});


//http://localhost:3000/grades/
router.post('/',(req, res, next) => {

  console.log('POST req.body: ', req.body);

  req.assert('name', 'name is required').notEmpty(); 
  req.assert('course', 'course is required').notEmpty(); 
  req.assert('grade', 'grade is required').notEmpty(); 

  const errors = req.validationErrors(); 
  if (errors) {
    // console.log('errors: ', errors[0].msg);

    res.locals.errors = errors;
    res.render('error');
    // res.send('Validation error');
    // res.render('error', {errors: errors});
  } else{


    const grade = {
      id: grades.length + 1,
      name: req.body.name,
      course: req.body.course,
      grade: req.body.grade
    };

    grades.push(grade);
    res.send(grade);
  }
});

module.exports = router;

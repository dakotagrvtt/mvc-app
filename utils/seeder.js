const Datastore = require('nedb') // set up a temporary (in memory) database
const developerData = require('../data/developers.json') // read in data file
const courseData = require('../data/course.json') // read in data file
const studentData = require('../data/student.json') // read in student
const sectionData = require('../data/section.json') // read in section
const teacherData = require('../data/teacher.json') // read in teacher
// inject Express app to configure it - EVERYTHING in through argument list

module.exports = (app) => {
  console.log('START data seeder.')
  const db = {} // empty object to hold all collections

  db.developers = new Datastore() // new object property
  db.developers.loadDatabase() // call the loadDatabase method

  db.course = new Datastore()
  db.course.loadDatabase()

  db.student = new Datastore()
  db.student.loadDatabase()

  db.section = new Datastore()
  db.section.loadDatabase()
  
  db.teacher = new Datastore()
  db.teacher.loadDatabase()

  // insert the sample data into our datastore
  db.developers.insert(developerData)
  db.course.insert(courseData)
  db.student.insert(studentData)
  db.section.insert(sectionData)
  db.teacher.insert(teacherData)
  // initialize app.locals (these objects are available to the controllers)
  app.locals.developers = db.developers.find(developerData)
  app.locals.course = db.course.find(courseData)
  app.locals.student = db.student.find(studentData)
  app.locals.section = db.section.find(sectionData)
  app.locals.teacher = db.teacher.find(teacherData)

  console.log(`${app.locals.developers.query.length} developers seeded`)
  console.log(`${app.locals.course.query.length} courses seeded`)
  console.log(`${app.locals.student.query.length} students seeded`)
  console.log(`${app.locals.section.query.length} sections seeded`)
  console.log(`${app.locals.teacher.query.length} teacher seeded`)

  console.log('END Data Seeder. Sample data read and verified.')
}

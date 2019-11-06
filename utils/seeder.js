const Datastore = require('nedb') // set up a temporary (in memory) database
const developerData = require('../data/developers.json') // read in data file
const courseData = require('../data/course.json') // read in data file

// inject Express app to configure it - EVERYTHING in through argument list

module.exports = (app) => {
  console.log('START data seeder.')
  const db = {} // empty object to hold all collections

  db.developers = new Datastore() // new object property
  db.developers.loadDatabase() // call the loadDatabase method

  // insert the sample data into our datastore
  db.developers.insert(developerData)

  // initialize app.locals (these objects are available to the controllers)
  app.locals.developers = db.developers.find(developerData)
  app.locals.course = db.course.find(courseData)
  console.log(`${app.locals.developers.query.length} developers seeded`)
  console.log(`${app.locals.course.query.length} courses seeded`)


  console.log('END Data Seeder. Sample data read and verified.')
}

/**
*  Course controller
*  Handles requests related to course resources.
*
* @author Dakota Gravitt <s523439@nwmissouri.edu>
*
*/
const express = require('express')
const api = express.Router()
const find = require('lodash.find')
const notfoundstring = 'Could not find course with id='

// RESPOND WITH JSON DATA  --------------------------------------------

// GET all JSON
api.get('course/findall', (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  const data = req.app.locals.course.query
  res.send(JSON.stringify(data))
})

// GET one JSON by ID
api.get('course/findone/:id', (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  const id = parseInt(req.params.id)
  const data = req.app.locals.course.query
  const item = find(data, { _id: id })
  if (!item) { return res.end(notfoundstring + id) }
  res.send(JSON.stringify(item))
})

// RESPOND WITH VIEWS  --------------------------------------------

// GET to this controller base URI (the default)
api.get('course/', (req, res) => {
  res.render('course/index.ejs', {
    courses: req.app.locals.course.query
  })
})

// GET create
api.get('course/create', (req, res) => {
  res.render('course/create', {
    courses: req.app.locals.course.query,
    course: new Model()
  })
})

// GET /delete/:id
api.get('course/delete/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const data = req.app.locals.course.query
  const item = find(data, { _id: id })
  if (!item) { return res.end(notfoundstring + id) }
  res.render('course/delete', {
    course: item
  })
})

// GET /details/:id
api.get('course/details/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const data = req.app.locals.course.query
  const item = find(data, { _id: id })
  if (!item) { return res.end(notfoundstring + id) }
  res.render('course/details', {
    course: item
  })
})

// GET one
api.get('course/edit/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const data = req.app.locals.course.query
  const item = find(data, { _id: id })
  if (!item) { return res.end(notfoundstring + id) }
  res.render('course/edit', {
    course: item
  })
})

// RESPOND WITH DATA MODIFICATIONS  -------------------------------

// POST new
api.post('/save', (req, res) => {
  console.info(`Handling POST ${req}`)
  console.debug(JSON.stringify(req.body))
  const item = new Model()
  console.info(`NEW ID ${req.body._id}`)
  item._id = parseInt(req.body._id)
  item.school_num = parseInt(req.body.school_num)
  item.course_num = parseInt(req.body.course_num)
  item.name = req.body.name
  item.description = req.body.description
  item.credit_hours = parseInt(req.body.credit_hours)
  item.inSpring = req.body.inSpring
  item.inSummer = req.body.inSummer
  item.inFall = req.body.inFall
  
  res.send(`THIS FUNCTION WILL SAVE A NEW course ${JSON.stringify(item)}`)
})

// POST update with id
api.post('/save/:id', (req, res) => {
  console.info(`Handling SAVE request ${req}`)
  const id = parseInt(req.params.id)
  console.info(`Handling SAVING ID=${id}`)
  res.send(`THIS FUNCTION WILL SAVE CHANGES TO AN EXISTING course with id=${id}`)
})

// DELETE id (uses HTML5 form method POST)
api.post('/delete/:id', (req, res) => {
  console.info(`Handling DELETE request ${req}`)
  const id = parseInt(req.params.id)
  console.info(`Handling REMOVING ID=${id}`)
  res.send(`THIS FUNCTION WILL DELETE FOREVER THE EXISTING course with id=${id}`)
})

module.exports = api

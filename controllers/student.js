/**
*  Student controller
*  Handles requests related to developer resources.
*
* @author Logan Smith <s524601@nwmissouri.edu>
*
*/
const express = require('express')
const api = express.Router()
// const Model = require('../models/student.js')
const find = require('lodash.find')
const notfoundstring = 'Could not find developer with id='

// RESPOND WITH JSON DATA  --------------------------------------------

// GET all JSON
api.get('/findall', (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  const data = req.app.locals.student.query
  res.send(JSON.stringify(data))
})

// GET one JSON by ID
api.get('/findone/:id', (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  const id = parseInt(req.params.id)
  const data = req.app.locals.student.query
  const item = find(data, { _id: id })
  if (!item) { return res.end(notfoundstring + id) }
  res.send(JSON.stringify(item))
})

// GET to this controller base URI (the default)
api.get('student/', (req, res) => {
  res.render('student/index.ejs', {
    students: req.app.locals.student.query
  })
})

// GET create
api.get('student/create', (req, res) => {
  res.render('student/create', {
    students: req.app.locals.student.query,
    stuent: new Model()
  })
})

// GET /delete/:id
api.get('student/delete/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const data = req.app.locals.student.query
  const item = find(data, { _id: id })
  if (!item) { return res.end(notfoundstring + id) }
  res.render('student/delete', {
    student: item
  })
})

// GET /details/:id
api.get('student/details/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const data = req.app.locals.student.query
  const item = find(data, { _id: id })
  if (!item) { return res.end(notfoundstring + id) }
  res.render('student/details', {
    student: item
  })
})

// GET one
api.get('student/edit/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const data = req.app.locals.student.query
  const item = find(data, { _id: id })
  if (!item) { return res.end(notfoundstring + id) }
  res.render('student/edit', {
    student: item
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
  item.given = req.body.given
  item.family = req.body.family
  item.email = req.body.email
  item.gpa = req.body.gpa
  item.github = req.body.github
  item.section = req.body.section
  res.send(`THIS FUNCTION WILL SAVE A NEW student ${JSON.stringify(item)}`)
})

// POST update with id
api.post('/save/:id', (req, res) => {
  console.info(`Handling SAVE request ${req}`)
  const id = parseInt(req.params.id)
  console.info(`Handling SAVING ID=${id}`)
  res.send(`THIS FUNCTION WILL SAVE CHANGES TO AN EXISTING student with id=${id}`)
})

// DELETE id (uses HTML5 form method POST)
api.post('/delete/:id', (req, res) => {
  console.info(`Handling DELETE request ${req}`)
  const id = parseInt(req.params.id)
  console.info(`Handling REMOVING ID=${id}`)
  res.send(`THIS FUNCTION WILL DELETE FOREVER THE EXISTING student with id=${id}`)
})
module.exports = api

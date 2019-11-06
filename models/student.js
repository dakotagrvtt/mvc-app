/**
*  Student model
*
* @author Logan Smith <s524601@nwmissouri.edu>
* @requires mongoose
*
*/
const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({

  _id: {
    type: String,
    required: true
  },
  given: {
    type: String,
    minlength: 3,
    maxlength: 100,
    required: false,
    default: 'Given name'
  },
  family: {
    type: String,
    minlength: 3,
    maxlength: 100,
    required: false,
    default: 'Family name'
  },
  email: {
    type: String,
    minlength: 5,
    maxlength: 100,
    required: true,
    unique: true
  },
  gpa: {
      type: Number,
      required: true
  },
  github: {
    type: String,
    minlength: 5,
    maxlength: 100,
    required: true,
    unique: true
  },
  url: {
    type: String,
    minlength: 4,
    maxlength: 100,
    required: true,
    default: 'http://yourwebsite.com'
  },
  section: {
      type: Number,
      required: true
  }
})
module.exports = mongoose.model('Student', StudentSchema)
/**
*  Teacher model
*
* @author Matthew Sheahan <s534141@nwmissouri.edu>
* @requires mongoose
*
*/
const mongoose = require('mongoose')

const TeacherSchema = new mongoose.Schema({

  _id: {
    type: String,
    required: true
  },
  given: {
    type: String,
    minlength: 2,
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
  office: {
      type: String,
      required: true
  }
})
module.exports = mongoose.model('Teacher', TeacherSchema)
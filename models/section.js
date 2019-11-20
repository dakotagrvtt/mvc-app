/**
*  Developer model
*  Describes the characteristics of each attribute in a course resource.
*
* @author Justin Folkerts <s526607@nwmissouri.edu>
* @requires mongoose
*
*/
const mongoose = require('mongoose')

const SectionSchema = new mongoose.Schema({

    _id: {
        type: Number,
        required: true,
        unique:true
    },
    SectionNumber: {
        type: String,
        minlength: 2,
        maxlength: 2,
        required: true,
        unique: true,
        default: '00'
    },
    Days: {
        type: String,
        minlength: 1,
        max: 10,
        required: true,
        unique: false,
        default: 'M'
    },
    StartTime: {
        type: Number,
        minlength: 0,
        maxlength: 2400,
        required: true,
        default: 1100
    },
    RoomNumber: {
        type: String,
        minlength: 0,
        maxlength: 10,
        required: true,
        default: 'CH 1200'
    },
    InstructorID: {
        type: Number,
        required: true,
        unique:true
    },
    CourseID: {
        type: Number,
        required: true,
        unique:true
    }

})
module.exports = mongoose.model('Section', SectionSchema)

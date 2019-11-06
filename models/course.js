/**
*  Developer model
*  Describes the characteristics of each attribute in a course resource.
*
* @author Dakota Gravitt <s523439@nwmissouri.edu>
* @requires mongoose
*
*/
const mongoose = require('mongoose')

const CourseSchema = new mongoose.Schema({

    _id: {
        type: Number,
        required: true
    },
    course_num: {
        type: String,
        minlength: 5,
        maxlength: 5,
        required: true,
        unique: true,
        default: '00000'
    },
    sections: {
        type: Number,
        min: 0,
        max: 50,
        required: true,
        default: 1
    },
    title: {
        type: String,
        minlength: 3,
        maxlength: 75,
        required: true,
        default: 'Course Name'
    },
    description: {
        type: String,
        minlength: 4,
        maxlength: 150,
        required: true,
        default: 'Course description'
    },
    max_students: {
        type: Number,
        min: 0,
        max: 55,
        required: true,
        default: 10
    },
    allocated_students: {
        type: Number,
        min: 0,
        max: 55,
        required: true,
        default: 0
    }

})
module.exports = mongoose.model('Course', CourseSchema)

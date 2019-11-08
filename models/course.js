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
        required: true,
        unique: true
    },
    school_num: {
        type: String,
        minlength: 2,
        maxlength: 2,
        required: true,
        unique: true,
        default: '00000'
    },
    course_num: {
        type: String,
        minlength: 3,
        maxlength: 3,
        required: true,
        unique: true,
        default: '00000'
    },
    name: {
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
        required: false,
        default: 'Course description'
    },
    credit_hours: {
        type: Number,
        min: 1,
        max: 6,
        required: true,
        default: 3
    },
    inSpring: {
        type: Boolean,
        required: true,
        default: false
    },
    inSummer: {
        type: Boolean,
        required: true,
        default: false
    },
    inFall: {
        type: Boolean,
        required: true,
        default: false
    }

})
module.exports = mongoose.model('Course', CourseSchema)

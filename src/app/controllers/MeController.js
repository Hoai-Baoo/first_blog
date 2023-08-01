const Course = require('../models/Course');
const {multipleMongooseToObject, mongooseToObject} = require('../../util/mongoose')
class MeController {

    //[GET] /me/stored/courses
    storedCourses(req, res, next) {
        Promise.all([Course.find({}), Course.countDocumentsWithDeleted(),Course.countDocuments()])
            .then(([courses, allDocumentCount, documentCount]) => 
            res.render('me/stored-courses', {
                allDocumentCount,
                documentCount,
                courses: multipleMongooseToObject(courses),
            }))
            .catch(next);
    }    

    //[GET] /me/trash/courses
    trashCourses(req, res, next) {
        Course.findWithDeleted({deleted:true})
            .then(courses => res.render('me/trash-courses', {
                courses: multipleMongooseToObject(courses)
            }))
            .catch(next);
    }    
}

module.exports = new MeController();

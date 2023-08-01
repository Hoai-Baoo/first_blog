const Course = require('../models/Course');
const {multipleMongooseToObject, mongooseToObject} = require('../../util/mongoose')
class SiteController {
    //[GET] /news
    index(req, res, next) {

        Course.find({})
            .then(courses => {
                
                res.render('home', {
                    courses: multipleMongooseToObject(courses)
                })
            })
            .catch(next);

        // res.render('home');
    }

    // [GET] /news/:slug
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();

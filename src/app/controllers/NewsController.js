
class SiteController{

    //[GET] /
    index(req, res) {
        res.render('news')
    }

    // [GET] /search
    show(req, res) {
        res.send("NEWS DETAILS")
    }
}


module.exports = new SiteController


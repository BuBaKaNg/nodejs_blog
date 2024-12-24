// Tạo method
class NewsController {
    //[GET]/news
    index(req, res) {
        res.render('news');
    }
    //[GET]/news/:slug
    show(req, res) {
        res.send('New detail!!!');
    }
}

//Xuất ra ngoài 1 đối tượng
module.exports = new NewsController();

// const NewsController = require('./NewsController')

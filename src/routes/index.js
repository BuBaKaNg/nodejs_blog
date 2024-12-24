const newsRouter = require('./news.js');
const siteRouter = require('./site.js');

function route(app) {
    // Cấu hình nhiều tuyến đường khi chọc về news
    app.use('/news', newsRouter);
    app.use('/', siteRouter);
}

module.exports = route;

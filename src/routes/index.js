//chuyển hết code liên quan đến route từ index.js #chính đến thư mục route
const newsRoute = require('./news');
const usersRoute = require('./users');

function route(app) {
    //định nghĩa routes cho trang liên quan đến news
    app.use('/news', newsRoute);
    //định nghĩa routes cho trang liên quan đến users
    app.use('/users', usersRoute);
}

module.exports = route;

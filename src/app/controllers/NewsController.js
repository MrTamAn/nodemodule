const Course = require('../models/Course');

//quản lý các logic luồng của news

class NewsController {
    //function handler cho news
    async index(req, res) {
        try {
            const courses = await Course.find({});
            res.json(courses); // Trả về dữ liệu dưới dạng JSON
        } catch (err) {
            res.status(500).json({ error: 'Không thể lấy dữ liệu courses' });
        }
    }

    // res.render('news');

   async slug(req, res) {
        try {
            const courses = await Course.find({ name: 'this is a name' });
            res.json(courses); // Trả về dữ liệu dưới dạng JSON
        } catch (err) {
            res.status(500).json({ error: 'Không thể lấy dữ liệu courses' });
        };
    }
}

module.exports = new NewsController();

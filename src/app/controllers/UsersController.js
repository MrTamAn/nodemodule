class UsersController {
    index(req, res) {
        res.render('users');
    }
    post(req, res) {
        res.send('Post thành công');
    }
}

module.exports = new UsersController();

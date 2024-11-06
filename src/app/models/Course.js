// 3 việc: định nghĩa schema => tạo model dựa trên schema đã define => xuất file
const mongoose = require('mongoose');
const schema = mongoose.Schema;
// định nghĩa Schema cho Course
const courseSchema = new schema({
    name: { type: String },
    img: { type: String },
    des: { type: String },
});

//tạo model 
const Course = mongoose.model('Course', courseSchema);

module.exports = Course

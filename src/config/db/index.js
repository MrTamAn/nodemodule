
//kết nối DB bằng mongoose
const mongoose = require('mongoose');

async function connectDB() {
    try {
        await mongoose.connect('mongodb://localhost:27017/learnNodejs', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connect Succsefully');
    } catch (error) {
        console('Connect Falure!!!');
    }
}

module.exports = { connectDB };

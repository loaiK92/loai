const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const PageSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    images: [{ type: String }],
    content: {
        header: String,

    }
});

// not done yet!!!

module.exports = mongoose.model('Page', PageSchema);
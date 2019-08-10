const mongoose = require('mongoose');
const categorySchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    img: String
},
{collection : 'categories'}
);
const Category = mongoose.model('Category',categorySchema);

module.exports = Category;
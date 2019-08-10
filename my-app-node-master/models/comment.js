const mongoose = require('mongoose');
const commentsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    body:String,
    articleId:String
},
{collection : 'comments'}
);
const Comments = mongoose.model('Comments',commentsSchema);

module.exports = Comments;
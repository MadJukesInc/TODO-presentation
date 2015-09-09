var mongoose = require('mongoose');

module.exports = mongoose.model('todo', {
    title: String,
    completed: Boolean,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

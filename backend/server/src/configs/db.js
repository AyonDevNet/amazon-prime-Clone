const mongoose = require('mongoose');

const connect = () => {
    return mongoose.connect('mongodb+srv://amazon-prime-video:unit5@cluster0.j7yro.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
}

module.exports = connect
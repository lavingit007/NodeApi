const mongoose = require('mongoose');

mongoose.connect(
    'mongodb://localhost:27017/MyDB',
    { useNewUrlParser: true },
    (err) => {
        if (!err) {
            console.log('MongoDB connection Succeded');
        } else {
            console.log('err in BB Connection');
        }
    }
);

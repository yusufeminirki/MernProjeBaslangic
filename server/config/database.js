const mongoose = require('mongoose');


const database = () => {
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser : true,
        useUnifiedTopology: true
    }).then(()=>{
        console.log("mongoDB connected");
    }).catch(()=>{
        console.log(err);
    })
}

module.exports = database
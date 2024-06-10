const mongoose = require("mongoose");
const DB = "mongodb+srv://amansinghal904:aman2002@cluster0.3c7mdnm.mongodb.net/crudapp?retryWrites=true&w=majority&appName=Cluster0"


mongoose.connect(DB, {

    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("connection started")).catch((error) => console.log(error.message));
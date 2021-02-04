const mongoose = require("mongoose");
require("dotenv").config();


async function dbConnect() {
  const uri = "mongodb+srv://gaurav:test123@cluster0.6s6m6.mongodb.net/Business?retryWrites=true&w=majority"
  try {
    console.log('Trying to connect to Mongodb', uri)
    let connection = await mongoose.connect(uri,
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    if (connection) {
      console.log("MongoDB connectd successfully..");
      return connection;
    } else {
      throw {
        code: 503,
        message: "something went wrong.",
      };
    }
  } catch (error) {
    setTimeout(data => {
      dbConnect();
    }, 500)
    // throw error;
  }
}
dbConnect();

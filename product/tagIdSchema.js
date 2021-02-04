const mongoose = require("mongoose");


const tagSchema = mongoose.Schema({
    tag_id: {
        type: Number,
        required: true
    },
    id: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model("product", tagSchema);
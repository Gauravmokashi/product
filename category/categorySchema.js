const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema({
    id: {
        type: String,
        required: true,
        require: "id for category is required"
    },
    parentName: {
        type: String,
    },
    parentId: {
        type: String,
    },
}, { strict: false });
module.exports = mongoose.model("category", CategorySchema);
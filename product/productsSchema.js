const mongoose = require("mongoose");
const URLSlugs = require('mongoose-url-slugs');

const ProductSchema = mongoose.Schema({
    Name: {
        type: String,
        required: true,
        require: "Name is require is required."
    },
    Description:{
        type:String,
        required:true,
        require:"Product Description is required"
    },

    parentCategory: {
        type: String,
        required: true,
        require: "Parent catogory is required"
    },
    parentId: {
        type: String,
        required: true,
        require: "Parent Id is required"
    },
    myCategory: {
        type: String,
        required: true,
        require: "My Category is required"
    },
    price:{
        type:String,
        required:true,
        require:"product price is required"
    },
    tag_id: {
        type: Number,
        required: true
    }
}, { strict: false });

ProductSchema.plugin(URLSlugs('Name', { scope: ['Name'] }));
module.exports = mongoose.model("Product", ProductSchema);
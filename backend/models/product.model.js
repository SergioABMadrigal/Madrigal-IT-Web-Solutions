import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    description: {
        type: String,
        required: true
    },
    
},{
    timestamps: true //createedAt, updatedAt
});

const Product = mongoose.model('Product', productSchema);

export default Product;
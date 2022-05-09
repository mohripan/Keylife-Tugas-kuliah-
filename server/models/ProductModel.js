import {mongoose} from "mongoose";

const reviewSchema = mongoose.Schema({
    name: {
        type: String,
        required:true,
    },
    rating: {
        type: Number,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
});

const author = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    rating: {
        type: String,
        required: true,
    },
    headline: {
        type: String,
        required: true
    }
})

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required:true,
    },
    image: {
        type: String,
        required:true,
    },
    description: {
        type: String,
        required: true,
    },
    reviews: [reviewSchema],
    price: {
        type: Number,
        required: true,
        default: 0,
    },
    rating: {
        type: Number,
        required: true,
        default: 0
    },
    numReviews: {
        type: Number,
        required: true,
        default: 0
    },
    authors: [authorSchema]
},
{
    timestamps: true
})

const Products = mongoose.model("Product", productSchema);

export default Products;
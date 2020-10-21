import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
    name: {type: String, required: true},
    rating: {type: Number, required: true},
    comment: {type: String, required: true},
},{
    timestamps: true,
})
const productsSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    reviews: [reviewSchema],
    discription: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      defaul: 0,
    },
    numReviews: {
      type: String,
      required: true,
      defaul: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Products = mongoose.model("Products", productsSchema);

export default Products;

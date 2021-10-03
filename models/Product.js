import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    id: { type: String, required: true },
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    descriptions: { type: String, required: true },
    priceOld: { type: Number, required: false },
    price: { type: Number, required: true },
    productType: { type: String, required: false },
    inventory: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;

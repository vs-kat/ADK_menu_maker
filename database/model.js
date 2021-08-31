const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const modifier = new Schema({
  modiierName: { type: String, required: true },
  price: { type: Number },
});

const Modifier = mongoose.model("Modifier", modifier);

const item = new Schema({
  name: { type: String, requied: true },
  description: { type: String },
  available: { type: Boolean, requied: true },
  photo: { type: String },
  modifiers: [{ type: Schema.Types.ObjectId, ref: "Modifier" }],
  temperature: { type: String, enum: ["Hot", "Cold", "Frozen"] },
  taxCategory: { type: String, enum: ["Restaurant Food", "Beverage"] },
  dietaryAttributes: {
    type: String,
    enum: ["Vegetarian", "Gluten Free", "Shellfish", "Raw", "Spicy"],
  },
});

const Item = mongoose.model("Item", item);

const category = new Schema({
  name: { type: String, required: true },
  items: [{ type: Schema.Types.ObjectId, ref: "Item" }],
});

const Category = mongoose.model("Category", category);

const menu = new Schema({
  categories: [{ type: Schema.Types.ObjectId, ref: "Category" }],
  hours: [{ type: String, enum: ["Lunch", "Dinner", "Brunch"] }],
});

const Menu = mongoose.model("Menu", menu);

module.exports = { Modifier, Item, Category, Menu };

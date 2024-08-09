import mongoose, { Schema } from "mongoose";

const schema = new Schema({
    BrandName: String,
    modelName: String,
    price: Number,
    ram: Number,
    Storage: Number,
    battery: Number,
});

export const Mobiles = mongoose.model('mobile',schema);



//Collection creation
//mongoose.mode(collectionname,schema)

//model.find() => is used to get all data
//const data = model(req.body) => checks the structure...
//data.save => saves in the database
import mongoose, { Schema } from "mongoose";

const schema = new Schema({
    name: String,
    email: String,
    password: String,
});

export const Res = mongoose.model('Res', schema, 'users')
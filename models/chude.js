import mongoose from "mongoose";
const { Schema } = mongoose;

const chudeSchema = new Schema({
  TenChuDe: { type: String, required: true }, // String is shorthand for {type: String}
   
});

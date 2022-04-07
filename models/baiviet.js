import mongoose from "mongoose";
const { Schema } = mongoose;

const BaiVietSchema = new Schema({
  ChuDe: { type: Schema.Types.ObjectId,ref:'ChuDe', required: true }, 
  NguoiDung: { type: Schema.Types.ObjectId,ref:'NguoiDung', required: true },
  TieuDe: { type: String,required: true},
  TomTat: { type: String, required: true },
  NoiDung: { type: String, required: true },
  NgayDang: { type: Date, required: true, default:Date.now },
  LuotXem: { type: Number, required: true, default:'0' },
  KiemDuyet: { type: Number, required: true, default:'0' },
   
});

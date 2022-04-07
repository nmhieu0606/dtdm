import mongoose from "mongoose";
const { Schema } = mongoose;

const TaiKhoanSchema = new Schema({
  HoVaTen: { type: String, required: true }, 
  Email: { type: String, },
  HinhAnh: { type: String,},
  TenDangNhap: { type: String, required: true },
  MatKhau: { type: String, required: true },
  QuyenHan: { type: String, default:'user' },
  KichHoat: { type: Number, default:'1' },
   
});

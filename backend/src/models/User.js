const mongoose = require('mongoose');

const GeoSchema = new mongoose.Schema({
  lat: { type: String, default: '' },
  lng: { type: String, default: '' },
});

const AddressSchema = new mongoose.Schema({
  street: { type: String, default: '' },
  city: { type: String, default: '' },
  zipcode: { type: String, default: '' },
  geo: { type: GeoSchema, default: () => ({}) },
});

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true},
    email: { type: String, required: true, lowercase: true, unique: true },
    phone: { type: String, required: true},
    company: { type: String, default: '' },
    role: { type: String, default: '' },
    status: { type: String, enum: ['active', 'inactive'], default: 'active' },
    avatar: { type: String, default: '' },
    address: { type: AddressSchema, default: () => ({}) },
    joinDate: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

UserSchema.index({ email: 1 }, { unique: true });

module.exports = mongoose.model('User', UserSchema);

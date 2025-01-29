const mongoose = require('mongoose');

// Schema definition
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  mobileNo: { type: String, required: true, match: /^[0-9]{10}$/ },
  email: { type: String, required: true, match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
  address: {
    street: { type: String },
    city: { type: String },
    state: { type: String },
    country: { type: String },
  },
  loginId: { type: String, required: true, minlength: 8, match: /^[a-zA-Z0-9]+$/ },
  password: {
    type: String,
    required: true,
    minlength: 6,
    match: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
  },
  creationTime: { type: Date, default: Date.now },
  lastUpdated: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', userSchema);

const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    mobile: { type: Number, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    isAdmin: { type: Boolean, default: false }
  },
  { timestamps: true },
//   { collection: 'contact-data' }
);

const Contact = mongoose.model('Contact', ContactSchema);
module.exports=Contact

const mongoose = require('mongoose')

const BookingSchema = new mongoose.Schema(
    {
        fullName: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        mobileNumber: { type: Number, required: true },
        phoneNumber: { type: Number, required: true },
        street: { type: String, required: true },
        town: { type: String, required: true },
        city: { type: String, required: true },
        // Sate: { type: String, required: true },
        pincode: { type: Number, required: true },
        dealerName: { type: String, required: true },
        dealerCity: { type: String, required: true },
        dealerState: { type: String, required: true },
        selectedCar: { type: String, required: false },
        selectedVarient: { type: String, required: false },
        selectedColor: { type: String, required: false },

    },
    { collection: 'Booking-data' }
);


const Booking = mongoose.model('BookingData', BookingSchema)

module.exports = Booking
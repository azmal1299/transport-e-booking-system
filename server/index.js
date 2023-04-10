const express = require('express');
const app = express();
const cors = require('cors');
require("dotenv").config({ path: "./.env" });

const mongoose = require('mongoose')

const uri = process.env.ATLAS_URI;

const User = require('./models/userModel.js')
const Contact = require('./models/contactModel.js')
const BookingModel = require('./models/bookingmodel.js');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

app.use(cors());
app.use(express.json());

// app.use(require("./routes/record"));

// const dbo = require("./db/conn");


//mongo db connection
mongoose.connect(uri)
    .then(() => {
        console.log("mongoose database connection established successfully");
    })
    .catch((err) => {
        console.error("Error connecting to mongoose database:", err);
    });


//registration and logins
app.post('/api/register', async (req, res) => {
    console.log(req.body)
    try {
        const newPassword = await bcrypt.hash(req.body.password, 10)
        await User.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: newPassword,
        })
        res.json({ status: 'ok' })
    } catch (err) {
        console.log(err);
        res.json({ status: 'error', error: 'duplicate email' })
    }

})

app.post('/api/login', async (req, res) => {

    const user = await User.findOne(
        {
            email: req.body.email,
        })

    if (!user) {
        return { status: 'error', error: 'Invalid Login' }
    }
    const isPasswordValid = await bcrypt.compare(
        req.body.password,
        user.password,
    )
    if (isPasswordValid) {
        const token = jwt.sign({
            firstname: user.firstname,
            email: user.email,
        },
            'secret26432600'
        )
        return res.json({ status: 'ok', user: token })

    } else {
        return res.json({ status: 'error', user: false })
    }

})


//contact page
app.post('/api/contact', async (req, res) => {
    console.log(req.body)
    try {
        await Contact.create({
            name: req.body.name,
            mobile: req.body.mobile,
            email: req.body.email,
            message: req.body.message,
        })
        res.json({ status: 'ok' })
    } catch (err) {
        console.log(err);
        res.json({ status: 'error', error: 'duplicate email' })
    }
})

// app.get("/api/contacts", async (req, res) => {
//     try {
//       const contacts = await Contact.find();
//       res.json(contacts);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: "Internal Server Error" });
//     }
    
//   });
  app.get('/api/contacts', async (req, res) => {
    try {
      const contacts = await Contact.find();
      res.json(contacts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

//bookings 
app.post("/api/booking/insert", async (req, res) => {
    try {
      const bookingData = req.body;
  
      const booking = new BookingModel(bookingData);
  
      await booking.save();
      res.send("Data inserted successfully");
    } catch (err) {
      console.error(err);
      res.status(500).send("Error inserting data");
    }
  });


  app.delete("/api/booking/:id", async (req, res) => {
    const id = req.params.id;
    
    try {
      const deletedBooking = await Booking.findByIdAndDelete(id);
  
      if (!deletedBooking) {
        return res.status(404).send("Booking not found");
      }
  
      res.send("Booking deleted successfully");
    } catch (err) {
      console.error(err);
      res.status(500).send("Error deleting booking");
    }
  });
// DELETE request to delete an item by ID
// router.delete('api/booking/:id', async (req, res) => {
//     try {
//       const item = await Item.findById(req.params.id);
//       await item.remove();
//       res.json({ success: true });
//     } catch (err) {
//       res.status(404).json({ success: false });
//     }
//   });

app.get("/api/bookings/", async (req, res) => {
    try {
      const bookings = await BookingModel.find();
      res.json(bookings);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
    
  });



// app.get("/api/booking/:id", async (req, res) => {
//     Booking.findById(req.params.id,(error, data)=>{
//         if(error){
//             return next(error)
//         }else{
//             res.json(data)
//         }
//     })
// })


// app.get("/api/booking/read", async (req, res) => {
//     try {
//         const result = await BookingModel.find();
//         console.log(result);
//         res.send(result);
//     } catch (error) {
//         console.error(error);
//         res.status(500).send("Server error");
//     }
// });

//my method
// })


// app.post('/api/booking', async (req, res) => {
//     // res.send('hello world')
//     console.log(req.body)
//     try {
//         await Booking.create({
//             fullName: req.body.fullName,
//             email: req.body.email,
//             mobileNumber: req.body.mobileNumber,
//             phoneNumber: req.body.phoneNumber,
//             street: req.body.street,
//             town: req.body.town,
//             city: req.body.city,
//             // Sate: req.body.Sate,
//             pincode: req.body.pincode,
//             dealerName: req.body.dealerName,
//             dealerCity: req.body.dealerCity,
//             dealerState: req.body.dealerState,
//             agree:req.body.agree,
//         })
//         res.json({ status: 'ok' })
//     } catch (error) {
//         console.log(error);
//         res.json({ status: 'error', error: 'duplicate email' })
//     }
// })

//  app.delete('/api/booking/:id', async (req, res) => {
//     try {
//         const booking = await Booking.findByIdAndDelete(req.params.id)
//         if (!booking) {
//             return res.json({ status: 'error', error: 'booking not found' })
//         }
//         res.json({ status: 'ok' })
//     } catch (error) {
//         console.log(error);
//         res.json({ status: 'error', error: 'server error' })
//     }
// })


// app.delete('/api/booking/:id', async (req, res) => {
//     try {
//       const id = req.params.id;
//       const deletedBooking = await Booking.findByIdAndDelete(id);
//       if (!deletedBooking) {
//         return res.status(404).json({ message: 'Booking not found' });
//       }
//       res.json({ message: 'Booking deleted successfully' });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Unable to delete booking' });
//     }
//   });

//{//codedamn

// app.get('/api/home', async (req, res) => {
// 	const token = req.headers['x-access-token']

// 	try {
// 		const decoded = jwt.verify(token, 'secret26432600')
// 		const email = decoded.email
// 		const user = await User.findOne({ email: email })

// 		return res.json({ status: 'ok', quote: user.quote })
// 	} catch (error) {
// 		console.log(error)
// 		res.json({ status: 'error', error: 'invalid token' })
// 	}
// })
//}//





//listening the port
app.listen(1337, () => {
    // dbo.connectToServer (function (err) {
    // if (err) console.error(err);
    // });
    console.log(`server is running on: 1337`);
});
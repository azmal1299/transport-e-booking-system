import React, { useState, useEffect } from "react";
import "./cart.scss";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faCarSide,  faHomeAlt, faMessage,  faPowerOff, faUser } from "@fortawesome/free-solid-svg-icons";
import Axios from "axios";
import { useParams } from "react-router-dom";




function Cart() {

  const [booking, setBooking] = useState();
  // const { id } = useParams();

  // useEffect(() => {
  //   fetch(`http://localhost:1337/api/bookings`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setBooking(data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  useEffect(() => {
    fetch(`http://localhost:1337/api/bookings`)
      .then((res) => res.json())
      .then((data) => {
        setBooking(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);



  // const handleDelete = async (id) => {
  //   try {
  //     const response = await Axios.delete(`http://localhost:1337/api/booking/${id}`);
  //     console.log(response);
  //     swal('Booking deleted successfully');
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // const handleDelete = async (id) => {
  //   try {
  //     const response = await Axios.delete(`http://localhost:1337/api/bookings/${id}`);
  //     console.log(response);
  //     // filter out the deleted booking from the current bookings
  //     setBooking(booking.filter((booked) => booked._id !== id));
  //     swal('Booking deleted successfully');
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:1337/api/bookings/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Failed to delete booking');
      }
      swal('Booking deleted successfully');
      // Update state to remove the deleted booking
      setBooking((bookings) => bookings.filter((booking) => booking._id !== id));
    } catch (error) {
      console.error(error);
    }
  };
  //   }, [])

  //   const getBooking = async () => {
  //   const { data } = await axios.get(`${process.env.API_URL}/booking`)
  //   console.log('data: ', data);
  //   setBooking(data);
  // }

  const renderList = () => {
    // const booking = localStorage.getItem('booking');
    if (!booking || !Array.isArray(booking)) return <tr><td> No Record Found </td></tr>;
    // const parsedBooking = JSON.parse(booking);
    // if (!parsedBooking || !Array.isArray(parsedBooking)) return <tr><td> No Record Found </td></tr>;
    return booking.map((booked, index) => (
      <tr key={booked._id}>
        <td>{booked.fullName}</td>
        <td>{booked.email}</td>
        <td>{booked.mobileNumber}</td>
        <td>{booked.selectedCar}</td>
        <td>{booked.selectedVarient}</td>
        <td>{booked.selectedColor}</td>
        <td>{booked.price}</td>
        <td>
          <button onClick={() => handleEdit(booked, index)} className="edit">Edit</button>
          <button onClick={() => handleDelete(booked._id)} className="delete">Delete</button>
          </td>
      </tr>
    ))
  }


  return (
    <>
      <div className="cart">
      <div className='cont'>
                <nav>
                    <input type="checkbox" id="check" />
                    <label htmlFor="check" className="checkbtn">
                        <i className="fa fa-bars"></i>
                    </label>
                    <label className="navbar">car<span> -buy</span></label>
                    <ul>
                        <li><Link to="./home"><FontAwesomeIcon icon={faHomeAlt} />home</Link></li>
                        <li><Link to="./carDetails"><FontAwesomeIcon icon={faCarSide} />cars</Link></li>
                        <li><Link to="./contactDetails"><FontAwesomeIcon icon={faMessage} />contact</Link></li>
                        <li><Link to="./userDetails"><FontAwesomeIcon icon={faUser} />about</Link></li>
                        <li><Link to="./"><FontAwesomeIcon icon={faPowerOff} />logout</Link></li>
                    </ul>
                </nav>
            </div>
        <div className="card">
          <h4 className="head">booking details</h4>
          <table>
            <thead>
              <tr>
                <th>fullName</th>
                <th>email</th>
                <th>mobileNumber</th>
                <th>selectedCar</th>
                <th>selectedVarient</th>
                <th>selectedColor</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* <tr > */}
                {/* <td> */}
                  {renderList()}
                {/* </td> */}
              {/* </tr> */}
            </tbody>
          </table>

        </div>
      </div>
    </>
  )
}

export default Cart;
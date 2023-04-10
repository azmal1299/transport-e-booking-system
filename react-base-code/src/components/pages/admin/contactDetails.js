import React, { useState, useEffect } from "react";
import "./cart.scss";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarAlt, faContactCard, faHandshakeAlt, faHomeAlt, faPeopleArrows, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import Axios from "axios";
import { useParams } from "react-router-dom";




function ContactDetails() {

  const [contact, setContact] = useState();

  useEffect(() => {
    fetch('http://localhost:1337/api/contacts', {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        setContact(data);
      })
      .catch(error => {
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
      setContact((contact) => contact.filter((contact) => messages._id !== id));
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
    if (!contact || !Array.isArray(contact)) return <tr><td> No Record Found </td></tr>;
    // const parsedBooking = JSON.parse(booking);
    // if (!parsedBooking || !Array.isArray(parsedBooking)) return <tr><td> No Record Found </td></tr>;
    return contact.map((messages, index) => (
      <tr key={messages._id}>
        <td>{messages.name}</td>
        <td>{messages.email}</td>
        <td>{messages.mobile}</td>
        <td>{messages.message}</td>
        {/* <td>{messages.timestamps}</td> */}
        <td>
          <button onClick={() => handleEdit(messages, index)} className="edit">Edit</button>
          <button onClick={() => handleDelete(messages._id)} className="delete">Delete</button>
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
                        <li><Link to="./cars"><FontAwesomeIcon icon={faCarAlt} />cars</Link></li>
                        <li><Link to="./contact"><FontAwesomeIcon icon={faContactCard} />contact</Link></li>
                        <li><Link to="./about"><FontAwesomeIcon icon={faHandshakeAlt} />about</Link></li>
                        <li><Link to="./"><FontAwesomeIcon icon={faPowerOff} />logout</Link></li>
                    </ul>
                </nav>
            </div>
        <div className="card">
          <h4 className="head">message details</h4>
          <table>
            <thead>
              <tr>
                <th>name</th>
                <th>email</th>
                <th>mobileNumber</th>
                <th>message</th>
                <th>timestamps</th>
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

export default ContactDetails
;
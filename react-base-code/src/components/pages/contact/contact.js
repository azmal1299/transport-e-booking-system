// import { name } from 'file-loader';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './contact.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarAlt, faContactCard, faHandshakeAlt, faHomeAlt, faPeopleArrows, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import history from '../../../helpers/history';
import swal from 'sweetalert';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [message, setMessage] = useState('');


    async function handleSubmit(event) {
        event.preventDefault()

        const response = await fetch('http://localhost:1337/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                mobile,
                message,
            }),
        }).then(res => {
            console.log(res);
            swal('message sent successfully');
            setName('');
            setEmail('');
            setMobile('');
            setMessage('');
            // history.push('/cars');
        }).catch(err => {
            console.log(err);
            swal('please check your inputs')
        });

        //     const data = await response.json()

        //     if (data.status === 'ok' ){
        //       // console.log(err)
        //       swal('message sent successfully');
        //     //   history.push('/')
        //     }else (data.status ==='error'); {
        //       swal('email is already exist/ check the given inputs' )
        //     };
    }


    //my method
    // const response = await fetch('http://localhost:1337/api/contact', {
    //     method:'POST',
    //     headers: {
    //         'Content-Type':'application/json',
    //     },
    //     body:JSON.stringify({
    //         name,
    //         mobile,
    //         email,
    //         message,
    //     }),
    // });

    // const data = await response.json()

    // if(data.status === 'ok' ) {
    //     swal('message sent Successfull');
    //     history.push('/cars');
    // } else {
    //     swal('Please Check email');
    // }
    // event.preventDefault();
    // console.log(`Submitting form with name: ${name}, email: ${email}, message: ${message}`);
    // You can add your own logic here to submit the form data to your server



    return (
        <div className='con'>
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
                        {/* <li><Link to="./home1">home1</Link></li> */}
                        {/* <li><Link to="./cars1">car1</Link></li>  */}
                    </ul>
                </nav>
            </div>
            <div className='contact'>
                {/* <Link to={"./Home"} className='ho-p'>home-page</Link> */}
                {/* <Link to="/" className="logout">log out</Link> */}

                <h1>contact-us</h1>
                <div className='mobile'>
                    <ul><h6>contact with mobile</h6>
                        <li>mobile: 9876543210</li>
                        <li>tel: 152-653-798</li></ul>
                </div>
                <div className='form'>
                    <h6>contact with message</h6>
                    <form onSubmit={handleSubmit}>
                        <div className='min'>
                            <label>Name:</label>
                            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder='enter your name' />
                        </div>
                        <div className='min'>
                            <label>Email:</label>
                            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='enter your email' required />
                        </div>

                        <div className='min'>
                            <label>Mobile:</label>
                            <input type="number" id="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder='enter your mobile' />
                        </div>

                        <div className='min'>
                            <label>Message:</label>
                            <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder='enter your message' />
                        </div>
                        <button type="submit" className='submit-msg' >Submit</button>
                    </form>
                </div>
                <div className='email'>
                    <ul>
                        <h6>contact with email</h6>
                        <li>email 1: aslalal@gmail.com</li>
                        <li>email 2: abilaa@gmail.com</li>
                    </ul>
                </div>
            </div>

        </div >
    );
};
export default Contact;
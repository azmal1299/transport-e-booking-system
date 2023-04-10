import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import '../SignIn/index.scss';
import history from '../../../helpers/history';
import swal from 'sweetalert';


function Register(){


    const [firstname,setFirstname]=useState('')
    const [lastname,setLastname]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function handleSubmit (event) {
        event.preventDefault()

        const response = await fetch('http://localhost:1337/api/register', {
            method:'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body:JSON.stringify({
                firstname,
                lastname,
                email,
                password,
            }),
        });

        const data = await response.json()
        
      if (data.status === 'ok' ){
        swal('registration successfull')
        history.push('/')
      }else  {
        swal('email is already exist/ check the given inputs' )
      };
    }


return(
   
    <div className="form">
        <h1 className="heading">Register</h1>
        <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        value={firstname}
        placeholder="firstname"
        onChange={(e) =>setFirstname(e.target.value)} 
        />      
        <input 
        type="text" 
        placeholder="lastname"
        value={lastname}
        onChange={(e) =>setLastname(e.target.value)}
        />      
        <input 
        type="email"
        value={email} 
        placeholder="email"
        onChange={(e) =>setEmail(e.target.value)}
        />
        <input
        type="password" 
        placeholder="password"
        value={password}
        onChange={(e) =>setPassword(e.target.value)}
        />
        <button type='submit' className="submit-btn">Register</button>
        </form>
        <Link to={"/"} className="link">already have account? log in here</Link>
        </div>
    )
}
export default Register;
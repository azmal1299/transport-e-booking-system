import React, { useState } from "react";
// import Home1 from "../../pages/home1";
import './home1.scss'

function Home1() {

    const [state, setState] = useState({
        firstName: '',
        lastName:'',
        email: '',
        mobile:'',
        phone: '',
        street:'',
        town:'',
        city:'',
        State:'',
        country:'',
        pincode:'',
        activeIndex: '',
        isEdit: false,
      })
    
    
    
      const handleChange = (e, id) => {
        setState(prevState => {
          return {
            ...prevState,
            [id]: e
          }
        })
      }
    
      const handleSubmit = () => {
        const { firstName,lastName, email,mobile, phone,street,town,city,State,country,pincode } = state;
    
        const data = {
          firstName,lastName, email,mobile, phone,street,town,city,State,country,pincode, 
        }
    
        const employees = localStorage.getItem('employees');
        let employeeList = [];
        if (employees) {
          employeeList = [...JSON.parse(employees), data]
        } else {
          employeeList = [data]
        }
    
        localStorage.setItem('employees', JSON.stringify(employeeList))
        setState({
          firstName: '',
          lastName:'',
          email: '',
          mobile:'',
          phone: '',
          street:'',
          town:'',
          city:'',
          State:'',
          country:'',
          pincode:'',
        })
      }
    
    
      const handleDelete = (emp) => {
        const employees = localStorage.getItem('employees');
        if (employees) {
          const formatedData = JSON.parse(employees);
          const index = formatedData.findIndex(f => f.firstName === emp.firstName)
          formatedData.splice(index, 1);
          localStorage.setItem('employees', JSON.stringify(formatedData))
        }
      }
    
      const handleEdit = (emp, index) => {
        setState(prevState => {
          return {
            ...prevState,
            activeIndex: index,
            firstName: emp.firstName,
            lastName:emp.lastName,
            email: emp.email,
            mobile:emp.mobile,
            phone: emp.phone,
            street:emp.street,
            town:emp.town,
            city:emp.city,
            Sate:emp.State,
            country:emp.country,
            pincode:emp.pincode,
            isEdit: true,
          }
        })
      }
    
    
      const handleUpdate = () => {
        const { firstName,lastName, email,mobile, phone,street,town,city,State,country,pincode, activeIndex } = state;
        const employees = localStorage.getItem('employees');
        const formatedData = JSON.parse(employees);
        formatedData[activeIndex].firstName = firstName;
        formatedData[activeIndex].lastName = lastName;
        formatedData[activeIndex].email = email;
        formatedData[activeIndex].mobile = mobile;
        formatedData[activeIndex].phone = phone;
        formatedData[activeIndex].street = street;
        formatedData[activeIndex].town =town;
        formatedData[activeIndex].city = city;
        formatedData[activeIndex].State= State;
        formatedData[activeIndex].country = country;
        formatedData[activeIndex].pincode = pincode;
        localStorage.setItem('employees', JSON.stringify(formatedData))
        setState({
          firstName: '',
          lastName:'',
          email: '',
          mobile:'',
          phone: '',
          street:'',
          town:'',
          city:'',
          State:'',
          country:'',
          pincode:'',
          isEdit: false
        })
      }
    
      const renderList = () => {
        const employees = localStorage.getItem('employees');
        if (!employees) return <tr><td> No Record Found </td></tr>;
        return JSON.parse(employees).map((emp, index) => (
          <tr>
            <td>{ emp.firstName }</td>
            <td>{ emp.lastName }</td>
            <td>{ emp.email }</td>
            <td>{ emp.mobile }</td>
            <td>{ emp.phone}</td>
            <td>{ emp.street }</td>
            <td>{ emp.town }</td>
            <td>{ emp.city }</td>
            <td>{ emp.pincode }</td>
            <td>{ emp.State }</td>
            <td>{ emp.country }</td>
            <td>
              <button onClick={ () => handleEdit(emp, index) }>Edit</button>
              <button onClick={ () => handleDelete(emp) }>Delete</button>
            </td>
          </tr>
        ))
      }
    
      const { firstName,lastName, email,mobile, phone, street, town,city,State,country,pincode, isEdit } = state;

    return (
        <div className="page-container">

            <div className="form-container">
                <p>CRUD-Operation</p>
                <div className="form-field"><input type='text' placeholder="first Name" name="firstName" value={ firstName } onChange={ (e) => handleChange(e.target.value, 'firstName') }/></div>
                <div className="form-field"><input type='text' placeholder="lastname name" name="lastName" value={ lastName } onChange={ (e) => handleChange(e.target.value, 'lastName') }/></div>
                <div className="form-field"><input type='email' placeholder="email" name="email" value={ email } onChange={ (e) => handleChange(e.target.value, 'email') }/></div>
                <div className="form-field"><input type='number' placeholder="mobile" name="mobile" value={ mobile } onChange={ (e) => handleChange(e.target.value, 'mobile') }/></div>
                <div className="form-field"><input type='number' placeholder="phone" name="phone" value={ phone } onChange={ (e) => handleChange(e.target.value, 'phone') }/></div>
                <div className="form-field"><input type='text' placeholder="street" name="street" value={ street } onChange={ (e) => handleChange(e.target.value, 'street') }/></div>
                <div className="form-field"><input type='text' placeholder="town"name="town" value={ town } onChange={ (e) => handleChange(e.target.value, 'town') }/></div>
                <div className="form-field"><input type='text' placeholder="city" name="city" value={ city } onChange={ (e) => handleChange(e.target.value, 'city') }/></div>
                <div className="form-field"><input type='text' placeholder="State" name="State" value={ State } onChange={ (e) => handleChange(e.target.value, 'State') }/></div>
                <div className="form-field"><input type='text' placeholder="country" name="country" value={ country } onChange={ (e) => handleChange(e.target.value, 'country') }/></div>
                <div className="form-field"><input type='number' placeholder="pincode" name="pincode" value={ pincode } onChange={ (e) => handleChange(e.target.value, 'pincode') }/></div>
                {isEdit? <button onClick={ () => handleUpdate() }>Update</button> : <button onClick={ () => handleSubmit() }>submit</button>}
            </div>
            <table className="table">
                <thead>
                  <tr>
                    <th>first name</th>
                    <th>last name</th>
                    <th>email</th>
                    <th>mobile</th>
                    <th>phone</th>
                    <th>street</th>
                    <th>town</th>
                    <th>city</th>
                    <th>state</th>
                    <th>country</th>
                    <th>pincode</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <tr><td>hello</td></tr>

                    <tr><td>hello</td></tr>
                    
                    <tr><td>hello</td></tr> */}
                    {renderList()}
                </tbody>
            </table>
        </div>
    )


}
export default Home1;

import React, { useState, useSyncExternalStore } from 'react';
import { Button, Form } from 'react-bootstrap';
import auth from '../../Firebase/Firebase.init';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Signup.css';
import Google from '../Google/Google';


const Signup = () => {

    const [name, setName]= useState('');
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [confirmPassword, setConfirmPassword]= useState('');
    const[passError, setPassError] =useState('');
    const [updateProfile, updating, UpdateError] = useUpdateProfile(auth);
    
    
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const navigate = useNavigate();

    const handlesubmit=async (event)=>{
      event.preventDefault();
      if(password!==confirmPassword){
        alert("password doesn't match") ;
      }
       
      else{
      await createUserWithEmailAndPassword(email, password)
      await updateProfile({ displayName: name });
          alert('Updated profile');

          navigate('/verfyemail');
      }

    }
    return (
        <div className='container'>
                
                <div className='form-margin d-flex justify-content-center align-items-center'>
                <Form onSubmit={handlesubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <input className='input-space' onChange={(e) => setName(e.target.value)} type="name" placeholder="Your Name"  />
                    
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <input className='input-space' onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" required />
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <input className='input-space' onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <input className='input-space' onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder="Confirm password" />
                </Form.Group>
                <p style={{color:"red"}}>{passError}</p>
               
                <Button variant="primary" type="submit">
                    Signup
                </Button>
                
                </Form>
            </div>
            <div className='d-flex justify-content-center align-items-center mt-3'><p>Already have an account? <Link to='/login'>Please login</Link></p></div>
            <div className='d-flex align-items-center'>
                <div style={{height: '1px'}} className='bg-primary w-50' ></div>
                <p className='d-flex justify-content-center align-items-center px-2 mt-3'>OR</p>
                <div style={{height: '1px'}} className='bg-primary w-50'></div>
            </div>
            
            <div className='d-flex justify-content-center align-items-center mt-3 me-4'><Google></Google></div>

            
        </div>
    );
};

export default Signup;
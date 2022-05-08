import React, { useState } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import './Login.css'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Google from '../Google/Google';

const Login = () => {
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [loginError, setLoginError]= useState('');
    
    
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error] = useSignInWithEmailAndPassword(auth);

        

      const navigate =useNavigate();
      let errorFound;
      
      if (loading) {
        return <Spinner animation='border' variant='primary'></Spinner>
          
      }

      if(user){
        navigate('/home');
      }

      if(error){
        errorFound = <p className='text-danger'>Error: {error?.message}</p>
      }
    const handleLoginSubmit =(e)=>{
          e.preventDefault();
          signInWithEmailAndPassword(email, password);
          
    
}

    
    return (
        <div className='container'>
            <div className='form-margin d-flex justify-content-center align-items-center'>
                <Form onSubmit={handleLoginSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <input className='input-space' onChange={(e) => setEmail(e.target.value)} type="email" name='email' placeholder="Enter email" required />
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <input className='input-space' onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" required/>
                </Form.Group>
                <p>{errorFound}</p>
                
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <p style={{color:'red'}}>{loginError}</p>
                
                </Form>
                
                
            </div>
            <div className='d-flex justify-content-center align-items-center mt-2 ms-5'>
            
            <p>
                Don't have an account? <Link to='/signup'>Please Signup</Link></p>
                
            </div>
            <div className='d-flex justify-content-center align-items-center me-4'>
            <p>Forget password? <Link to='/reset'>reset here</Link></p>
            </div>
            <div className='d-flex align-items-center'>
                <div style={{height: '1px'}} className='bg-primary w-50' ></div>
                <p className='d-flex justify-content-center align-items-center px-2 mt-3'>OR</p>
                <div style={{height: '1px'}} className='bg-primary w-50'></div>
            </div>
           
            <div className='d-flex justify-content-center align-items-center me-4'></div>
            <div className='d-flex justify-content-center align-items-center mt-3 me-4'></div>
            <div className='d-flex justify-content-center align-items-center mt-3 me-4'><Google></Google></div>


        </div>
    );
};

export default Login;
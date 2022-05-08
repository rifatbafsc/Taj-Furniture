import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import googleLogo from '../../../src/google-logo-png.png';


const Google = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    if(user){
        navigate('/home');
    }


    return (
        <div>
            <div><Button onClick={() => signInWithGoogle()} variant="primary" type="submit"><img style={{width:'30px'}}  alt="" src={googleLogo}/>
                    Sign in with Google
                </Button></div>
        </div>
    );
};

export default Google;
import React, { useState } from 'react';
import { useSendEmailVerification } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router';
import auth from '../../Firebase/Firebase.init';

const VerifyEmail = () => {
    const [email, setEmail] = useState('');

    const [sendEmailVerification, sending, error2] = useSendEmailVerification(auth);
    const navigate = useNavigate();

    if (sending) {
        return <p>Sending...</p>;
      }
      

    return (
        <div>

            <button
        onClick={async () => {
          await sendEmailVerification();
          alert('Sent email');
          navigate('/login')
        }}
      >
        Verify email
      </button>
        </div>
    );
};

export default VerifyEmail;
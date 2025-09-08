'use client';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

export default function VerifyPage({ email }) {

    const router = useRouter();
 console.log("Email prop in VerifyPage:", email);
  const [otp, setOtp] = React.useState('');
  const [emailValue, setEmailValue] = React.useState(email || 'azez@gmail.com');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Verifying OTP:', { otp, email });

    try { 
          await fetch('http://localhost:8000/api/auth/verify', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body:JSON.stringify({email: emailValue, otp_code: otp})
    });

    router.push('/login');
    // Add your OTP verification logic here
    }
    catch (error) {
        console.error('Error during OTP verification:', error);
    }
  }

  return (
    <div>
      <h3>Verify OTP</h3>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={emailValue} onChange={(e) => setEmailValue(e.target.value)} />
        <br />
        <input type="text" placeholder="OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
        <br />
        <button type="submit">Verify</button>
      </form>
    </div>
  )
}

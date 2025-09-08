
'use client';
import { useRouter } from 'next/navigation';
import React from 'react'

export default function RegisterPage() {
    /*
    {
    "name":"Omar Expert",
    "email":"omar.ex@gmail.com",
    "password":"12345678",
    "password_confirmation":"12345678",
    "type":"expert",
    "bio":"Experienced Gamer",
    "industry":"gaming"
    }
    */
   const router = useRouter();
  
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
    const [passwordConfirmation, setPasswordConfirmation] = React.useState('');
    const [type, setType] = React.useState('expert');
    const [bio, setBio] = React.useState('');
    const [industry, setIndustry] = React.useState('gaming');
    const [sessionPrice, setSessionPrice] = React.useState(1);



    const handleRegister = async (e) => {
        e.preventDefault();
        console.log('Registering user:', {name, email, password, passwordConfirmation, type, bio, industry});
        const dataBody =  {name, email, password, password_confirmation: passwordConfirmation, type, bio, industry, session_price: sessionPrice};
        try {
            
            const response = await fetch('http://localhost:8000/api/auth/register',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body:JSON.stringify(dataBody)
            }

            );
            router.push('/verify', { state: { email } });

     
        } catch (error) {
            console.error('Error during registration:', error);
        }
        
    }

  return (
   <div>
     <h3>Register Page</h3>
     <form>
        <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} /><br/>
        <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} /><br/>
        <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} /><br/>
        <input type="password" placeholder="Password Confirmation" value={passwordConfirmation} onChange={(e)=>setPasswordConfirmation(e.target.value)} /><br/>
        <select value={type} onChange={(e)=>setType(e.target.value)}>
            <option value="expert">Expert</option>
            <option value="customer">Customer</option>
        </select><br/>
        <input type="text" placeholder="Bio" value={bio} onChange={(e)=>setBio(e.target.value)} /><br/>
        <input type="text" placeholder="Industry" value={industry} onChange={(e)=>setIndustry(e.target.value)} /><br/>
        <input type="number" placeholder="Session Price" value={sessionPrice} onChange={(e)=>setSessionPrice(e.target.value)} /><br/>
        <button 
        onClick={handleRegister}
        type="submit">Register</button>
     </form>
   </div>
  )
}

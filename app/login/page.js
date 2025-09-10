'use client';
import { useRouter } from 'next/navigation';
import React from 'react'
import myAxios from '../lib/my-axios';

export default function login() {
    
    const router = useRouter();
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log('Logging in user:', { username, password });
        // Add your login logic here

        try {
            const response = await myAxios.post('/auth/login', { email:username, password });
            console.log('Login response:', response);
            const data = response.data;
            // localStorage.setItem('expertLoginData', JSON.stringify(data));

            router.push('/experts');

        } catch (error) {
            console.error('Error during login:', error);
        }
        
        }

  return (
    <div>
        <h3>login</h3>

        <form>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <br />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <br />
            <button type="submit" onClick={handleLogin}>Login</button>
        </form>
    </div>
  )
}

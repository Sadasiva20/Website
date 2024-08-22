
import React, { useState } from 'react';
import axios from 'axios';

export default function Userlogin() {
  
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [userData, setUserData] = useState(null);
  const [loginData, setLoginData] = useState(null);
  const [error, setError] = useState(null);

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Create user
      const userResponse = await axios.post('/create_user', { name, password, email }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setUserData(userResponse.data);
      
      // Log in user
      const loginResponse = await axios.post('/login_user', { name, password }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setLoginData(loginResponse.data);

      console.log('User created:', userResponse.data);
      console.log('User logged in:', loginResponse.data);

    } catch (error) {
      setError('Error during user creation or login');
      console.error(error);
    }
  };

  // Handle login button click
  const handleLogin = async () => {
    try {
      const loginResponse = await axios.post('/login_user', { name, password }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setLoginData(loginResponse.data);

      console.log('User logged in:', loginResponse.data);

    } catch (error) {
      setError('Error during login');
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <button type="submit">Register</button>
        <button type="button" onClick={handleLogin}>Login</button>
      </form>

      {error && <div style={{ color: 'red' }}>{error}</div>}

      {userData && (
        <div>
          <h3>User Created:</h3>
          <p>{JSON.stringify(userData)}</p>
        </div>
      )}

      {loginData && (
        <div>
          <h3>User Logged In:</h3>
          <p>{JSON.stringify(loginData)}</p>
        </div>
      )}
    </div>
  );
}

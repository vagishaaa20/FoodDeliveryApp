import React from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


const UserRegister=() => {
  const navigate= useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fullName = e.target.fullName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const response= await axios.post('https://localhost:5000/api/auth/register', {
      fullName,
      email,
      password
    });

    console.log(response.data);

    navigate("/");
  };


  return (
    <div className="auth-page">
      <div className="card">
        <h2>Create account — User</h2>
        <p className="sub">A quick, minimal sign up for users.</p>
        <form className="auth-form">
          <label>
            Full name
            <input type="text" placeholder="John Doe" />
          </label>
          <label>
            Email
            <input type="email" placeholder="you@example.com" />
          </label>
          <label>
            Password
            <input type="password" placeholder="••••••••" />
          </label>
          <div className="actions">
            <button className="btn" type="button">Create account</button>
          </div>
        </form>
      </div>
    </div>
  )
}

import React from 'react'

export default function UserLogin() {
  return (
    <div className="auth-page">
      <div className="card">
        <h2>Sign in — User</h2>
        <p className="sub">Welcome back — enter your credentials.</p>
        <form className="auth-form">
          <label>
            Email
            <input type="email" placeholder="you@example.com" />
          </label>
          <label>
            Password
            <input type="password" placeholder="••••••••" />
          </label>
          <div className="actions">
            <button className="btn" type="button">Sign in</button>
          </div>
        </form>
      </div>
    </div>
  )
}

import React from 'react'

export default function FoodPartnerLogin() {
  return (
    <div className="auth-page">
      <div className="card">
        <h2>Sign in — Food Partner</h2>
        <p className="sub">Access your partner dashboard.</p>
        <form className="auth-form">
          <label>
            Email
            <input type="email" placeholder="owner@example.com" />
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

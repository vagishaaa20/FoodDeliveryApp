import React from 'react'

export default function FoodPartnerRegister() {
  return (
    <div className="auth-page">
      <div className="card">
        <h2>Create account — Food Partner</h2>
        <p className="sub">Create a partner account to manage your listings.</p>
        <form className="auth-form">
          <label>
            Business name
            <input type="text" placeholder="Acme Tiffin Services" />
          </label>
          <label>
            Contact email
            <input type="email" placeholder="owner@example.com" />
          </label>
          <label>
            License / Reg. no.
            <input type="text" placeholder="ABC-12345" />
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

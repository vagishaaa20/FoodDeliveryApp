import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <div className="route-main">
      <div style={{display:'flex', alignItems:'center', justifyContent:'center', minHeight: '60vh'}}>
        <div style={{display:'grid', gridTemplateColumns: '1fr 1fr', gap:20, width: '100%', maxWidth:760}}>
          <Link to="/user/register" style={{textDecoration:'none'}}>
            <div className="card">
              <h2>Register as Normal User</h2>
              <p className="sub">Quick sign up to order food, save favourites, and track deliveries.</p>
              <div style={{marginTop:12}} className="muted">Create an account as a customer.</div>
            </div>
          </Link>

          <Link to="/foodpartner/register" style={{textDecoration:'none'}}>
            <div className="card">
              <h2>Register as Food Partner</h2>
              <p className="sub">Create a partner account to list your kitchen or restaurant.</p>
              <div style={{marginTop:12}} className="muted">Manage menus, orders and availability.</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

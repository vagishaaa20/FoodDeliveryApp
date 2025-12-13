import React, { useState } from 'react'

export default function Auth(){
  const [role, setRole] = useState('user') // 'user' | 'partner'
  const [mode, setMode] = useState('register') // 'register' | 'login'

  const isRegister = mode === 'register'

  return (
    <div style={{display:'flex', alignItems:'center', justifyContent:'center', minHeight:'72vh'}}>
      <div className="card" style={{maxWidth:520, width:'100%'}}>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:12}}>
          <div style={{display:'flex', gap:8}}>
            <button
              onClick={() => setRole('user')}
              className="btn"
              style={{background: role === 'user' ? 'var(--accent)' : 'transparent', color: role === 'user' ? '#fff' : 'var(--text)', padding: '8px 10px', fontWeight:600, border: '1px solid var(--border)'}}
            >User</button>

            <button
              onClick={() => setRole('partner')}
              className="btn"
              style={{background: role === 'partner' ? 'var(--accent)' : 'transparent', color: role === 'partner' ? '#fff' : 'var(--text)', padding: '8px 10px', fontWeight:600, border: '1px solid var(--border)'}}
            >Food Partner</button>
          </div>

          <div style={{display:'flex', gap:8}}>
            <button onClick={() => setMode('register')} style={{background: isRegister ? 'var(--accent)' : 'transparent', color: isRegister ? '#fff' : 'var(--text)', padding:'8px 10px', border: '1px solid var(--border)'}}>Register</button>
            <button onClick={() => setMode('login')} style={{background: !isRegister ? 'var(--accent)' : 'transparent', color: !isRegister ? '#fff' : 'var(--text)', padding:'8px 10px', border: '1px solid var(--border)'}}>Sign in</button>
          </div>
        </div>

        <h2 style={{marginBottom:6}}>{isRegister ? 'Create account' : 'Sign in'} — {role === 'user' ? 'User' : 'Food Partner'}</h2>
        <p className="sub">{isRegister ? 'Fill the details to get started.' : 'Enter your credentials to continue.'}</p>

        <form className="auth-form" onSubmit={(e)=>e.preventDefault()}>
          {isRegister && role === 'partner' && (
            <label>
              Business name
              <input type="text" placeholder="Acme Tiffin Services" />
            </label>
          )}

          {isRegister && role === 'user' && (
            <label>
              Full name
              <input type="text" placeholder="John Doe" />
            </label>
          )}

          <label>
            Email
            <input type="email" placeholder={role === 'user' ? 'you@example.com' : 'owner@example.com'} />
          </label>

          <label>
            Password
            <input type="password" placeholder="••••••••" />
          </label>

          {isRegister && role === 'partner' && (
            <label>
              License / Reg. no.
              <input type="text" placeholder="ABC-12345" />
            </label>
          )}

          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:8}}>
            <div className="muted">{isRegister ? 'By creating an account you agree to our terms.' : ''}</div>
            <div className="actions">
              <button className="btn" type="button">{isRegister ? 'Create account' : 'Sign in'}</button>
            </div>
          </div>

          <div style={{marginTop:14, textAlign:'center'}}>
            {isRegister ? (
              <span className="muted">Already have an account? <button style={{background:'transparent', border:'none', color:'var(--accent)', cursor:'pointer'}} onClick={()=>setMode('login')}>Sign in</button></span>
            ) : (
              <span className="muted">Don't have an account? <button style={{background:'transparent', border:'none', color:'var(--accent)', cursor:'pointer'}} onClick={()=>setMode('register')}>Register</button></span>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

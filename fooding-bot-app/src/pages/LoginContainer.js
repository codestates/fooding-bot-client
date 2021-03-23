import React from "react";
import fooding from '../images/fooding-logo.png';

function Login() {

  return (
    <div className='login-screen'>
      <div className='login-title'>Fooding-Bot</div>
      <img className='login-logo' src={fooding} />

      <label className='login-to-your-account'>Login to your Account</label>
      <div className='login-input-wrap'> 
          <div className='login-input-box'>
          <div><input classNametype='email' placeholder='이메일' /></div>
          <div><input type='password' placeholder='비밀번호' /></div>
          </div>
          
          <div className='login-switch-wrap'>
          <label className="login-switch-button"> <input type="checkbox"/> <span className="onoff-switch"></span> </label>
          <label className='auto-login'>자동 로그인</label>
            </div>

          <button className='login-only-button' type='submit'>로그인</button>

        </div>

        
      
      
      <div className='login-btn-wrap'>
      <button className='login-buttons social'>소셜 로그인</button>
      <button className='login-buttons '>비회원 로그인</button>
      <button className='login-buttons' type='submt'>회원가입</button>
      </div>

    <div className='team-name'>by R.F.D</div>

    </div>
  )
}

export default Login;
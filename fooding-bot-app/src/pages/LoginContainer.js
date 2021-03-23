import React from "react";
<<<<<<< HEAD
import fooding from '../images/fooding-icon.png';

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
=======

function Login() {
  return (
    <div className='app-background'>
      <div className='login-title'>Fooding-Bot</div>
      <div classNmae='logo'>logo</div>

      <div className='login-input-wrap'>Login to your Account
          <input className='input' type='email' placehodler='이메일'></input>
          <input className='input' type='password' placehodler='비밀번호'></input>
        </div>

        
      <div>자동 로그인 </div>
      <button className='btn login'>로그인</button>

      <div className='btn-wrap'>
      <button className='btn'>소셜 로그인</button>
      <button className='btn'>비회원 로그인</button>
      <button className='btn' type='submt'>회원가입</button>
      </div>

    <div className='maker'>by R.F.D</div>
>>>>>>> c1de29ab2544649f2ba99dbbd4a5eba336890b29

    </div>
  )
}

export default Login;
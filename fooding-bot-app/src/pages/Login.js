import React from "react";

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

    </div>
  )
}

export default Login;
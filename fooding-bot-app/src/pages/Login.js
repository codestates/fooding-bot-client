import React from "react";
//import {Link, withRouter} from "react-router-dom";
//import axios from "axios";



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
// axios.default.withCredentials =true;

// class Login extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       email: '',
//       password:'',
//       errorMessage:''
//     };
//     this.handleInputValue = this.handleInputValue.bind(this);
//   }

//   handleInputValue = (key) => (e) => {
//     this.setState({[key]: e.target.value});
//   };
//   handleLogin = () => {
//     const {handleResonpseSuccess} = this.props;
//     const { email, password } = this.state;

//     if(!email || !password) {
//       this.setState({
//         errorMessage: '이메일과 비밀번호를 입력하세요'
//       });
//       return;
//     }
//     else {
//       this.setState({
//         errorMessage:''
//       });
//     }
//     return axios
//     .post("https://fdbot.ml/login", {
//       email:email,
//       password:password,
//     })
//     .then(handleResonpseSuccess)
//     .catch((err) => {
//       //모달 사용
//     });
//   };

//   render() {
//     return (
//       <div>
//         <center>
//           <h1>Fooding-Bot</h1>
//           <h1>LOGO</h1>
//           <form onSubmit={(e) => e.preventDefault()}>
//             <div>
//               <p>Login to your Account</p>
//               <span>이메일</span>
//               <input type='email' onChange={this.handleInputValue("email")}></input>
//             </div>
//             <div>
//               <span>비밀번호</span>
//               <input type='password' onChange={this.handleInputValue("password")}></input>
//             </div>
//             <button className='btn btn_login' type='submit' onClick={this.handleLogin}>로그인</button>
//             {this.state.errorMessage ? <div className='alert_box'>{this.state.errorMessage}</div> : ''}

//             <button className='btn btn_login' type='submit' onClick={this.handleLogin}>소셜 로그인</button>
//             {this.state.errorMessage ? <div className='alert_box'>{this.state.errorMessage}</div> : ''}

//             <button className='btn btn_login' type='submit' onClick={this.handleLogin}>비회원 로그인</button>
//             {this.state.errorMessage ? <div className='alert_box'>{this.state.errorMessage}</div> : ''}

//             <div>
//               <Link to='/signup'>회원가입</Link>
//             </div>

//             <div>by R.F.D</div>

//           </form>
//         </center>
//       </div> 
//     );
//   }
// }

// export default withRouter(Login);
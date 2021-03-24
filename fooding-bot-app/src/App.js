import React from "react";
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import LoginContainer from './pages/LoginContainer';
import SignupContainer from './pages/SignupContainer';
import MainPageContainer from './pages/MainPageContainer';
import ProfileContainer from './pages/ProfileContainer'
import MyFoodingContainer from './pages/MyFoodingContainer';
import PasswordContainer from './pages/PasswordContainer';
import MypageContainer from './pages/MypageContainer.js';
import OthersFoodingScoreContainer from "./pages/OthersFoodingScoreContainer";
import FoodingScoreContainer from "./pages/FoodingScoreContainer";

class App extends React.Component {

    render() {
        return (
            <Router>
                <Link to='/' className='top-nav'>Login</Link>
                <Link to='/Main' className='top-nav'>Main</Link>
                <Link to='/Signup' className='top-nav'>Signup</Link>
                <Link to='/FoodingScore' className='top-nav'>추천음식점수매기기</Link>
                <Link to='/OthersFoodingScore' className='top-nav'>추천음식평균점수</Link>
                <Link to='/Profile' className='top-nav'>프로필</Link>
                <Link to='/MyFooding' className='top-nav'>내 푸딩 관리</Link>
                <Link to='/Password' className='top-nav'>패스워드 변경</Link>
                <Link to='/Mypage' className='top-nav'>마이 페이지</Link>
                <div className='app-background'>
                    <Switch>
                        {/* 로그인 */}
                        <Route exact={true} path="/">
                            <LoginContainer />
                        </Route>

                        {/* 메인 페이지  */}
                        <Route path="/Main">
                            <MainPageContainer />
                        </Route>

                        {/* 회원가입 */}
                        <Route path="/Signup">
                            <SignupContainer />
                        </Route>

                        {/* 푸딩 점수 매기기 */}
                        <Route path="/FoodingScore">
                            <FoodingScoreContainer />
                        </Route>

                        {/* 추천음식 평균 점수 보기 */}
                        <Route path="/OthersFoodingScore">
                            <OthersFoodingScoreContainer />
                        </Route>

                        {/* 내 푸딩 관리 */}
                        <Route path="/MyFooding">
                            <MyFoodingContainer />
                        </Route>

                        {/* 프로필 편집 */}
                        <Route path="/Profile">
                            <ProfileContainer />
                        </Route>

                        {/* 패스워드 */}
                        <Route path="/Password">
                            <PasswordContainer />
                        </Route>

                        {/* 마이페이지 */}
                        <Route path="/Mypage">
                            <MypageContainer />
                        </Route>

                    </Switch>
                </div>
            </Router>
            // <div>
            //     <div className='app-background'>
            //         {/* <LoginContainer /> */}
            //         {/* <SignupContainer /> */}
            //         {/* <MainPageContainer /> */}
            //         {/* <ProfileContainer /> */}
            //         {/* <MyFoodingContainer /> */}
            //         {/* <PasswordContainer /> */}
            //         {/* <MypageContainer /> */}
            //         {/* <OthersFoodingScoreContainer /> */}
            //         {/* <FoodingScoreContainer /> */}
            //     </div>
            // </div>
        )
    }
}

export default App;
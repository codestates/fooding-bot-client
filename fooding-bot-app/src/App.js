import React from "react";
import './App.css';
// import LoginContainer from './pages/LoginContainer';
// import SignupContainer from './pages/SignupContainer';
// import ProfileContainer from './pages/ProfileContainer'
// import MyFoodingContainer from './pages/MyFoodingContainer';
// import PasswordContainer from './pages/PasswordContainer';
// import MypageContainer from './pages/MypageContainer.js';
// import OthersFoodingScoreContainer from "./pages/OthersFoodingScoreContainer";
import MainPageContainer from './pages/MainPageContainer';


class App extends React.Component {

    render() {
        return (
            <div>
                <div className='app-background'>
                    <MainPageContainer />
                    {/* <LoginContainer /> */}
                    {/* <SignupContainer /> */}
                    {/* <ProfileContainer /> */}
                    {/* <MyFoodingContainer /> */}
                    {/* <PasswordContainer /> */}
                    {/* <MypageContainer /> */}
                    {/* <OthersFoodingScoreContainer /> */}
                </div>
            </div>
        )
    }
}

export default App;
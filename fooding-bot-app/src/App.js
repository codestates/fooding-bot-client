import React from "react";
import './App.css';
// import LoginContainer from './pages/LoginContainer';
// import SignupContainer from './pages/SignupContainer';
import MainPageContainer from './pages/MainPageContainer';
// import ProfileContainer from './pages/ProfileContainer'
// import MyFoodingContainer from './pages/MyFoodingContainer';
// import PasswordContainer from './pages/PasswordContainer';
// import MypageContainer from './pages/MypageContainer.js';
// import OthersFoodingScoreContainer from "./pages/OthersFoodingScoreContainer";
// import FoodingScoreContainer from "./pages/FoodingScoreContainer";

class App extends React.Component {

    render() {
        return (
            <div>
                <div className='app-background'>
                    {/* <LoginContainer /> */}
                    {/* <SignupContainer /> */}
                    <MainPageContainer />
                    {/* <ProfileContainer /> */}
                    {/* <MyFoodingContainer /> */}
                    {/* <PasswordContainer /> */}
                    {/* <MypageContainer /> */}
                    {/* <OthersFoodingScoreContainer /> */}
                    {/* <FoodingScoreContainer /> */}
                </div>
            </div>
        )
    }
}

export default App;
import React from "react";
import './App.css';
import SignupContainer from './pages/SignupContainer';
// import ProfileContainer from './pages/ProfileContainer'
// import MyFoodingContainer from './pages/MyFoodingContainer';

class App extends React.Component {

    render() {
        return (
            <div>
                <div className='app-background'>
                    <SignupContainer />
                    {/* <ProfileContainer /> */}
                    {/* <MyFoodingContainer /> */}
                </div>
            </div>
        )
    }
}

export default App;
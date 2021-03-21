import React from "react";
import './App.css';
// import SignupContainer from './pages/SignupContainer';
import ProfileContainer from './pages/ProfileContainer'

class App extends React.Component {

    render() {
        return (
            <div>
                <div className='app-background'>
                    {/* <SignupContainer /> */}
                    <ProfileContainer />
                </div>
            </div>
        )
    }
}

export default App;
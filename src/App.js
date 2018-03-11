import React, {Component} from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './App.css';
import Loginscreen from './auth/Loginscreen'
import Appscreen from "./app/Appscreen";
import AuthenticationController from "./app/controller/AuthenticationController";
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginPage: [],
            appPage: []
        }
    }


    componentWillMount() {
        AuthenticationController.isAuthenticated().then(
            (authenticated) => {
                if (!authenticated) {
                    const loginPage = [];
                    loginPage.push(<Loginscreen key={0} parentContext={this}/>);
                    this.setState({
                        loginPage: loginPage
                    })
                } else {
                    const appPage = [];
                    appPage.push(<Appscreen key={0} parentContext={this}/>);
                    this.setState({
                        appPage: appPage
                    })
                }
            }
        );
    }

    render() {
        return (
            <div className="App">
                {this.state.loginPage}
                {this.state.appPage}
            </div>
        );
    }
}

export default App;

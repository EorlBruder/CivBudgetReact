import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Appscreen from '../app/Appscreen'
import AuthenticationController from "../app/controller/AuthenticationController";
import LocalStorageConstants from "../constants/LocalStorageConstants";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    static errorOccured() {
        alert("Username does not exist");
    }

    handleClick() {
        const self = this;
        AuthenticationController.login(self.state.username, self.state.password).then(
            (loginResponse) => {
                if (loginResponse === undefined) {
                    Login.errorOccured();
                } else if (loginResponse.status === 200) {
                    localStorage.setItem(LocalStorageConstants.JWT_TOKEN, loginResponse.data);
                    const appPage = [];
                    appPage.push(<Appscreen appContext={self.props.appContext}/>);
                    self.props.appContext.setState({loginPage: [], appPage: appPage});
                } else if (loginResponse.status === 203) {
                    alert("username password do not match")
                } else {
                    Login.errorOccured()
                }
            }
        );
    }

    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <div>
                        <AppBar
                            title="Login"
                        />
                        <TextField
                            hintText="Enter your Username"
                            floatingLabelText="Username"
                            onChange={(event, newValue) => this.setState({username: newValue})}
                        />
                        <br/>
                        <TextField
                            type="password"
                            hintText="Enter your Password"
                            floatingLabelText="Password"
                            onChange={(event, newValue) => this.setState({password: newValue})}
                        />
                        <br/>
                        <RaisedButton label="Submit" primary={true} style={style}
                                      onClick={(event) => this.handleClick(event)}/>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }


}

const style = {
    margin: 15,
};
export default Login;

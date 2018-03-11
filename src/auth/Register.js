import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Login from './Login';
import AuthenticationController from "../app/controller/AuthenticationController";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleClick() {
        const self = this;
        AuthenticationController.register(self.state.username, self.state.password).then(
            (success) => {
                if (success) {
                    console.log("Successfully registered");
                    const loginscreen = [];
                    loginscreen.push(<Login parentContext={self.props.parentContext}
                                            appContext={self.props.appContext}/>);
                    const loginmessage = "Not Registered yet.Go to registration";
                    self.props.parentContext.setState({
                        loginscreen: loginscreen,
                        loginmessage: loginmessage,
                        buttonLabel: "Register",
                        isLogin: true
                    });
                } else {
                    console.log("Oh No!")
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
                            title="Register"
                        />
                        <br/>
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

export default Register;

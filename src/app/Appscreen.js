import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RateContainer from "./rates/view/RateContainer";

class Appscreen extends Component {
    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <div>
                        <AppBar
                            title="CivBudget"
                        />
                        <br/>
                        <RateContainer/>
                    </div>
                </MuiThemeProvider>
            </div>
        )
    }
}

export default Appscreen

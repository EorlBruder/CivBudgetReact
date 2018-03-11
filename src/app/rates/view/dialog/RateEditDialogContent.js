import React, {Component} from 'react';
import TextField from "material-ui/TextField/TextField"
import {DatePicker, DropDownMenu, MenuItem} from "material-ui";
import CycleFormatter from "../../../format/CycleFormatter";
import Cycle from "../../../model/Cycle";

class RateEditDialogContent extends Component {

    onChange(event, newValue) {
        console.log(event);
        const rate = this.props.parentContext.state.rate;
        if (event === null) {
            rate.startDate = newValue;
        } else {
            switch (event.target.name) {
                case "NameField":
                    console.log(newValue);
                    rate.name = newValue;
                    break;
                case "ValueField":
                    console.log(newValue);
                    rate.value = newValue;
                    break;
                default:
                    console.log(Cycle.values[newValue]);
                    rate.cycle = Cycle.values[newValue];
                    break;
            }
        }
        this.props.parentContext.setState({
            rate: rate
        });
    }

    render() {
        return <div>
            <p>Name:</p>
            <TextField name={"NameField"} value={this.props.parentContext.state.rate.name} hintText={"Name"}
                       fullWidth={true}
                       onChange={this.onChange.bind(this)}/>
            <p>Value:</p>
            <TextField name={"ValueField"} type={"number"} step={"0.01"}
                       value={this.props.parentContext.state.rate.value}
                       hintText={"Value"}
                       fullWidth={true} onChange={this.onChange.bind(this)}/>
            <p>Cycle:</p>
            <DropDownMenu name={"CycleField"} value={this.props.parentContext.state.rate.cycle}
                          onChange={this.onChange.bind(this)}>
                {Cycle.values.map((value, i) =>
                    <MenuItem key={i} value={value} label={CycleFormatter.format(value)}>
                        {CycleFormatter.format(value)}
                    </MenuItem>
                )}
            </DropDownMenu>
            <p>Start Date:</p>
            <DatePicker name={"StartDateField"} value={this.props.parentContext.state.rate.startDate}
                        fullWidth={true} onChange={this.onChange.bind(this)}/>
            <p>Daily Value:</p>
            <TextField name={"DailyValueField"} defaultValue={"Will be calculated!"} fullWidth={true} disabled={true}/>
        </div>
    }
}

export default RateEditDialogContent

import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog/Dialog'
import FlatButton from 'material-ui/FlatButton/FlatButton'
import RateEditDialogContent from "./RateEditDialogContent";
import Rate from "../../../model/Rate";
import RatesController from "../../../controller/RatesController";

class RateEditDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            actions: [<FlatButton label='Save' onClick={this.save.bind(this)}/>,
                <FlatButton label='Close' onClick={this.closeDialog.bind(this)}/>],
            rate: props.rate,
            edit: props.edit,
            title: "Create Rate",
            open: props.open
        };
        if (this.state.edit) {
            this.state.title = "Edit Rate";
        } else {
            this.state.rate = new Rate(-1, "", 0.0, "DAILY", new Date(), 0.0);
        }
    }

    save() {
        new RatesController().update(this.state.rate).then(
            () => {
                this.props.parentContext.load();
            }
        );
        this.closeDialog();

    }

    closeDialog() {
        this.props.parentContext.setState({
            editDialog: []
        });
        this.setState({
            open: false
        })
    }

    onRequestClose() {
        this.closeDialog();
    }

    render() {
        return (
            <Dialog title={this.state.title} open={this.state.open}
                    onRequestClose={this.onRequestClose.bind(this)} actions={this.state.actions} modal={true}
                    autoScrollBodyContent={true}>
                <RateEditDialogContent parentContext={this}/>
            </Dialog>
        )
    }
}

export default RateEditDialog

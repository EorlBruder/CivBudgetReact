import React, {Component} from 'react';
import FlatButton from 'material-ui/FlatButton'

class RateButtonBar extends Component {

    addRate() {
        this.props.parentContext.showAddDialog()
    }

    editRate() {
        this.props.parentContext.showEditDialog()
    }

    deleteRate() {
        this.props.parentContext.deleteRate()
    }

    render() {
        return (
            <div>
                <FlatButton label='Add' onClick={this.addRate.bind(this)}/>
                <FlatButton label='Edit' onClick={this.editRate.bind(this)}
                            disabled={this.props.parentContext.state.selected === undefined}/>
                <FlatButton label='Delete' onClick={this.deleteRate.bind(this)}
                            disabled={this.props.parentContext.state.selected === undefined}/>
            </div>
        )
    }
}

export default RateButtonBar

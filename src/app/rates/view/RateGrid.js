import React, {Component} from 'react';
import Table from 'material-ui/Table/Table';
import TableHeader from 'material-ui/Table/TableHeader';
import TableHeaderColumn from 'material-ui/Table/TableHeaderColumn';
import TableRow from 'material-ui/Table/TableRow';
import TableRowColumn from 'material-ui/Table/TableRowColumn';
import TableBody from 'material-ui/Table/TableBody';
import CycleFormatter from "../../format/CycleFormatter";
import DateFormatter from "../../format/DateFormatter";

class RateGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            fixedHeader: true,
            fixedFooter: true,
            stripedRows: true,
            showRowHover: true,
            selectable: true,
            multiSelectable: false,
            enableSelectAll: false,
            deselectOnClickaway: false,
            height: '300px'
        };
        console.log(props)
    };

    onRowSelectionChanged(event) {
        this.props.parentContext.setState({
            selected: event[0]
        });
    }


    render() {
        const self = this;
        return (
            <div>
                <Table
                    height={self.state.height}
                    fixedHeader={self.state.fixedHeader}
                    fixedFooter={self.state.fixedFooter}
                    selectable={self.state.selectable}
                    multiSelectable={self.state.multiSelectable}
                    onRowSelection={self.onRowSelectionChanged.bind(self)}
                >
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>Name</TableHeaderColumn>
                            <TableHeaderColumn>Value</TableHeaderColumn>
                            <TableHeaderColumn>Cycle</TableHeaderColumn>
                            <TableHeaderColumn>StartDate</TableHeaderColumn>
                            <TableHeaderColumn>Calculated Value</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody
                        deselectOnClickaway={self.state.deselectOnClickaway}
                        stripedRows={self.state.stripedRows}
                        showRowHover={self.state.showRowHover}
                    >
                        {self.props.parentContext.state.data.map((rate, i) =>
                            <TableRow key={i}>
                                <TableRowColumn>{rate.name}</TableRowColumn>
                                <TableRowColumn>{parseFloat(rate.value).toFixed(2)}€</TableRowColumn>
                                <TableRowColumn>{CycleFormatter.format(rate.cycle)}</TableRowColumn>
                                <TableRowColumn>{DateFormatter.format(rate.startDate)}</TableRowColumn>
                                <TableRowColumn>{parseFloat(rate.dailyValue).toFixed(2)}€</TableRowColumn>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        )
    }
}

export default RateGrid

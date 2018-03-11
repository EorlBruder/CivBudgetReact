import React, {Component} from 'react';
import RateFilterBar from "./RateFilterBar";
import RateButtonBar from "./RateButtonBar";
import RateGrid from "./RateGrid";
import RateMapper from "../../model/RateMapper";
import RatesController from "../../controller/RatesController";
import RateEditDialog from "./dialog/RateEditDialog";

class RateContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            selected: undefined,
            editDialogOpen: false,
            filter: "",
            editDialog: [],
            rateGrid: []
        };
        this.load();
    }

    load() {
        const self = this;
        const ratesController = new RatesController();
        const response = ratesController.findAll();
        response.then(
            (data) => {
                const mappedData = RateMapper.mapToDomains(data);
                const rateGrid = [];
                rateGrid.push(<RateGrid key={0} parentContext={this}/>);
                self.setState({
                    data: mappedData,
                    rateGrid: rateGrid
                });
            }
        )
    }

    getSelectedRate() {
        if (this.state.selected !== undefined) {
            return this.state.data[this.state.selected];
        }
        return undefined
    }

    showAddDialog() {
        const editDialog = [];
        editDialog.push(<RateEditDialog key={0} parentContext={this} rate={undefined} open={true} edit={false}/>);
        this.setState({
            editDialog: editDialog
        })
    }

    showEditDialog() {
        const editDialog = [];
        editDialog.push(<RateEditDialog key={0} parentContext={this} rate={this.getSelectedRate()} open={true}
                                        edit={true}/>);
        this.setState({
            editDialog: editDialog
        })

    }

    deleteRate() {
        const selectedRate = this.getSelectedRate();
        new RatesController().delete(selectedRate).then(
            () => {
                this.load()
            }
        );

    }

    render() {
        return (
            <div>
                {this.state.editDialog}
                <RateFilterBar parentContext={this}/>
                <RateButtonBar parentContext={this}/>
                {this.state.rateGrid}
            </div>
        )
    }
}

export default RateContainer

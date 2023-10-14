import React, {Component} from "react";
import {Button, TextField} from "@mui/material";

class TransferComponent extends Component {
    xyz
    constructor(props) {
        super(props);

        this.state = {
            amount: '',
        };
    }


    handleAmountChange = (event) => {

        const amount = event.target.value;
        this.setState({amount});

        this.props.onAmountChange(amount);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.amount.trim() === '') return;

        this.setState({
            amount: event.target.value
        })
    }

    render() {
        return (
            <div style={{textAlign: "left"}}>
                <h2>Transfer</h2>
                <p><strong> From:</strong>  {this.props.sourceAccount}</p>
                <p><strong> To:</strong>  {this.props.destinationAccount}</p>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <strong> Amount: </strong>
                        <TextField type="text" value={this.state.amount} onChange={this.handleAmountChange} />
                    </label>
                    <br></br>
                    <Button size="medium" variant="contained" type="submit" onClick={this.handleSubmit}>Submit</Button>
                </form>
            </div>
        );
    }

}



export default TransferComponent;

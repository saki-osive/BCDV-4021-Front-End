import React, {Component} from "react";

class TransferComponent extends Component {
    xyz
    constructor(props) {
        super(props);

        this.state = {
            amount: '',
        };
    }

    handleAmountChange = (event) => {
        this.setState({
            amount: event.target.value
        });
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
            <div>
                <h2>Transfer Component</h2>
                <p>Source Account: {this.props.sourceAccount}</p>
                <p>Destination Account: {this.props.destinationAccount}</p>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Amount:
                        <input type="text" value={this.state.amount} onChange={this.handleAmountChange} />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }

}



export default TransferComponent;
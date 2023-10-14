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
            <div>
                <h2>Transfer</h2>
                <p>From: {this.props.sourceAccount}</p>
                <p>To: {this.props.destinationAccount}</p>
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
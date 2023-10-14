import React, {Component} from "react";

class ReceiptComponent extends Component {

    render() {
        return (
            <div>
                <h2>Receipt Component</h2>
                <p>Transaction Details:</p>
                <p>Transaction ID: {this.props.transaction.id}</p>
                <p>Amount: {this.props.transaction.amount}</p>
                <p>Source Account: {this.props.transaction.sourceAccount}</p>
                <p>Destination Account: {this.props.transaction.destinationAccount}</p>
            </div>
        );
    }

}

export default ReceiptComponent;

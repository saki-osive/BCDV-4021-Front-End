import React, {Component} from "react";

class ReceiptComponent extends Component {

    render() {
        return (
            <div>
                <h2>Receipt Component</h2>
                <p>Transaction Details:</p>
                <p>Amount: {this.props.transaction.amount}</p>
                <p>From: {this.props.transaction.sourceAccount}</p>
                <p>To: {this.props.transaction.destinationAccount}</p>
            </div>
        );
    }

}

export default ReceiptComponent;

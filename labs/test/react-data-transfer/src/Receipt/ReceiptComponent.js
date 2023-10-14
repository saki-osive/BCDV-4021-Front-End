import React, {Component} from "react";

class ReceiptComponent extends Component {

    render() {
        return (
            <div style={{textAlign: "left"}}>
                <h2>Receipt</h2>
                <p>Transaction Details:</p>

                <p><strong> Amount: </strong> {this.props.transaction.amount}</p>
                <p><strong> From:</strong>  {this.props.transaction.sourceAccount}</p>
                <p><strong> To:</strong>  {this.props.transaction.destinationAccount}</p>

                <p><strong> Transaction Hash: </strong> {this.props.transaction.transactionHash}</p>
                <p><strong> Block Hash: </strong> {this.props.transaction.blockHash}</p>
            </div>
        );
    }

}

export default ReceiptComponent;

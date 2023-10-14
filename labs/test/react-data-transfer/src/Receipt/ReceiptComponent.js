import React, {Component} from "react";

class ReceiptComponent extends Component {

    render() {
        const { transaction } = this.props;

        return (
            <div>
                <h2>Transaction Details</h2>
                <p><strong>Date:</strong> {transaction.date}</p>
                <p><strong>Description:</strong> {transaction.description}</p>
                <p><strong>Amount:</strong> ${transaction.amount.toFixed(2)}</p>
                <p><strong>Status:</strong> {transaction.status}</p>
            </div>
        );
    }

}

const mockTransaction = {
    transactionHash: 'Oxdfbc75b254db76ade94581ce4463dec284865148cce297cf512227d9e9e10fd2',
    blockHash: '0xcf6a288e5647c48c4ed82c821c1d5ac6da125c42a72b2aacb12d4b54e47c5bf8',
    blockNumber: '10',
    from: 'Oxf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
    to: '0x15d34aaf54267db7d7c367839aaf71a00a2c6a65',
    gasUsed: '21000'
};


export default ReceiptComponent;

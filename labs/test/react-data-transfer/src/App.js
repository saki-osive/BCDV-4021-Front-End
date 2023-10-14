import './App.css';
import {Component} from "react";
import TransferComponent from "./Transfer/TransferComponent";
import ReceiptComponent from "./Receipt/ReceiptComponent";
import { faker } from '@faker-js/faker';
import {Button} from "@mui/material";
import SHA256 from 'crypto-js/sha256';

class App extends Component{

    sourceAccount = faker.finance.ethereumAddress();
    destinationAccount = faker.finance.ethereumAddress();

    constructor(props) {
        super(props);

        this.state = {
            showReceipt: false,
            amount: '',
            transactionHash: '',
            blockHash: ''
        };
    }

    handleAmountChange = (amount) => {
        this.setState({ amount });
    }

    handleReceiptToggle = () => {
        this.calculateTransactionAndBlockHash();
        this.setState((prevState) => ({ showReceipt: !prevState.showReceipt }));
    }

    calculateTransactionAndBlockHash = () => {
        const transaction = {
            sender: this.sourceAccount,
            receiver: this.destinationAccount,
            amount: this.state.amount,
        }

        const transactionData = JSON.stringify(this.transaction);
        const transactionHash = SHA256(transactionData).toString();

        this.setState({ transactionHash });

        const block = {
            timestamp: new Date(),
            previousBlockHash: 'previousBlockHashValue',
            transactions: [transaction]
        }

        const blockData = JSON.stringify(block);
        const blockHash = SHA256(blockData).toString();

        this.setState({ blockHash });
    }

    render() {
        return (
            <div>
                <div className="transferOutlineBox">
                    <TransferComponent
                        sourceAccount={this.sourceAccount}
                        destinationAccount={this.destinationAccount}
                        onAmountChange={this.handleAmountChange}
                    />
                </div>

                <div className="generateButton">
                    <Button
                        size="medium"
                        variant="contained"
                        color="success"
                        onClick={this.handleReceiptToggle}
                    >Generate Receipt</Button>
                </div>


                {this.state.showReceipt && (
                    <div className="receiptOutlineBox">
                        <ReceiptComponent
                            transaction={{
                                amount: this.state.amount,
                                sourceAccount: this.sourceAccount,
                                destinationAccount: this.destinationAccount,
                                transactionHash: this.state.transactionHash,
                                blockHash: this.state.blockHash
                            }}
                        />
                    </div>
                )}
            </div>
        );
    }




}



export default App;

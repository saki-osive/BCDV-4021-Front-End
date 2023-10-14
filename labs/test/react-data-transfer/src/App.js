import logo from './logo.svg';
import './App.css';
import {Component} from "react";
import TransferComponent from "./Transfer/TransferComponent";
import ReceiptComponent from "./Receipt/ReceiptComponent";
import { faker } from '@faker-js/faker';

class App extends Component{

    sourceAccount = faker.finance.ethereumAddress();
    destinationAccount = faker.finance.ethereumAddress();

    constructor(props) {
        super(props);

        this.state = {
            showReceipt: false,
            amount: ''
        };
    }

    handleReceiptToggle = () => {
        this.setState((prevState) => ({ showReceipt: !prevState.showReceipt }));
    }

    handleAmountChange = (amount) => {
        this.setState({ amount });
    }

    render() {
        return (
            <div>
                <TransferComponent
                    sourceAccount={this.sourceAccount}
                    destinationAccount={this.destinationAccount}
                    onAmountChange={this.handleAmountChange} // Call Back Function
                />
                <button onClick={this.handleReceiptToggle}>Toggle Receipt</button>
                {this.state.showReceipt && (
                    <ReceiptComponent
                        transaction={{
                            amount: this.state.amount,
                            sourceAccount: this.sourceAccount,
                            destinationAccount: this.destinationAccount,
                        }}
                    />
                )}
            </div>
        );
    }




}



export default App;

import logo from './logo.svg';
import './App.css';
import {Component} from "react";
import TransferComponent from "./Transfer/TransferComponent";
import ReceiptComponent from "./Receipt/ReceiptComponent";
import { faker } from '@faker-js/faker';

class App extends Component{

    constructor(props) {
        super(props);

        this.state = {
            showReceipt: false,
        };
    }

    handleReceiptToggle = () => {
        this.setState((prevState) => ({ showReceipt: !prevState.showReceipt }));
    }

    render() {
        const sourceAccount = faker.finance.ethereumAddress();
        const destinationAccount = faker.finance.ethereumAddress();

        return (
            <div>
                <TransferComponent sourceAccount={sourceAccount} destinationAccount={destinationAccount} />
                <button onClick={this.handleReceiptToggle}>Toggle Receipt</button>
                {this.state.showReceipt && (
                    <ReceiptComponent
                        transaction={{
                            id: '12345',  // In Progress
                            amount: '100 ETH', // In Progress
                            sourceAccount: sourceAccount,
                            destinationAccount: destinationAccount,
                        }}
                    />
                )}
            </div>
        );
    }




}



export default App;

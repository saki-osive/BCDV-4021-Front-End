import './App.css';
import React, {Component} from "react";

class TransferComponent extends Component {

    sourceAccount = 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266;
    destinationAccount = 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266;

    xyz
    constructor() {
        super();
        this.state = {
            amount: ''
        }
    }

    handleInputChange = (event) => {
        this.setState({
            amount: event.target.value
        })
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
            <div className="App">
                <h1> Transfer </h1>

                <h5>From: </h5> <p> {this.sourceAccount}</p>
                <h5>To: </h5> <p> {this.destinationAccount}</p>
                <form>
                    <input
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.handleInputChange}
                    />
                    <button type="submit" onClick={this.handleSubmit}>Add</button>
                </form>
            </div>
        );
    }

}



export default TransferComponent;
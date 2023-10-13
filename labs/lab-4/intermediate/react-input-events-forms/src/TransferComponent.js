import './App.css';
import React, {Component} from "react";

class TransferComponent extends Component {

    constructor() {
        super();
        this.state = {
            sourceAccount: '0xf39Fd6ehj4324hjbn432kjh34bkdhkj432',
            destinationAccount: '0xf39f6eFd6weqwnmdsadsadj487fdsh8934hrd',
            amount: ''
        }


    }

    handleInputChange = (event) => {
        this.setState({
            amount: event.target.value
        })
    }

    render() {
        return (
            <div className="App">
                <h1> Transfer </h1>

                <h5>From: </h5> <p> {this.state.sourceAccount}</p>
                <h5>To: </h5> <p> {this.state.destinationAccount}</p>
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
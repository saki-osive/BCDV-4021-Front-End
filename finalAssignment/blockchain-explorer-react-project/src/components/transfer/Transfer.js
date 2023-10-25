import React, {useState} from "react";
import {useParams} from "react-router-dom";
import { faker } from '@faker-js/faker';
import Grid from "@mui/material/Grid";
import TransferComponent from "./TransferComponent";
import SHA256 from 'crypto-js/sha256';
import ReceiptComponent from "./ReceiptComponent";

function Transfer() {

    const { address } = useParams();

    let sourceAccount = address;
    const [destinationAccount, setDestinationAccount] = useState(faker.finance.ethereumAddress());

    const[showReceipt, setReceipt] = useState(false);
    const[amount, setAmount] = useState('');
    const[transactionHash, setTransactionHash] = useState('');
    const[blockHash, setBlockHash] = useState('');


    const handleAmountChange = (amount) => {
        setAmount(amount);
    }

    const transferInitiated = () => {
        calculateTransactionAndBlockHash();

        // Show Receipt
        setReceipt((prevState) => !prevState);
    }

    const calculateTransactionAndBlockHash = () => {
        const transaction = {
            sender: sourceAccount,
            receiver: destinationAccount,
            amount: amount,
        }

        const transactionData = JSON.stringify(transaction);
        const transactionHash = SHA256(transactionData).toString();

        setTransactionHash(transactionHash)

        const block = {
            timestamp: new Date(),
            previousBlockHash: 'previousBlockHashValue',
            transactions: [transaction]
        }

        const blockData = JSON.stringify(block);
        const blockHash = SHA256(blockData).toString();

        setBlockHash(blockHash);
    }

    return (

        <Grid container spacing={2}>
            <Grid item xs={12}>
                <TransferComponent
                    sourceAccount={sourceAccount}
                    destinationAccount={destinationAccount}
                    onAmountChange={handleAmountChange}
                    onClick={transferInitiated}
                />
            </Grid>
            {showReceipt && (
                <Grid item xs={12}>
                   <ReceiptComponent
                       transaction = {{
                           amount: amount,
                           sourceAccount: sourceAccount,
                           destinationAccount: destinationAccount,
                           transactionHash: transactionHash,
                           blockHash: blockHash
                       }}
                   />
                </Grid>
            )}

        </Grid>
    );
}

export default Transfer;

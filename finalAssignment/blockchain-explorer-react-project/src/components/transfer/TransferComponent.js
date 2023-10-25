import React, {useState} from "react";
import {Button, Card, CardActions, CardContent, CardMedia, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import transferLogo from './transfer.png';

function TransferComponent(props) {

    const [amount, setAmount] = useState('')

    const handleAmountChange = (event) => {

        const amount = event.target.value;
        setAmount(amount);

        props.onAmountChange(amount);
    }

    return (
        <Card sx={{ maxWidth: 375 }}>
            <CardMedia
                component="img"
                alt="transfer"
                height="240"
                image={transferLogo}
            />
            <CardContent>
                {/*Heading*/}
                <Typography gutterBottom variant="h5" component="div">
                    Transfer
                </Typography>


                {/*Transfer from */}
                <div style={{ marginTop: '1rem' }}>
                    <Typography variant="subtitle2" fontWeight color="text.secondary">
                        Transfer Address Selected :
                    </Typography>
                    <Typography variant="body2" fontWeight color="text.secondary">
                        {props.sourceAccount}
                    </Typography>
                </div>


                {/*Transfer To */}
                <div style={{ marginTop: '1rem' }}>
                    <Typography variant="subtitle2" fontWeight color="text.secondary">
                        Transfer To :
                    </Typography>
                    <Typography variant="body2" fontWeight color="text.secondary">
                        {props.destinationAccount}
                    </Typography>
                </div>


                {/*Amount */}
                <div style={{ marginTop: '1rem' }}>
                    <TextField
                        required
                        label="Amount"
                        variant="outlined"
                        value={amount}
                        onChange={handleAmountChange}
                    />
                </div>


            </CardContent>
            <CardActions>
                <Button
                    variant="contained"
                    size="medium"
                    onClick={props.onClick}
                >Transfer</Button>
            </CardActions>
        </Card>

    );
}

export default TransferComponent;

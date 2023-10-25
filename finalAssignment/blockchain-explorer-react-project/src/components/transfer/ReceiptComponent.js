import React from "react";
import {Card, CardContent, CardMedia} from "@mui/material";
import Typography from "@mui/material/Typography";
import successLogo from './success.png';

function ReceiptComponent(props) {

    return (
        <Card sx={{ maxWidth: 375 }}>
            <CardMedia
                component="img"
                alt="transfer"
                height="160"
                image={successLogo}
            />
            <CardContent>
                {/*Heading*/}
                <Typography gutterBottom variant="h5" component="div">
                    Transfer
                </Typography>


                {/* Transaction Hash */}
                <div style={{ marginTop: '1rem' }}>
                    <Typography variant="subtitle2" fontWeight color="text.secondary">
                        Transaction Hash :
                    </Typography>
                    <Typography variant="body2" fontWeight color="text.secondary">
                        {props.transaction.transactionHash}
                    </Typography>
                </div>


                {/* Block Hash */}
                <div style={{ marginTop: '1rem' }}>
                    <Typography variant="subtitle2" fontWeight color="text.secondary">
                        Block Hash :
                    </Typography>
                    <Typography variant="body2" fontWeight color="text.secondary">
                        {props.transaction.blockHash}
                    </Typography>
                </div>

                {/* Amount */}
                <div style={{ marginTop: '1rem' }}>
                    <Typography variant="subtitle2" fontWeight color="text.secondary">
                        Amount
                    </Typography>
                    <Typography variant="body2" fontWeight color="text.secondary">
                        {props.transaction.amount}
                    </Typography>
                </div>

                {/* From */}
                <div style={{ marginTop: '1rem' }}>
                    <Typography variant="subtitle2" fontWeight color="text.secondary">
                        Transferred From :
                    </Typography>
                    <Typography variant="body2" fontWeight color="text.secondary">
                        {props.transaction.sourceAccount}
                    </Typography>
                </div>

                {/* To */}
                <div style={{ marginTop: '1rem' }}>
                    <Typography variant="subtitle2" fontWeight color="text.secondary">
                        Transferred To :
                    </Typography>
                    <Typography variant="body2" fontWeight color="text.secondary">
                        {props.transaction.destinationAccount}
                    </Typography>
                </div>

            </CardContent>
        </Card>

    );
}

export default ReceiptComponent;

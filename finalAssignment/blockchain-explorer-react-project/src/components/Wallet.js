import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from "./Title";

function preventDefault(event) {
    event.preventDefault();
}

export default function Wallet() {
    return (
        <React.Fragment>
            <Title>My Wallet</Title>
            <Typography component="p" variant="h4">
                99997700 ETH
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
                on 25 October, 2023
            </Typography>
            <Typography component="p" variant="subtitle2">
                Address:
            </Typography>
            <Typography component="p" variant="body">
                0xbe0eb53f46cd790cd13851d5eff43d12404d33e8
            </Typography>
            <div>
                <Link color="primary" href="#" onClick={preventDefault}>
                    View balance
                </Link>
            </div>
        </React.Fragment>
    );
}
import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from "./Title";

// Generate Order Data
function createData(id, source, destination, amount, status, gasUsed, receiptHash, createdAt) {
    return { id, source, destination, amount, status, gasUsed, receiptHash, createdAt };
}

const rows = [
    createData(
        0,
        '0xb794f5ea0ba39494ce839613fffba74279579268',
        '0x47ac0fb4f2d84898e4d9e7b4dab3c24507a6d503',
        '250',
        'SUCCESS',
        "21000",
        "",
        ""
    ),
    createData(
        1,
        '0xbe0eb53f46cd790cd13851d5eff43d12404d33e8',
        '0xc61b9bb3a7a0767e3179713f3a5c7a9aedce193c',
        '5990',
        'SUCCESS',
        "51000",
        "",
        ""
    ),
    createData(
        2,
        '0xda9dfa130df4de4673b89022ee50ff26f6ea73cf',
        '0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae',
        '20',
        'SUCCESS',
        "1000",
        "",
        ""
    ),
];

function preventDefault(event) {
    event.preventDefault();
}

export default function Transactions() {
    return (
        <React.Fragment>
            <Title>Recent Transactions</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Source</TableCell>
                        <TableCell>Destination</TableCell>
                        <TableCell>Amount</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Gas Used</TableCell>
                        <TableCell>Receipt Hash</TableCell>
                        <TableCell align="right">Created At</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.source}</TableCell>
                            <TableCell>{row.destination}</TableCell>
                            <TableCell>{`${row.amount} ETH`}</TableCell>
                            <TableCell>{row.status}</TableCell>
                            <TableCell>{row.gasUsed}</TableCell>
                            <TableCell>{row.receiptHash}</TableCell>
                            <TableCell align="right">{row.createdAt}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
                See more transactions
            </Link>
        </React.Fragment>
    );
}
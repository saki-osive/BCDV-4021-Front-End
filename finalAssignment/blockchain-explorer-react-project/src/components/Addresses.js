import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from "./Title";
import {Link} from "react-router-dom";

// Generate Order Data
function createData(id, address) {
    return { id, address };
}

const rows = [
    createData(
        0,
        '0xb794f5ea0ba39494ce839613fffba74279579268',
    ),
    createData(
        1,
        '0xbe0eb53f46cd790cd13851d5eff43d12404d33e8',
    ),
    createData(
        2,
        '0xda9dfa130df4de4673b89022ee50ff26f6ea73cf',
    ),
];

export default function Addresses() {
    return (
        <React.Fragment >
            <Title>Blockchain Node Addresses</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Select Address to Transfer</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>
                                <Link to={`/transfer/${row.address}`}>
                                    {row.address}
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </React.Fragment>
    );
}
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useMainContext from '@/hooks/useMain.context';

function createData(name, surname, country, gender, number) {
  return { name, surname, country, gender, number };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable() {

    const { users } = useMainContext();
    const Rows = users.map((user) => {
        return (
            <TableRow key={user.Number}>
                <TableCell align="left">{ user.Name }</TableCell>
                <TableCell align="right">{user.Surname}</TableCell>
                <TableCell align="right">{user.Country}</TableCell>
                <TableCell align="right">{user.Gender}</TableCell>
                <TableCell align="right">{user.Number}</TableCell>
            </TableRow>
        )
    });

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Surname</TableCell>
                        <TableCell align="right">Country</TableCell>
                        <TableCell align="right">Gender</TableCell>
                        <TableCell align="right">Number</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    { Rows }
                </TableBody>
            </Table>
        </TableContainer>
    );
}

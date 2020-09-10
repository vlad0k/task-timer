import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom'

function msToHMS( ms ) {

    var seconds = parseInt(ms / 1000);
    var hours = parseInt( seconds / 3600 ); 
    seconds = seconds % 3600; 
    var minutes = parseInt( seconds / 60 );
    seconds = seconds % 60;
    return((hours < 10 ? `0${hours}` : hours)+":"+(minutes < 10 ? `0${minutes}` : minutes)+":"+(seconds < 10 ? `0${seconds}` : seconds));
}

const Logs = ({ tasks, deleteTask }) => {

    return (
        <Paper>
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>№</TableCell>
                        <TableCell align="right">Task</TableCell>
                        <TableCell align="right">Time start</TableCell>
                        <TableCell align="right">Time end</TableCell>
                        <TableCell align="right">Time spent</TableCell>
                        <TableCell align="right">Info</TableCell>
                        <TableCell align="right">Delete</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {tasks && tasks.map((row, i) => (
                        <TableRow key={row.startTime}>
                            <TableCell component="th" scope="row">
                                {i + 1}
                            </TableCell>
                            <TableCell component="th" scope="row">
                                {row.taskName}
                            </TableCell>
                            <TableCell align="right">{new Date(row.startTime).toLocaleTimeString()}</TableCell>
                            <TableCell align="right">{new Date(row.endTime).toLocaleTimeString()}</TableCell>
                            <TableCell align="right">{msToHMS(row.endTime - row.startTime) }</TableCell>
                            <TableCell align="right">
                            <Link to={`/tasks/${i + 1}`}><Button>INFO</Button></Link>
                            </TableCell>
                            <TableCell align="right">
                                <Button onClick={() => deleteTask(row)}>DELETE</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </Paper>
    );
}

export default Logs

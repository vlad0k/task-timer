import React from 'react'
import { useRouteMatch, Link } from 'react-router-dom'
import { Button, Dialog, Toolbar, IconButton,AppBar, Paper, List } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const Info = ({ tasks, deleteTask }) => {
    console.log(tasks);
    let { params: { id } } = useRouteMatch()
    let {taskName, startTime, endTime} = tasks[id - 1] ? tasks[id - 1] : {}

    return (
        <Dialog fullScreen open={true}>
            <AppBar>
                <Toolbar>
                    <Link to='/'>
                        <IconButton edge="start" color="inherit" aria-label="close">
                            <CloseIcon />
                        </IconButton>
                    </Link>
                </Toolbar> 
            </AppBar>
            <div style={{ marginTop: 48, padding: 16 }}>
                { tasks[id - 1] && <div>
                    <p>Name: {taskName}</p>
                    <p>Start Time: {new Date(startTime).toLocaleTimeString()}</p>
                    <p>End Time: {new Date(endTime).toLocaleTimeString()}</p>
                    <Link to='/'>
                        <Button onClick={() => deleteTask(tasks[id - 1])}>DELETE</Button>
                    </Link>
                </div>}
                {
                    !tasks[id - 1] && (
                        <div>
                            Error! No such task!
                        </div>
                    )
                }
            </div>
        </Dialog>
    )
}

export default Info

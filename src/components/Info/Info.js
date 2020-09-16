import React from 'react'

import { useRouteMatch, Link } from 'react-router-dom'

import { useSelector } from 'react-redux'

import DeleteButton from '../DeleteButton/DeleteButton'

import { 
    Paper,
    Toolbar, 
    IconButton,
    AppBar 
} from '@material-ui/core';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const Info = () => {

    const tasks = useSelector( state => state.tasks)

    let { params: { id } } = useRouteMatch()
    let {taskName, startTime, endTime} = tasks[id - 1] ? tasks[id - 1] : {}
    return (
        <Paper fullScreen open={true}>
            <AppBar>
                <Toolbar>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <IconButton edge="start" color="default" aria-label="close">
                            <ArrowBackIcon style={{ color: 'white' }}/>
                        </IconButton>
                    </Link>
                </Toolbar> 
            </AppBar>
            <div style={{ marginTop: 48, padding: 16 }}>
                { tasks[id - 1] && <div>
                    <p>Name: {taskName}</p>
                    <p>Start Time: {new Date(startTime).toLocaleTimeString()}</p>
                    <p>End Time: {new Date(endTime).toLocaleTimeString()}</p>
                    <DeleteButton task={ tasks[id - 1] } >DELETE</DeleteButton>
                </div>}
                {
                    !tasks[id - 1] && (
                        <div>
                            Error! No such task #{id}!
                        </div>
                    )
                }
            </div>
        </Paper>
    )
}

export default Info

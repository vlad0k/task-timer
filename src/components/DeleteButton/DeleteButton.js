import React, { useState } from 'react'

import { useDispatch } from 'react-redux'
import { deleteTask } from '../../redux/app-reducer'

import {
  Button,
  Dialog,
  Slide,
  DialogActions,
  DialogContent,
} from '@material-ui/core'

import { useHistory } from 'react-router-dom'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

const DeleteButton = ({ task, children }) => {
  const [open, setOpen] = useState(false)

  const dispatch = useDispatch()

  const history = useHistory()

  const handleDeleteButton = () => {
    dispatch(deleteTask(task))
    setOpen(false)
    history.push('/')
  }

  const handleClose = () => setOpen(false)

  const handleOpenDialog = () => setOpen(true)

  return (
    <>
      <Button onClick={handleOpenDialog} color="secondary">
        {children}
      </Button>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent id="alert-dialog-slide-title">
          Do you really want to delete <b>{task.taskName}</b>?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDeleteButton} color="secondary">
            DELETE
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default DeleteButton

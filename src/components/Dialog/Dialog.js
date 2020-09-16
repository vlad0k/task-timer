import React from 'react';

import { Dialog as MaterialUIDialog, DialogTitle, DialogContent, DialogContentText, Button, DialogActions } from '@material-ui/core'

const Dialog = ({ open, setVisible}) => {
    const handleClose = () => setVisible(false)

    return (
        <MaterialUIDialog
            fullWidth={true}
            maxWidth="xs"
            open={open}
            onClose={handleClose}
            aria-labelledby="max-width-dialog-title"
        >
        <DialogTitle id="max-width-dialog-title">Input is empty!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter the name of task first
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            OK
          </Button>
        </DialogActions>
      </MaterialUIDialog>
    );
}

export default Dialog;

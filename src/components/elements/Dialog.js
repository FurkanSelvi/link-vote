import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useTheme } from "@mui/material/styles";

export default function ResponsiveDialog(props) {
  const {
    open,
    onClose,
    title,
    message,
    dispatchKey,
    dispatchParams,
  } = props;
  const theme = useTheme();

  const handleClose = () => {
    onClose();
  };

  const onSubmit = () => {
    window.dispatchEvent(
      new CustomEvent(dispatchKey, {'detail': dispatchParams})
    );
    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose}>
          Cancel
        </Button>
        <Button onClick={onSubmit} autoFocus>
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
}

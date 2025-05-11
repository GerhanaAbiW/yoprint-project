import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import React from "react";

interface DialogErrorComponentProps {
  open: boolean;
  message: string;
  onClose: () => void;
}

const DialogErrorComponent: React.FC<DialogErrorComponentProps> = ({
  open,
  message,
  onClose,
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Error</DialogTitle>
      <DialogContent>
        <Typography color="error">{message}</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="contained" color="error">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogErrorComponent;

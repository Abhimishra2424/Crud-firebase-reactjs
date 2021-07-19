import React from "react";
import Dialog from "@material-ui/core/Dialog";

export default function AlertDialog({ DialogContent, handleClose, open }) {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>{DialogContent}</DialogContent>
      </Dialog>
    </div>
  );
}

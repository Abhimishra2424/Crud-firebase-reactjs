import React, { useState } from "react";
import {
  Card,
  Grid,
  CardContent,
  Typography,
  makeStyles,
  IconButton,
  Box,
  Button,
} from "@material-ui/core";
import { Styles } from "./style";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ErrorIcon from "@material-ui/icons/Error";
import AlertDialog from "./AlertsDialog";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles(Styles);

export default function UploadData({ UserData }) {
  const classes = useStyles();

  // for dialog
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const DialogContent = () => (
    <Box p={2}>
      <Box align="center">
        <ErrorIcon style={{ color: red[500], fontSize: "60px" }} />
      </Box>
      <Box mb={2}>
        <Typography variant="h6" color="textSecondary" align="center">
          Are you Sure to Delete?
        </Typography>
      </Box>
      <Box align="right">
        <Button variant="contained" color="default" onClick={handleClose}>
          cancel
        </Button>
        <Button
          style={{ marginLeft: "16px" }}
          variant="contained"
          color="secondary"
          onClick={() => console.log("delete")}
        >
          Delete
        </Button>
      </Box>
    </Box>
  );

  return (
    <div>
      <AlertDialog
        open={open}
        DialogContent={DialogContent}
        handleClose={handleClose}
      />
      <Grid container>
        {UserData.map((item, i) => (
          <Grid item xs={12} key={i}>
            <Card className={classes.CardData}>
              <CardContent className={classes.CardContent}>
                {/* two buttons */}
                <IconButton
                  color="secondary"
                  className={classes.deleteBtn}
                  onClick={() => handleOpen()}
                >
                  <DeleteIcon />
                </IconButton>
                <IconButton
                  color="primary"
                  className={classes.editBtn}
                  onClick={() => console.log("edit")}
                >
                  <EditIcon />
                </IconButton>
                <Typography variant="body1" color="textPrimary">
                  {`${item.firstName} ${item.lastName}`}
                </Typography>
                <Typography variant="body2" color="textPrimary">
                  {item.email}
                </Typography>
                <Typography variant="body2" color="textPrimary">
                  {item.gender}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

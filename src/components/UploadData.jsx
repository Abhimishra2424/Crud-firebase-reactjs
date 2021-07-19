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
import { DeleteData } from "../databaseDriver";

const useStyles = makeStyles(Styles);

export default function UploadData({ UserData, setFetched }) {
  const classes = useStyles();
  const [currentId, setCurrnetId] = useState("");

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
          onClick={() => {
            DeleteData({ id: currentId });
            setFetched(false);
            handleClose();
          }}
        >
          Delete
        </Button>
      </Box>
    </Box>
  );

  return (
    <div className={classes.UploadDataBox}>
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
                  onClick={() => {
                    handleOpen();
                    setCurrnetId(item.id);
                  }}
                >
                  <DeleteIcon />
                </IconButton>
                <IconButton
                  color="primary"
                  className={classes.editBtn}
                  // onClick={() => }
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

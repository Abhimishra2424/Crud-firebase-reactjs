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
import { DeleteData, getFirebseCollectionDataByID } from "../databaseDriver";
import { toast } from "react-toastify";

const useStyles = makeStyles(Styles);

export default function UploadData({
  UserData,
  setFetched,
  setData,
  setIsUpdateAction,
  setUpdateId,
}) {
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
            toast.success("Deleted Successfully");
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
        {UserData.length === 0 ? (
          <Grid>
            <Typography align="center"> No Data To Show</Typography>
            <Typography align="center" variant="subtitle2" color="error">
              Plz Add data throgh Form
            </Typography>
          </Grid>
        ) : (
          UserData.map((item, i) => (
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
                    onClick={() => {
                      getFirebseCollectionDataByID({ id: item.id }).then(
                        (data) => {
                          setData(data.data());
                          setUpdateId(item.id);
                          setIsUpdateAction(true);
                        }
                      );
                    }}
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
          ))
        )}
      </Grid>
    </div>
  );
}

import {
  Card,
  Grid,
  CardContent,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import { Styles } from "./style";

const useStyles = makeStyles(Styles);

export default function UploadData({ UserData }) {
  const classes = useStyles();
  return (
    <Grid container>
      {UserData.map((item, i) => (
        <Grid item xs={12} key={i}>
          <Card>
            <CardContent>
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
  );
}

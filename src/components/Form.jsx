import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Grid,
  makeStyles,
  Paper,
  Typography,
  Button,
} from "@material-ui/core";
import { Styles } from "./style";
import RenderInputText from "./common";
import RenderSelect from "./RenderSelect";
import { addFirebaseData } from "../databaseDriver";

const useStyles = makeStyles(Styles);

export default function Form() {
  const classes = useStyles();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
  });

  const [error, setError] = useState({});

  const handleChange = ({ target }) => {
    const name = target.name;
    const value = target.value;

    // setting up errors
    value.lenght < 3
      ? (error[name] = setError({
          ...error,
          [name]: `${name} have atleast 3 letter`,
        }))
      : (error[name] = setError({ ...error, [name]: "" }));

    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // add data to firebase
    addFirebaseData(data);
    console.log("data", data);

    // reset from
    setData({
      firstName: "",
      lastName: "",
      email: "",
      gender: "",
    });
  };

  return (
    <Grid container className={classes.formContainer}>
      <Grid item xs={12} sm={9}>
        {/* Formc container */}
        <form onSubmit={handleSubmit}>
          <Paper component={Box} mb={1} p={2}>
            <Box mb={2} mt={1}>
              <Typography variant="h6" color="primary" align="center">
                SignUp Here
              </Typography>
            </Box>
            {/* row */}
            <Grid container>
              <Grid item xs={12} sm={7}>
                <Card>
                  <CardContent>
                    <Box mb={1}>
                      <Grid container spacing={1}>
                        <Grid item xs={6} sm={6}>
                          <RenderInputText
                            label="First name"
                            name="firstName"
                            data={data}
                            error={error}
                            onChange={handleChange}
                          />
                        </Grid>
                        <Grid item xs={6} sm={6}>
                          <RenderInputText
                            label="last Name"
                            name="lastName"
                            data={data}
                            error={error}
                            onChange={handleChange}
                          />
                        </Grid>
                      </Grid>
                    </Box>
                    <Box mb={1}>
                      <RenderInputText
                        label="email"
                        name="email"
                        data={data}
                        error={error}
                        onChange={handleChange}
                      />
                    </Box>
                    <Box mb={1}>
                      <RenderSelect
                        label="gender"
                        name="gender"
                        data={data}
                        error={error}
                        options={[
                          { key: "male", value: "male" },
                          { key: "female", value: "female" },
                          { key: "others", value: "others" },
                        ]}
                        onChange={handleChange}
                      />
                    </Box>
                  </CardContent>
                  <Box>
                    <Button
                      type="submit"
                      variant="contained"
                      size="small"
                      color="primary"
                      fullWidth={true}
                    >
                      submit
                    </Button>
                  </Box>
                </Card>
              </Grid>
              <Grid item xs={12} sm={5}></Grid>
            </Grid>
          </Paper>
        </form>
        {/* add data upload  */}
      </Grid>
    </Grid>
  );
}

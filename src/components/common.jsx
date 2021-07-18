import React from "react";
import { TextField } from "@material-ui/core";

function RenderInputText({ label, name, data, error, onChange }) {
  return (
    <TextField
      value={data[name]}
      name={name}
      label={label}
      fullWidth={true}
      color="primary"
      size="small"
      variant="outlined"
      error={error[name] ? true : false}
      helperText={error[name] ? error[name] : ""}
      onChange={onChange}
      required={true}
    />
  );
}

export default RenderInputText;

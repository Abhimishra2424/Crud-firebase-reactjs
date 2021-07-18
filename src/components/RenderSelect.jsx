import { MenuItem, TextField } from "@material-ui/core";
import React from "react";

function RenderSelect({ label, name, data, error, options, onChange }) {
  return (
    <TextField
      select
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
    >
      {options.map((item, i) => (
        <MenuItem key={i} value={item.value}>
          {item.key}
        </MenuItem>
      ))}
    </TextField>
  );
}

export default RenderSelect;

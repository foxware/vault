
import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Button, Paper } from "@material-ui/core";
//import {  } from "@material-ui/core";
//import {  } from "@material-ui/icons";



export function AddItem() {
  const [open, setOpen] = useState(false);
  const [textValue, setTextValue] = useState("");

  const onTextChange = (e: any) => setTextValue(e.target.value);
  const handleSubmit = () => console.log(textValue);
  const handleReset = () => setTextValue("");    

  return (
  <div style={{ width: 700 }} onClick={() => setOpen(false)}>
    <Paper>
      <h2>Form Demo</h2>

      <TextField
        onChange={onTextChange}
        value={textValue}
        label={"Text Value"} //optional
      />

      <Button onClick={handleSubmit}>Submit</Button>
      <Button onClick={handleReset}>Reset</Button>
    </Paper>
  </div>
  );
}
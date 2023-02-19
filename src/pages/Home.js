import {
    Drawer,
    Button,
  } from "@material-ui/core";

  import { useState } from "react";
  import { AddItem } from './AddItem';
  

  

export function Home() {
    const [open, setOpen] = useState(false);


    return (
      <div>
        <Button onClick={() => setOpen(true)}>Click me</Button>
        <Drawer open={open} anchor={"left"} onClose={() => setOpen(false)}>
            <AddItem></AddItem>
            </Drawer>
      </div>
    );
}
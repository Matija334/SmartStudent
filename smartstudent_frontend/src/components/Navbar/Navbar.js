import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" href="/students">
            Students
          </Button>
          <Button color="inherit" href="/universities">
            Universities
          </Button>
          <Button color="inherit" href="/applications">
            List of applications
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

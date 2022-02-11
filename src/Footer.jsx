import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { positions } from "@mui/system";

const Footer = () => {
  return (
    <footer>
      <Paper sx={{ position: "bottom" }} elevation={1}>
        <Typography variant="h5" component="h3" id="footer">
          Made with React {React.version}
        </Typography>
        <Typography component="p">@2018 All right reserved</Typography>
      </Paper>
    </footer>
  );
};

export default Footer;

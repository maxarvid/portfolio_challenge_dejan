import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Box, Tabs, Tab } from "@mui/material";

const Header = () => {
  const [value, setValue] = useState(0);

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            label="my portfolio"
            {...a11yProps(0)}
            as={Link}
            to={{ pathname: "/" }}
          />
          <Tab
            label="about me"
            {...a11yProps(1)}
            as={NavLink}
            to={{ pathname: "/about" }}
          />
          <Tab
            label="my projects"
            {...a11yProps(2)}
            as={NavLink}
            to={{ pathname: "/projects" }}
          />
        </Tabs>
      </Box>
    </Box>
  );
};

export default Header;

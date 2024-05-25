"use client";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  List,
  ListItemButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../assets/guru-logo.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Model from "@/app/components/model/page";
import { useRouter } from "next/navigation";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const router = useRouter();
  const [openModel, setOpenModel] = useState(false);
  const [clickedTitle, setClickedTitle] = useState("");
  const [menuIcon, setMenuIcon] = useState(true);
  const [menuBox, setMenuBox] = useState(false);
  const [closeMenuIcon, setCloseMenuIcon] = useState(false);

  const handleOpenModel = (title) => {
    setOpenModel(true);
    setClickedTitle(title);
  };

  const handleCloseModel = () => {
    setOpenModel(false);
  };

  const MenuItem = [
    { title: "Home" },
    { title: "About Us" },
    { title: "Treatments" },
    { title: "Centers" },
    { title: "Doctors" },
    { title: "Contact Us" },
  ];

  const socialIconStyle = {
    borderRadius: "50%",
    fontSize: "28px",
    color: "#d60000",
    cursor: "pointer",
  };

  const handleForm = (title) => {
    if (title === "Contact Us") {
      handleOpenModel(title);
    } else if (title === "About Us") {
      router.push("/pages/about-us");
    } else if (title === "Home") {
      router.push("/");
    } else if (title === "Treatments") {
      router.push("/pages/treatments");
    } else if (title === "Centers") {
      router.push("/pages/centers");
    } else if (title === "Doctors") {
      router.push("/pages/doctors");
    }
  };

  const handleMenuClick = () => {
    toggleDrawer();
    setMenuBox(true);
    setCloseMenuIcon(true);
  };

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <AppBar className="header-appbar" sx={{ bgcolor: "#fff" }}>
      <Container maxWidth="lg">
        <Toolbar className="header-toolbar">
          <Image
            onClick={() => router.push("/")}
            src={logo}
            alt="Logo"
            priority={true}
            className="logo-style"
          />
          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <Typography sx={{ color: "#8c8c8c" }}>Social Links:</Typography>
              <FacebookRoundedIcon sx={socialIconStyle} />
              <InstagramIcon sx={socialIconStyle} />
              <LinkedInIcon sx={socialIconStyle} />
              <TwitterIcon sx={socialIconStyle} />
              <Button
                variant="contained"
                className="button-styled"
                onClick={() => handleOpenModel("Book Appointment")}
                sx={{
                  bgcolor: "#d60000",
                  "&:hover": {
                    bgcolor: "#d60000",
                  },
                }}
              >
                <Typography className="button-text">
                  Appointment Book
                </Typography>
              </Button>
              <Button
                variant="contained"
                className="button-styled"
                onClick={() => handleOpenModel("Business With Us")}
                sx={{
                  bgcolor: "#d60000",
                  "&:hover": {
                    bgcolor: "#d60000",
                  },
                }}
              >
                <Typography className="button-text">
                  Business With Us
                </Typography>
              </Button>
              {openModel && (
                <Model modalClose={handleCloseModel} title={clickedTitle} />
              )}
            </Box>
            <List sx={{ display: "flex", gap: "28px" }}>
              {MenuItem.map((item, index) => (
                <Typography
                  key={index}
                  onClick={() => {
                    handleForm(item.title);
                  }}
                  component="li"
                  sx={{
                    fontSize: "16px",
                    color: "#000",
                    fontWeight: 500,
                    fontFamily: "'Poppins', sans-serif",
                    cursor: "pointer",
                  }}
                >
                  {item.title}
                </Typography>
              ))}
            </List>
          </Box>
          {menuIcon && (
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                height: { xs: "33px", sm: "36px" },
                width: { xs: "38px", sm: "42px" },
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MenuIcon
                fontSize="large"
                sx={{ color: "#000" }}
                onClick={handleMenuClick}
              />
            </Box>
          )}
          {menuBox && (
            <Drawer
            anchor="top"
            open={isDrawerOpen}
            onClose={toggleDrawer}
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            <Box
              sx={{
                width: { xs: 260, sm: 400 },
                bgcolor: "#ffe8e8",
                width: "100%",
              }}
              onClick={toggleDrawer}
            >
              <Box
                sx={{
                  height: { xs: "33px", sm: "36px" },
                  width: { xs: "38px", sm: "42px" },
                  borderRadius: "2px",
                  padding: "10px",
                  float: "right",
                }}
              >
                <HighlightOffIcon
                  sx={{ fontSize: "32px", color: "#9d3892" }}
                />
              </Box>
              <Box
                sx={{
                  mt: "60px",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <List
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                  component="nav"
                >
                  {MenuItem.map((item, index) => (
                    <ListItemButton
                      key={index}
                      onClick={() => handleForm(item.title)}
                    >
                      <Typography
                        sx={{ fontSize: "18px", fontWeight: 600 }}
                      >
                        {item.title}
                      </Typography>
                    </ListItemButton>
                  ))}
                </List>
                <Button
                  variant="contained"
                  onClick={() => handleOpenModel("Book Appointment")}
                  sx={{ m: "20px", bgcolor: "#d60000" }}
                >
                  Get Appointment
                </Button>
                    <Button
                  variant="contained"
                  onClick={() => handleOpenModel("Business With Us")}
                  sx={{ m: "20px" , marginTop:"5px", bgcolor: "#d60000" }}
                >
              Business With Us
                </Button>
              </Box>
            </Box>
          </Drawer>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  Box,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import Model from "@/app/components/model/page";
import gurulogo from "../../assets/guru-logo.png";

const socialIconBoxStyle = {
  border: "2px solid #d60000",
  borderRadius: "50%",
  height: "26px",
  width: "26px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
};

const socialIconStyle = {
  color: "#d60000",
  fontSize: "18px",
};

const FooterListItem = ({ text, handleNavigate }) => (
  <ListItem sx={{ paddingX: 0, marginLeft: "10px" }}>
    <Typography
      sx={{
        color: "#3d4246",
        fontSize: "15px",
        fontFamily: "Raleway, Open sans, sans-serif !important",
        cursor: "pointer",
      }}
      onClick={() => handleNavigate(text)}
    >
      {text}
    </Typography>
  </ListItem>
);

const Footer = () => {
  const router = useRouter();
  const [openModel, setOpenModel] = useState(false);

  const centers = [
    "Ahmedabad",
    "Bhopal, Madhya Pradesh",
    "Mumbai",
    "Maharashtra",
    "New Delhi",
  " Uttarakhand",
  "Telangana",
  "Cuttack, Odisha"
  ];

  const moreAbout = [
    "About Us",
    "Treatments",
    "Centers",
    "Doctors",
    "Contact Us",
  ];

  const ourSupport = ["Health Suggestion", "24*7 Support", "FAQs Support"];

  const handleOpenModel = () => {
    setOpenModel(true);
  };

  const handleCloseModel = () => {
    setOpenModel(false);
  };

  const handleNavigate = (path) => {
    const routes = {
      "terms-and-conditions": "/pages/terms-and-conditions",
      "privacy-policy": "/pages/privacy-policy",
      Home: "/",
      "About Us": "/pages/about-us",
      Treatments: "/pages/treatments",
      Centers: "/pages/centers",
      Doctors: "/pages/doctors",
      "Contact Us": () => handleOpenModel(),
      Ahmedabad: "/pages/centers",
      "Madhya Pradesh": "/pages/centers",
      Mumbai: "/pages/centers",
      Maharashtra: "/pages/centers",
      "Health Suggestion": "/",
      "24*7 Support": "/",
      "FAQs Support": "/",
    };
    const routeAction = routes[path];
    if (typeof routeAction === "function") {
      routeAction();
    } else if (typeof routeAction === "string") {
      router.push(routeAction);
    }
  };

  return (
    <Box sx={{ borderTop: "2px solid #f1f1f1" }}>
      <Container maxWidth="lg" sx={{ paddingTop: { xs: "30px", sm: "50px" } }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Image
                onClick={() => router.push("/")}
                src={gurulogo}
                alt="logo"
                className="logo-style"
              />
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#455a64",
                  paddingRight: { xs: "0px", sm: "50px" },
                  marginY: "30px",
                }}
              >
                Welcome to GuruEECP, where cutting-edge technology meets
                compassionate care in the treatment and prevention of
                heart-related ailments. Specializing in Enhanced External
                Counter Pulsation (EECP) therapy, we are dedicated to offering
                non-invasive solutions for cardiac issues, including heart
                failure, heart attacks, and coronary artery disease.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={8}>
            <Grid container sx={{ marginTop: { xs: "30px", sm: "0px" } }}>
              <Grid item xs={6} md={4}>
                <Typography sx={{ color: "#d60000", fontSize: "19px" }}>
                  Our Center's
                </Typography>
                <List>
                  {centers.map((center, index) => (
                    <FooterListItem
                      key={index}
                      text={center}
                      handleNavigate={handleNavigate}
                    />
                  ))}
                </List>
              </Grid>
              <Grid item xs={6} md={4}>
                <Typography sx={{ color: "#d60000", fontSize: "19px" }}>
                  More About
                </Typography>
                <List>
                  {moreAbout.map((item, index) => (
                    <FooterListItem
                      key={index}
                      text={item}
                      handleNavigate={handleNavigate}
                    />
                  ))}
                </List>
              </Grid>
              <Grid
                item
                xs={6}
                md={4}
                sx={{ marginTop: { xs: "20px", md: "0px" } }}
              >
                <Typography sx={{ color: "#d60000", fontSize: "19px" }}>
                  Our Support
                </Typography>
                <List>
                  {ourSupport.map((item, index) => (
                    <FooterListItem key={index} text={item} handleNavigate={handleNavigate} />
                  ))}
                </List>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      {openModel && <Model modalClose={handleCloseModel} title="Contact Us" />}
      <Box
        sx={{
          bgcolor: "#f1f1f1",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          paddingY: "30px",
        }}
      >
        <Typography sx={{ fontSize: "14px", color: "#455a64" }}>
          Copyright © 2024, Guru EECP – All Rights Reserved.
        </Typography>
        <Box
          sx={{
            fontSize: "14px",
            color: "#455a64",
            paddingY: "14px",
            display: "flex",
          }}
        >
          <Typography
            onClick={() => handleNavigate("terms-and-conditions")}
            sx={{ cursor: "pointer" }}
          >
            Terms & conditions
          </Typography>
          <Divider orientation="vertical" flexItem sx={{ marginX: "10px" }} />
          <Typography
            onClick={() => handleNavigate("privacy-policy")}
            sx={{ cursor: "pointer" }}
          >
            Privacy Policy
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: "20px" }}>
          <Box sx={socialIconBoxStyle}>
            <InstagramIcon sx={socialIconStyle} />
          </Box>
          <Box sx={socialIconBoxStyle}>
            <PinterestIcon sx={socialIconStyle} />
          </Box>
          <Box sx={socialIconBoxStyle}>
            <TwitterIcon sx={socialIconStyle} />
          </Box>
          <Box sx={socialIconBoxStyle}>
            <YouTubeIcon sx={socialIconStyle} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
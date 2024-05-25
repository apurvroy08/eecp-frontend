"use client"
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import doctors from "../../assets/doctors.png"
import Image from 'next/image'
import AddIcCallRoundedIcon from '@mui/icons-material/AddIcCallRounded';
import MarkEmailUnreadRoundedIcon from '@mui/icons-material/MarkEmailUnreadRounded';
import Model from '../model/page';

const ContactUs = () => {

    const [openModel, setOpenModel] = useState(false);

    const handleOpenModel = () => {
        setOpenModel(true);
    };

    const handleCloseModel = () => {
        setOpenModel(false);
    };

    return (
        <Container>
            <Grid container sx={{ marginBottom: "40px" }}>
                <Grid item xs={12} md={6}>
                    <Image src={doctors} alt='doctors' style={{ height: "auto", width: "100%", borderTopRightRadius: { xs: "28px" } }} />
                </Grid>
                <Grid item xs={12} md={6} sx={{ marginBottom: "6px", bgcolor: "rgba(208, 208, 213, 1)", borderTopRightRadius: { xs: "0px", md: "22px" }, padding: { xs: "12px", sm: "50px" } }}>
                    <Typography sx={{ fontSize: { xs: "20px", sm: "30px", md: "40px", lg: "56px" }, color: "#d60000", marginBottom: "12px" }}>Contact Us</Typography>
                    <Box sx={{ display: "flex", alignItems: "center", paddingY: "16px", gap: "12px" }}>
                        <Box sx={{ bgcolor: "#d60000", height: { xs: "32px", sm: "38px" }, width: { xs: "32px", sm: "38px" }, borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <AddIcCallRoundedIcon sx={{ fontSize: { xs: "18px", sm: "24px" }, color: "rgba(255, 255, 255, 1)" }} />
                        </Box>
                        <Typography sx={{ fontSize: { xs: "16px", sm: "18px" }, fontWeight: 600 }}>Phone: 9111555581 </Typography>
                    </Box>
                    <Box sx={{ display: "flex", gap: "12px", alignItems: "center" }}>
                        <Box sx={{ bgcolor: "#d60000", height: { xs: "32px", sm: "38px" }, width: { xs: "32px", sm: "38px" }, borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <MarkEmailUnreadRoundedIcon sx={{ fontSize: { xs: "18px", sm: "24px" }, color: "rgba(255, 255, 255, 1)" }} />
                        </Box>
                        <Typography sx={{ fontSize: { xs: "16px", sm: "18px" }, fontWeight: 600 }}>eecpguru@gmail.com</Typography>
                    </Box>
                    <Button variant='contained' onClick={handleOpenModel} sx={{ bgcolor: "#d60000", '&:hover': { bgcolor: "#d60000" }, marginTop: "32px", borderRadius: "10px" }}>
                        <Typography sx={{ fontSize: { xs: "14px", sm: "18px" }, textTransform: "none" }}>Contact Us</Typography>
                    </Button>
                    {openModel && (
                        <Model modalClose={handleCloseModel} title="Contact Us" />
                    )}
                </Grid>
            </Grid>
        </Container>
    )
}

export default ContactUs
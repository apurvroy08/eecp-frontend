"use client"
import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Cards from "@/app/components/cards/page";
import AppointmentForm from "@/app/forms/book-appointment/page";

const hideiten = {
    display: 'none'
}

const Doctors = () => {
    return (
        <Container sx={{ mt: "160px", mb: "100px" }}>
            <Typography sx={{ color: "rgba(221, 37, 58, 1)", fontSize: "24px", fontWeight: 600 }}>Meet our Doctors</Typography>
            <Cards />
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Box sx={{ boxShadow: "2px 3px 11px #c2b3b3", p: "20px", borderRadius: "15px", width: { xs: "100%", sm: "60%" }, display: "flex", justifyContent: "center" }}>
                    <AppointmentForm hideiten={hideiten} />
                </Box>
            </Box>
        </Container>
    );
};
export default Doctors;
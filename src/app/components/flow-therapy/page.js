import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import therapy from "../../assets/image 38.png"
import therapyseated from "../../assets/doctors-therapy.png"
import Image from 'next/image'

const FlowTherapy = () => {
    return (
        <Container>
            <Grid container sx={{ mt: { xs: "40px", md: "0px" } }}>
                <Grid item xs={12} md={7} sx={{ display: "flex", justifyContent: "end" }}>
                    <Box sx={{ width: { xs: "100%", lg: "90%" }, position: "relative" }}>
                        <Image src={therapy} alt='therapy-img' style={{ height: "auto", width: "100%" }} />
                        <Box sx={{ display: { xs: "none", lg: "flex" }, position: "absolute", bottom: "44px", left: "-80px" }}>
                            <Image src={therapyseated} alt='' style={{ height: "auto", width: "220px" }} />
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={5} sx={{ padding: { xs: "20px 0px 0px", sm: "40px" } }}>
                    <Typography sx={{ fontSize: "25px", fontWeight: 600, color: "rgba(0, 0, 0, 1)", textShadow: "0 4px 4px rgba(0, 0, 0, 0.25)" }}>Is EECP Flow Therapy Right for You?</Typography>
                    <Typography sx={{ fontSize: "14px", paddingY: "32px" }}>Are you experiencing symptoms like chest pain, shortness of breath, or fatigue? Have you been diagnosed with angina, coronary heart disease, heart failure, or heart attack?</Typography>
                    <Typography sx={{ fontSize: "14px" }}>Take a 1-minute self-evaluation to see if EECP Flow Therapy is right for you. Together, we’ll set you on a path back to health and happiness. </Typography>
                </Grid>
            </Grid>
        </Container>
    )
}

export default FlowTherapy
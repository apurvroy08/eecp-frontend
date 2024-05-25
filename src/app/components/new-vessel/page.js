import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import vessel from "../../assets/vessel.png"
import Image from 'next/image'

const NewVessel = () => {
    return (
        <Container>
            <Grid container sx={{ paddingTop: { xs: "60px", sm: "100px" } }}>
                <Grid item xs={12} sm={6}>
                    <Typography sx={{ fontSize: { xs: "32px", sm: "38px", md: "46px" }, color: "#030303", textShadow: "0 4px 4px rgba(0, 0, 0, 0.25)", marginBottom: "36px" }}>A New Vessel for Heart Health</Typography>
                    <Typography sx={{ fontSize: "14px" }}>Flow Therapy (also known as EECP®) is widely considered the most effective non-invasive treatment for heart conditions such as angina, and symptoms associated with heart disease such as chest pain, shortness of breath, and fatigue.</Typography>
                    <Typography sx={{ fontSize: "14px", paddingY: "24px" }}>Using advanced counter pulsation technology synced up to one’s heartbeat, EECP Flow Therapy treatments increase the flow of oxygenated blood to the heart by increasing the volume and velocity of blood through the body.</Typography>
                    <Typography sx={{ fontSize: "14px" }}>In essence, it mimics physical exercise without straining the heart. This results in the creation of new collateral blood vessels that improve circulation, reduce the severity of symptoms, and enable patients to regain their quality of life–all without surgery.</Typography>
                </Grid>
                <Grid item xs={12} sm={6} sx={{ marginTop: { xs: "40px", sm: "0px" }, padding: "20px" }}>
                    <Image src={vessel} alt='vessel-img' style={{ height: "auto", width: "100%" }} />
                </Grid>
            </Grid>
        </Container>
    )
}

export default NewVessel
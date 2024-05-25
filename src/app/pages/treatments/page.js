import React from 'react'
import { Grid, Typography, Box, Container } from "@mui/material";
import Image from 'next/image'
import treatment1 from "../../assets/treatment1.png"
import treatment2 from "../../assets/treatment2.png"
import treatment3 from "../../assets/treatment3.png"

const Treatments = () => {
    return (
        <Box sx={{ marginTop: "140px" }}>
            <Typography sx={{ fontSize: { xs: "30px", sm: "40px" }, fontWeight: 700, textAlign: "center", paddingY: { xs: "20px", sm: "48px" } }}>Treatment with EECP Therapy</Typography>
            <Container>
                <Grid container spacing={6}>
                    <Grid item xs={12} md={6} sx={{ paddingRight: { xs: "0px", md: "60px" } }}>
                        <Typography sx={{ fontSize: { xs: "24px", sm: "32px" } }}>About Heart Failure Treatment with <span style={{ color: "#d60000" }}>EECP Therapy</span></Typography>
                        <Typography sx={{ fontSize: "14px", margin: "48px 0px 36px" }}>Heart failure is a condition in which the heart doesn’t function properly. The heart is unable to pump enough blood to meet the body’s needs. It can take place due to many conditions, including coronary artery disease, valve disease, and high blood pressure. It can also take place due to a heart attack or other injury to the heart.</Typography>
                        <Typography sx={{ fontSize: '14px' }}>People with heart failure often need to take medications to improve their health. Some people also have surgery to remove part of the heart or to change how it works. Heart failure is a condition in which Heart failure does not mean that the heart has stopped working. It means that the heart is not working as well as it should.</Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Image src={treatment1} alt='therapy-img' style={{ height: "auto", width: "100%" }} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Image src={treatment2} alt='therapy-img' style={{ height: "auto", width: "100%" }} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ paddingLeft: { xs: "0px", md: "40px" } }}>
                            <Typography sx={{ fontSize: { xs: "24px", sm: "32px" } }}>About Chest Pain Treatment
                                with <span style={{ color: "#d60000" }}>EECP Therapy</span></Typography>
                            <Typography sx={{ fontSize: "14px", marginY: "36px" }}>Heart failure is a condition in which the heart doesn’t function properly. The heart is unable to pump enough blood to meet the body’s needs. It can take place due to many conditions, including coronary artery disease, valve disease, and high blood pressure. It can also take place due to a heart attack or other injury to the heart.</Typography>
                            <Typography sx={{ fontSize: '14px' }}>People with heart failure often need to take medications to improve their health. Some people also have surgery to remove part of the heart or to change how it works. Heart failure is a condition in which Heart failure does not mean that the heart has stopped working. It means that the heart is not working as well as it should.</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ paddingRight: { xs: "0px", md: "60px" } }}>
                        <Typography sx={{ fontSize: { xs: "24px", sm: "32px" } }}>About Heart Failure Treatment with <span style={{ color: "#d60000" }}>EECP Therapy</span></Typography>
                        <Typography sx={{ fontSize: "14px", marginY: "36px" }}>Heart failure is a condition in which the heart doesn’t function properly. The heart is unable to pump enough blood to meet the body’s needs. It can take place due to many conditions, including coronary artery disease, valve disease, and high blood pressure. It can also take place due to a heart attack or other injury to the heart.</Typography>
                        <Typography sx={{ fontSize: '14px' }}>People with heart failure often need to take medications to improve their health. Some people also have surgery to remove part of the heart or to change how it works. Heart failure is a condition in which Heart failure does not mean that the heart has stopped working. It means that the heart is not working as well as it should.</Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Image src={treatment3} alt='therapy-img' style={{ height: "auto", width: "100%" }} />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Treatments
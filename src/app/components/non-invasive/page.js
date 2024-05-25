import { Box, Container, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import Image from 'next/image';
import doctor from "../../assets/doctor-girl.png"

const NonInvasive = () => {
    return (
        <Box sx={{ marginY: "60px" }}>
            <Container>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Box sx={{ width: { xs: "100%", md: "65%" }, display: "flex", flexDirection: "column", justifyContent: "center", }}>
                        <Typography sx={{ fontSize: "18px", color: "rgba(221, 37, 58, 1)", textAlign: "center" }}>EECP FLOW THERAPY</Typography>
                        <Typography sx={{ fontSize: { xs: "28px", sm: "34px" }, lineHeight: 1.4, textAlign: "center", pt: "12px" }}>The Non-invasive Treatment for Angina, Coronary Artery Disease & Heart Failure</Typography>
                    </Box>
                </Box>
                <Grid container sx={{ marginTop: "50px" }}>
                    <Grid item xs={12} sm={6} md={4} sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                        <Box sx={{ display: "flex" }}>
                            <Grid item xs={2}>
                                <Box sx={{ height: "34px", width: "34px", bgcolor: "#d60000", borderRadius: "50%", justifyContent: "center", alignItems: "center", display: "flex" }}>
                                    <CheckRoundedIcon sx={{ fontSize: "28px", color: "#fff" }} />
                                </Box>
                            </Grid>
                            <Grid item xs={10}>
                                <Typography sx={{ fontSize: "28px", color: "#d60000" }}>40,000+</Typography>
                                <Typography>Every year, Flow Therapy performs 40,000+ EECP treatments.</Typography>
                            </Grid>
                        </Box>
                        <Box sx={{ display: "flex" }}>
                            <Grid item xs={2}>
                                <Box sx={{ height: "34px", width: "34px", bgcolor: "#d60000", borderRadius: "50%", justifyContent: "center", alignItems: "center", display: "flex" }}>
                                    <CheckRoundedIcon sx={{ fontSize: "28px", color: "#fff" }} />
                                </Box>
                            </Grid>
                            <Grid item xs={10}>
                                <Typography sx={{ fontSize: "28px", color: "#d60000" }}>Trusted</Typography>
                                <Typography>Trusted by providers at leading institutions like Mayo Clinic, Cleveland Clinic, and Johns Hopkins.</Typography>
                            </Grid>
                        </Box>
                        <Box sx={{ display: "flex" }}>
                            <Grid item xs={2}>
                                <Box sx={{ height: "34px", width: "34px", bgcolor: "#d60000", borderRadius: "50%", justifyContent: "center", alignItems: "center", display: "flex" }}>
                                    <CheckRoundedIcon sx={{ fontSize: "28px", color: "#fff" }} />
                                </Box>
                            </Grid>
                            <Grid item xs={10}>
                                <Typography sx={{ fontSize: "28px", color: "#d60000" }}>Lasting</Typography>
                                <Typography>EECP Flow Therapy has clinically proven benefits that last for years after treatment.</Typography>
                            </Grid>
                        </Box>
                        <Box sx={{ display: "flex" }}>
                            <Grid item xs={2}>
                                <Box sx={{ height: "34px", width: "34px", bgcolor: "#d60000", borderRadius: "50%", justifyContent: "center", alignItems: "center", display: "flex" }}>
                                    <CheckRoundedIcon sx={{ fontSize: "28px", color: "#fff" }} />
                                </Box>
                            </Grid>
                            <Grid item xs={10}>
                                <Typography sx={{ fontSize: "28px", color: "#d60000" }}>400 +</Typography>
                                <Typography>There are more than 400 peer-reviewed research publications on EECP.</Typography>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item xs={4} sx={{ display: { xs: "none", md: "flex" }, justifyContent: "center" }}>
                        <Image src={doctor} alt='girl doctor' style={{ height: "auto", width: "300px" }} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                        <Box sx={{ display: "flex" }}>
                            <Grid item xs={2}>
                                <Box sx={{ height: "34px", width: "34px", bgcolor: "#d60000", borderRadius: "50%", justifyContent: "center", alignItems: "center", display: "flex" }}>
                                    <CheckRoundedIcon sx={{ fontSize: "28px", color: "#fff" }} />
                                </Box>
                            </Grid>
                            <Grid item xs={10}>
                                <Typography sx={{ fontSize: "28px", color: "#d60000" }}>1,000+</Typography>
                                <Typography>Flow Therapy's proven approach to EECP is trusted by more than 1,000 physicians.</Typography>
                            </Grid>
                        </Box>
                        <Box sx={{ display: "flex" }}>
                            <Grid item xs={2}>
                                <Box sx={{ height: "34px", width: "34px", bgcolor: "#d60000", borderRadius: "50%", justifyContent: "center", alignItems: "center", display: "flex" }}>
                                    <CheckRoundedIcon sx={{ fontSize: "28px", color: "#fff" }} />
                                </Box>
                            </Grid>
                            <Grid item xs={10}>
                                <Typography sx={{ fontSize: "28px", color: "#d60000" }}>88%</Typography>
                                <Typography>88% of patients see significant improvement without surgery.</Typography>
                            </Grid>
                        </Box>
                        <Box sx={{ display: "flex" }}>
                            <Grid item xs={2}>
                                <Box sx={{ height: "34px", width: "34px", bgcolor: "#d60000", borderRadius: "50%", justifyContent: "center", alignItems: "center", display: "flex" }}>
                                    <CheckRoundedIcon sx={{ fontSize: "28px", color: "#fff" }} />
                                </Box>
                            </Grid>
                            <Grid item xs={10}>
                                <Typography sx={{ fontSize: "28px", color: "#d60000" }}>Covered</Typography>
                                <Typography>EECP Flow Therapy is FDA approved, and covered by Medicare and all commercial insurances.</Typography>
                            </Grid>
                        </Box>
                        <Box sx={{ display: "flex" }}>
                            <Grid item xs={2}>
                                <Box sx={{ height: "34px", width: "34px", bgcolor: "#d60000", borderRadius: "50%", justifyContent: "center", alignItems: "center", display: "flex" }}>
                                    <CheckRoundedIcon sx={{ fontSize: "28px", color: "#fff" }} />
                                </Box>
                            </Grid>
                            <Grid item xs={10}>
                                <Typography sx={{ fontSize: "28px", color: "#d60000" }}>91%</Typography>
                                <Typography>Flow Therapy's approach to EECP has earned a customer satisfaction score of 91 out of 100.</Typography>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Divider sx={{ border: "1px solid #d60000" }} />
        </Box>

    )
}

export default NonInvasive
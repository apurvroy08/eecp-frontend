import { Box, Container, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import badimg from "../../assets/about-bad.png"
import experiance1 from "../../assets/experiance1.png"
import experiance2 from "../../assets/experiance2.png"
import founder from "../../assets/dr-deepak.png"
import hillone from "../../assets/Rectangle 157.png"

const AboutUs = () => {
    return (
        <Container>
            <Grid container spacing={4} sx={{ paddingY: "80px", }}>
                <Grid item xs={12} md={4}>
                    <Box sx={{ height: "auto", display: { xs: "flex", sm: "none", md: "flex" } }}>
                        <Image src={founder} alt='doctor' style={{ height: "100%", width: "100%" }} />
                    </Box>
                </Grid>
                <Grid item xs={12} md={8} sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <Typography sx={{ fontSize: "18px", fontWeight: 500, color: "#DD253A", }}>Meet our Founder</Typography>
                    <Typography sx={{ fontSize: "24px", fontWeight: 600, mb: "25px" }}>Dr. Deepak Chaturvedi</Typography>
                    <Typography sx={{ fontSize: "14px", color: "rgba(0, 0, 0, 1)" }}>Dr. Deepak Chaturvedi is one of the leading Cardiologists and Intensivists of Bhopal. He is Director of Akshaya Hospital, an exclusive heart and multispeciality centre, well known as a critical care centre over the last 25 years. Dr. Chaturvedi is in charge of the 20-bedded ICCU equipped with state-of-the-art equipment and 24-hour expert medical care.</Typography>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12} md={7} >
                    <Box sx={{ bgcolor: "#fdf0f0", p: "16px" }}>
                        <Grid container sx={{ bgcolor: "#fff" }}>
                            <Grid item xs={6}>
                                <Image src={experiance1} alt='doctor' style={{ height: "100%", width: "100%", marginTop: "-38px" }} />
                            </Grid>
                            <Grid item xs={6}>
                                <Image src={experiance2} alt='doctor' style={{ height: "100%", width: "100%", marginTop: "38px", marginLeft: "4px" }} />
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item xs={12} md={5} sx={{ mt: { xs: "50px", md: "0px" } }}>
                    <Box sx={{ paddingLeft: { xs: "0px", md: "30px" }, display: "flex", flexDirection: "column", gap: "8px" }}>
                        <Typography sx={{ fontSize: "18px", color: "#d60000", fontWeight: 500 }}>Why Choose Us</Typography>
                        <Typography sx={{ fontSize: "20px", fontWeight: 500 }}>Expertise and Experience</Typography>
                        <Typography sx={{ fontSize: "14px" }}>Highlight the qualifications and experience of your medical professionals who are skilled in EECP therapy. Showcase their credentials and achievements.</Typography>
                        <Typography sx={{ fontSize: "20px", fontWeight: 500 }}>Advanced Technology</Typography>
                        <Typography sx={{ fontSize: "14px" }}>If you have state-of-the-art equipment and technology, mention it. Emphasize how you use the latest machinery for EECP treatment to provide advanced care to patients.</Typography>
                        <Typography sx={{ fontSize: "20px", fontWeight: 500 }}>Personalized Care</Typography>
                        <Typography sx={{ fontSize: "14px" }}>Explain how you create personalized treatment plans for each patient based on their unique needs and condition.</Typography>
                        <Typography sx={{ fontSize: "20px", fontWeight: 500 }}>Evidence-Based Results</Typography>
                        <Typography sx={{ fontSize: "14px" }}>Share testimonials and success stories from previous patients to demonstrate the credibility and effectiveness of your center.</Typography>
                    </Box>
                </Grid>
            </Grid>
            <Grid container spacing={4} sx={{ marginTop: "80px" }}>
                <Grid item xs={12} md={7}>
                    <Image src={badimg} alt='about-bad-image' style={{ height: "auto", width: "100%" }} />
                </Grid>
                <Grid item xs={12} md={5}>
                    <Typography sx={{ fontSize: "24px", fontWeight: 600, marginBottom: "16px" }}>About Us</Typography>
                    <Typography sx={{ fontWeight: 600, color: "rgba(0, 0, 0, 1)" }}>Here at EECP Guru, where compassionate care and health meet, we extend a warm welcome to you. We are committed to helping you achieve better heart health, and we work hard toward this goal.</Typography>
                    <Typography sx={{ fontSize: "14px", paddingY: "16px" }}>EECP Guru's goal is to help each person find answers for heart-related problems. We think that a person's health is their most valuable asset, and we can help them improve their well-being by using our resources and knowledge</Typography>
                    <Typography sx={{ fontSize: "14px" }}>To overcome our illnesses, we unite as a family. We behave with empathy and trust toward our members and their families. Our objective is to provide a welcoming and loving environment for each individual.</Typography>
                </Grid>
            </Grid>
            <Grid container sx={{ mt: { sx: "0px", md: "100px" } }}>
                <Grid item xs={12} md={6} sx={{ display: { xs: "flex", sm: "none", md: "flex" } }}>
                    <Box sx={{ height: "auto", width: "100%", display: "flex", justifyContent: "center" }}>
                        <Image src={hillone} alt='Hill One' style={{ width: "100%", height: "100%" }} />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} sx={{ mt: { xs: "40px", sm: "0px" } }}>
                    <Box sx={{ pl: { xs: "0px", md: "40px" } }}>
                        <Box sx={{ borderTop: "2px solid red", maxWidth: "200px", pb: "20px" }}></Box>
                        <Typography sx={{ fontSize: { xs: "30px", sm: "34px" }, fontWeight: 600, lineHeight: 1.3 }}>It Started With a Mission to Heal One</Typography>
                        <Typography sx={{ fontSize: "14px", py: "36px" }}>In 2003, Flow Therapy president Michael Gratch decided it was time to take action. His grandfather had recently endured two bypass surgeries and still lacked the energy to do basic tasks like walking his garden. After scouring the medical world for solutions, Michael introduced his grandfather to EECP, and the results were nothing short of astounding.</Typography>
                        <Typography sx={{ fontSize: "14px" }}>Before treatments, he struggled to walk from his car to the front entrance of his appointment without chest pain. Once treatments were complete, he had enough energy to plant an entire vegetable garden completely free of pain (an inconceivable task just two months prior). And so it happened: what started as a dream to heal one person turned into a lifelong journey under the audacious thought that maybe we can put an end to heart complications for all.</Typography>
                        <Typography sx={{ fontSize: "14px", py: "36px" }}>Since opening our doors, we have witnessed countless stories just like Michael’s grandfather. Cases of patients who walk in hampered by severe heart conditions, and walk out with a new lease on life. There are even those without heart complications who use Flow Therapy to strengthen their heart, improve circulation, and lead a healthier lifestyle.</Typography>
                        <Typography sx={{ fontSize: "14px" }}>We encourage you to do your own research on EECP Flow Therapy to see for yourself how we can make a difference. Or even better, come by and Michael will personally show you around. Our doors are always open.</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container >
    )
}
export default AboutUs
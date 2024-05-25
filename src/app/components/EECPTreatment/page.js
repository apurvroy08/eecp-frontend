"use client"
import { Box, Button, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React, { useState } from 'react'
import yatin from "../../assets/Yatin.png"
import whitebg from "../../assets/Ellipse 296.png"
import squireboxes from "../../assets/rectangle 4.png"
import anuj from "../../assets/AnujShriv.png"
import Amarpal from "../../assets/Amarpal.png"
import subroto from "../../assets/Subroto.png"
import Bhageerath from "../../assets/Bhageerath.png"
import Rahulgupta from "../../assets/Rahulgupta.png"
import RK from "../../assets/RKMohanta.png"
import Sameer from "../../assets/Sameer.png"
import Deepak from "../../assets/Deepak.png"
import SKdas from "../../assets/SKdas.png"
import bulb from "../../assets/bulb 3.png"
import Model from '../model/page'
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";

const bannerImages = [
    {
        img: yatin,
        title: "Dr. YATIN WAGH",
        description: "Shree Vighnaharata Superspeciality Hospital, Nahata Nagar, Nakane Rd, Dhule, Maharashtra 424002"
    },
    {
        img: subroto,
        title: "Dr. Subroto mandal",
        description: "PL NO 13, Narmadapuram Rd, beside Oyo Hotel Gajanan, Sneh Nagar, Shri Ram Colony, Bhopal, Madhya Pradesh 462026"
    },
    {
        img: anuj,
        title: "Dr. Anuj Shrivastava",
        description: "A4, Floor-GRD, Plot -57, A, Amba Sadan, Jerbai Wadia Rd, Arunody Colony, Bhoiwada, Parel, Mumbai, Maharashtra 400012"
    },
    {
        img: Rahulgupta,
        title: "Dr. Rahul gupta",
        description: "Intercity CHS, Juhu Nagar, Sector-16, Vashi, Navi Mumbai, Maharashtra 400703"
    },
    {
        img:    Sameer,
        title: "Dr. Sameer Dani",
        description: "Next to I.O.C. Petrol Pump, Opp. GNFC info tower, Pakwan Cross Road, Sarkhej - Gandhinagar Hwy, Bodakdev, Ahmedabad ∙"
    },
    {
        img: Deepak,
        title: "Dr. Deepak Chaturvedi",
      
        description:"11, Main Rd No. 3, opposite Ekant Park, Rishi Nagar, Mannipuram, Char Imli, Bhopal, Madhya Pradesh 462016",
       
    },
    {
        img:SKdas,
        title: "Dr. S.k Das ",
       
        description: "PLOT NO- 76-77B,L- BLOCK, C1, Near Janakpuri, beside Ramkrishna school, chanakaya place 2, New Delhi, Delhi 110059",
     
    },
    {
        img: Bhageerath,
        title: "Dr. Bhageerath",
        
        description: "Central complex, circle, Sridevi mall rd, beside new VBR diagnostic Bus stand, beside udipi bhavan, Sai nagar. Hanamkonda, Telangana 506001",
   
    },
    {
        img:RK,
        title: "Dr. R.K Mohanta",
    
        description:" FRHP+7QP, CDA Sector VI, Cuttack, Odisha 753014",
       
    },   {
        img: Amarpal,
        title: "Dr. Amarpal Singh Gulati",

    description: " 82Q7+5FF Synergy Institute of Medical Sciences, Canal Rd, PO, Ballupur, Dehradun, Uttarakhand 248001",
      
    },
   

]


const EECPTreatment = () => {
    const [openModel, setOpenModel] = useState(false);

    const handleOpenModel = (title) => {
        setOpenModel(true);
    };

    const handleCloseModel = () => {
        setOpenModel(false);
    };
    return (
        <Box sx={{ bgcolor: "#9da0df" }}>
            <Swiper
                slidesPerView={1}
                centeredSlides={false}
                grabCursor={true}
                keyboard={{
                    enabled: true,
                }}
                breakpoints={{
                    1440: {
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                    },
                    1024: {
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                    },
                    700: {
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                    },
                }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                modules={[Keyboard, Scrollbar, Navigation, Pagination]}
                className="mySwiper"
            >
                {bannerImages.map((item, index) => (
                    <SwiperSlide style={{ display: "flex", justifyContent: "center" }} key={index}>
                        <Grid container sx={{ paddingTop: { xs: "40px", sm: "60px", md: "0px" }, position: "relative", mb: "-12px" }}>
                            <Grid item xs={12} md={6} sx={{ pt: "28px", position: "relative" }}>
                                <Box sx={{ position: 'absolute', left: "80px", top: "80px", display: { xs: "none", md: "flex" } }}>
                                    <Image src={bulb} alt='bulb img' style={{ height: "auto", width: "100px" }} />
                                </Box>
                                <Box sx={{ widht: "100%", height: "auto", justifyContent: "center", display: "flex", position: "relative", px: "20px" }}>
                                    <Image src={item.img} alt='roboImg' style={{ height: "400px", width: "370px" }} />
                                    <Box sx={{ position: "absolute", zIndex: "-1", display: { xs: "none", lg: "flex" }, justifyContent: "end", width: "100%", top: "58px", right: "40px" }}>
                                        <Image src={squireboxes} alt='' style={{ height: "auto", width: "400px" }} />
                                    </Box>
                                </Box>
                            </Grid>
                            <Box sx={{ position: "absolute", zIndex: "-10", left: "250px", display: { xs: "none", lg: "flex" } }}>
                                <Image src={whitebg} alt='bgimg' />
                            </Box>
                            <Grid item xs={12} md={6} sx={{ padding: { xs: "32px 20px", sm: "42px", md: "0px 40px", lg: "0px 70px" }, display: "flex", alignItems: "center" }}>
                                <Box>
                                    <Typography sx={{ fontSize: { xs: "32px", sm: "37px", md: "42px" }, fontWeight: 600, color: "#DD253A" }}>{item.title}</Typography>
                                    <Typography sx={{ fontSize: "20px", color: "#000", paddingY: "30px", fontWeight: 500 }}>{item.description}</Typography>
                                    <Box>
                                        <Button variant='contained' onClick={() => handleOpenModel("Contact Us")} sx={{ bgcolor: "#d60000", "&:hover": { bgcolor: "#d60000" } }}>
                                            <Typography className='button-text'>Contact Us</Typography>
                                        </Button>
                                    </Box>
                                </Box>
                                {openModel && (
                                    <Model modalClose={handleCloseModel} title="Contact Us" />
                                )}
                            </Grid>
                        </Grid>
                    </SwiperSlide>
                ))}
                <div className="swiper-button-prev" style={{ color: "#000" }}></div>
                <div className="swiper-button-next" style={{ color: "#000" }}></div>
            </Swiper>
        </Box>
    )
}

export default EECPTreatment
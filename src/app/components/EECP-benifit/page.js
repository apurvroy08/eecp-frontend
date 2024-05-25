"use client"
import { Box, Button, Card, CardContent, Grid, Typography , Link } from '@mui/material'
import React from 'react'
                    
import card1 from "../../assets/image 41.png"
import card2 from "../../assets/Rectangle 179863.png"
import card3 from "../../assets/image 45.png"
import card4 from "../../assets/image 46.png"
import card5 from "../../assets/image 41 (1).png"
import card6 from "../../assets/image 1507.png"
import card7 from "../../assets/image 1508.png"
import card8 from "../../assets/image 1509.png"
import card9 from "../../assets/image 1510.png"
import card10 from "../../assets/image 1511.png"
import card11 from "../../assets/image 1512.png"
import card12 from "../../assets/image 1513.png"
import card13 from "../../assets/image.png"
import card14 from "../../assets/image 1515.png"
// import card11 from "../../assets/image 41 (1).png"
// import card12 from "../../assets/image 41 (1).png"
// import card13 from "../../assets/image 41 (1).png"
import healthInsurance from "../../assets/health-insurance.png"
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
import { css } from '@emotion/react';
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";


const handleUrl = (url) => {
    window.open(url, '_blank');
}

const handlePdf = (pdfFileName) => {
    const pdfUrl = `${pdfFileName}`;
    window.open(pdfUrl, '_blank');
}

const cardData = [
    {
title:"Introduction to EECP Theraphy",
discription:"EECP (Enhanced External Counterpulsation) therapy is a non-invasive treatment for angina and heart failure. It involves compressing and releasing cuffs on the legs to increase blood flow to the heart.",
img:card1,
pdf: "V15-0198 R3 Introduction to EECP Therapy.pdf" // Update with your PDF file name
    },

    {
        title: "IU School of Medicine researchers shed new light on damaging effects of standard heart attack treatment",
        discription:
            "INDIANAPOLIS—A study led by Indiana University School of Medicine is challenging standard treatment methods used to prevent muscle damage during heart attack.",
        img: card2,
        url: "https://medicine.iu.edu/news/2022/01/IU-School-of-Medicine-researchers-shed-new-light-on-damaging-effects-of-standard-heart-attack-treatment"

        
    },
    {
        title: "Enhanced external counterpulsation: A unique treatment for the “No‐Option” refractory angina patient",
        discription:
            "The present study suggests that EECP is a safe and likely best available method of treatment for patients presenting with symptomatic CAD not amenable to further revascularization.",
        img: card3,
        url:'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7986429/'
    },
    {
        title: "Enhanced External Counterpulsation Offers Potential Treatment Option for Long COVID Patients",
        discription:
            "Enhanced External Counterpulsation (EECP) therapy shows promise as a treatment for Long COVID, improving blood flow and potentially alleviating symptoms in affected patients.",
        img: card13,
        url:'https://www.acc.org/About-ACC/Press-Releases/2022/02/14/14/25/Enhanced-External-Counterpulsation-Offers-Potential-Treatment-Option-for-Long-COVID-Patients'
    },

    {
      title:"The enduring mystery of heart disease The Clot Thickens"  ,
      discription:"The Clot Thickens explores the persistent enigma of heart disease, delving into its complex causes, prevention strategies, and the evolving scientific understanding behind this leading health threat.",
      pdf:"The Clot Thickens The Enduring Mystery of Heart Disease.pdf",
      img:card14,
    },
    {
        title: " 2013 ESCguidelines on the management of stable coronary artery disease—addenda",
        discription:
            "The 2013 ESC guidelines on stable coronary artery disease provide additional information and recommendations for its management, aiding in patient care and treatment decisions.",
        img: card4,
        pdf: "2013-ESC-guideline.pdf" 
    
    },
    {
        title: "EECP Therapy Bibliography",
        discription:
            "EECP therapy, or Enhanced External Counterpulsation therapy, involves applying external pressure to increase blood flow to the heart, improving cardiac function and relieving symptoms of angina and heart failure.",
        img: card5,
        pdf:"EECP-Bibliography.pdf"
    },
    {
        title: "International study of comparative Health Effective with medical and invasive apporaches - ISCHEMIA",
        discription:
            "ISCHEMIA study compares invasive and medical approaches for managing stable coronary artery disease, shedding light on optimal treatment strategies.",
        img: card6,
        pdf:"International Study of Comparative Health Effectiveness With Medical and Invasive Approaches - American College of Cardiology.pdf"
    },
    {
        title: "New Sequential External Counterpulsation for the Treatment of Acute Myocardial Infarction",
        discription:
            "Sequential External Counterpulsation (SECP) emerges as a promising therapy for Acute Myocardial Infarction, potentially revolutionizing treatment with its non-invasive approach and favorable outcomes.",
        img: card7,
        pdf:"J1984 - Zheng - New Sequential ECP for the Tx.pdf"
    },
    {
        title: "Efficacy of Enhanced External Counterpulsation in the Treatment of Angina Pectoris",
        discription:
            "Enhanced External Counterpulsation (EECP) shows promise in alleviating angina symptoms by enhancing blood flow to the heart through external compression.",
        img: card8,
        pdf:"J1992 - Lawson - Efficacy of EECP in the Tx of Angina Pectoris.pdf"
    },
    {
        title: "Role of enhanced external counterpulsation Vin angina treatment",
        discription:
            "Enhanced External Counterpulsation (EECP) is a non-invasive therapy for angina, improving blood flow to the heart by inflating and deflating cuffs on the legs synchronously with the heartbeat.",
        img: card9,
        pdf:"J1994 - Cohn - Role of EECP in Angina Tx.pdf"
    },
    {
        title: "Three-Year Sustained Benefit from Enhanced External Counterpulsation in Chronic Angina Pectoris",
        discription:
            "A study demonstrates long-term relief from chronic angina with Enhanced External Counterpulsation (EECP), indicating its effectiveness over three years.",
        img: card10,
        pdf:"J1995 - Lawson - Three-year Sustained Benefit from EECP in Chronic Angina Pectoris.pdf"
    },
    {
        title: "ENHANCED EXTERNAL COUNTERPULSATION IN THE TREATMENT AND REHABILITATION OF CORONARY PATIENTS IN INDONESIA",
        discription:
            "Utilizing Enhanced External Counterpulsation for Coronary Patients: Treatment and Rehabilitation in Indonesia.",
        img: card11,
        pdf:"J1995 - Sjukri - EECP in the Tx and Rehab of Coronary Pts in.pdf"
    },
    {
        title: "Can Angiographic Findings Predict Which Coronary Patients Will Benefit from Enhanced External Counterpulsation?",
        discription:
            "Angiographic findings may not reliably predict which coronary patients will benefit from enhanced external counterpulsation therapy.",
        img: card12,
        pdf:"J1996 - Lawson - Can Angiographic Findings Predict Which Coronary Pts Will Benefit from EECP.pdf"
    },
    
];

const swiperPaginationStyles = css`
.swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal {
    margin-top: 100px; 
 }
`;

const EECPBenefits = () => {
    return (
        <Box sx={{ borderTop: "1px solid #000", borderBottom: "1px solid #000", paddingY: "50px", marginTop: "40px" }} css={swiperPaginationStyles}>
            <Box sx={{ paddingX: { xs: "20px", lg: "100px" } }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={9}>
                        <Typography sx={{ color: "rgba(221, 37, 58, 1)" }}>EECP BENEFITS</Typography>
                        <Typography sx={{ fontSize: "20px", color: "rgba(0, 0, 0, 1)" }}>What Are the Benefits of EECP Treatment</Typography>
                        <Grid container sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "12px", marginTop: "26px" }}>
                            <Swiper
                                css={swiperPaginationStyles}
                                slidesPerView={1}
                                centeredSlides={false}
                                grabCursor={true}
                                keyboard={{
                                    enabled: true,
                                }}

                                breakpoints={{
                                    1440: {
                                        slidesPerView: 4,
                                        slidesPerGroup: 1,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                        slidesPerGroup: 1,
                                    },
                                    700: {
                                        slidesPerView: 2,
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
                                {cardData.map((item, index) => (
                                    <SwiperSlide style={{ display: "flex", justifyContent: "center" }} key={index}>
                                        <Card sx={{ maxWidth: 230 }}>
                                            <Image src={item.img} alt='card1' />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: "16px", color: "#d60000" }}>
                                                    {item.title}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary" sx={{ textOverflow: "ellipsis" }}>
                                                    {item.discription}
                                                </Typography>
                                                {item?.pdf && <Button onClick={() => handlePdf(item.pdf)}>read more...</Button>}
                                                {item?.url && <Button onClick={() => handleUrl(item.url)}>read more...</Button>}
                                            </CardContent>
                                        </Card>
                                    </SwiperSlide>
                                ))}
                                <div className="swiper-button-prev" style={{ color: "#000" }}></div>
                                <div className="swiper-button-next" style={{ color: "#000" }}></div>
                            </Swiper>
                        </Grid>
                    </Grid>
                    <Grid item xs={3} sx={{ display: { xs: "none", md: "flex" } }}>
                        <Image src={healthInsurance} alt='health Insurance' />
                    </Grid>
                </Grid>
            </Box>
        </Box >
    )
}

export default EECPBenefits
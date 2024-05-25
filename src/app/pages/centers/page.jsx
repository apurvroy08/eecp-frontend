import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import LetsChat from "@/app/components/lets-chat/page";

const Centers = () => {
  const data = [
    {
      title: "Dr. Anuj Shrivastava",
      desc: "A4, Floor-GRD, Plot -57, A, Amba Sadan, Jerbai Wadia Rd, Arunody Colony, Bhoiwada, Parel, Mumbai, Maharashtra 400012",
    },
    {
      title: "Dr. Deepak Chaturvedi",
      desc: "11, Main Rd No. 3, opposite Ekant Park, Rishi Nagar, Mannipuram, Char Imli, Bhopal, Madhya Pradesh 462016",
    },
    {
      title: "Dr. Rahul Gupta",
      desc: "Intercity CHS, Juhu Nagar, Sector-16, Vashi, Navi Mumbai, Maharashtra 400703",
    },
    {
      title: "Dr. Subroto Mandal",
      desc: "PL NO 13, Narmadapuram Rd, beside Oyo Hotel Gajanan, Sneh Nagar, Shri Ram Colony, Bhopal, Madhya Pradesh 462026",
    },
    {
      title: "Dr. Yatin Wagh",
      desc: "Shree Vighnaharata Superspeciality Hospital, Nahata Nagar, Nakane Rd, Dhule, Maharashtra 424002",
    },
    {
      title: "Dr. Sameer Dani",
      desc: "Next to I.O.C. Petrol Pump, Opp. GNFC info tower, Pakwan Cross Road, Sarkhej - Gandhinagar Hwy, Bodakdev, Ahmedabad ∙",
    },
    {
      title: "Dr. S.k Das",
      desc: " PLOT NO- 76-77B,L- BLOCK, C1, Near Janakpuri, beside Ramkrishna school, chanakaya place 2, New Delhi, Delhi 110059",
    },
    {
      title: "Dr. Bhageerath (Bhageerath Cardiac Care Center Healing Hearts)",
      desc: " Central complex, circle, Sridevi mall rd, beside new VBR diagnostic Bus stand, beside udipi bhavan, Sai nagar. Hanamkonda, Telangana 506001",
    },
    {
      title: "Dr. R.K Mohanta (DR RUSHEEKANTA MOHANTA. Cardiologist In Cuttack)",
        
      desc: " FRHP+7QP, CDA Sector VI, Cuttack, Odisha 753014",
    },
    {
      title: "Dr. Amarpal Singh Gulati ",
      desc: "82Q7+5FF Synergy Institute of Medical Sciences, Canal Rd, PO, Ballupur, Dehradun, Uttarakhand 248001",
    },
  ];
  return (
    <Box>
      <Container sx={{ paddingY: "64px" }}>
        <Typography
          sx={{
            fontSize: {xs:"30px", sm:"42px"},
            textAlign: "center",
            color: "#d60000",
            fontWeight: 600,
          }}
        >
          Our Center's
        </Typography>
        <Box
          sx={{
            p: { xs: "10px", sm: "20px", md: "50px" },
          }}
        >
          <Grid
            container
            className="grid-container"
            sx={{
              gap: "20px",
              mt: "40px",
            }}
          >
            {data.map((item, index) => (
              <Grid
                item
                className="grid-item"
                key={index}
                sx={{
                  width: { xs: "100%", sm: "100%", md: "320px" },
                  height: "auto",
                  p: "32px",
                  borderBottomRightRadius: "60px",
                  boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
                  transition: "transform 0.3s ease, background-color 0.3s ease",
                  "&:hover": {
                    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                    transform: "scale(1.05)",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: "24px",
                    fontWeight: "700",
                    lineHeight: "28px",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: "#2C2C2C",
                    lineHeight: "20px",
                    marginTop: "20px",
                  }}
                >
                  {item.desc}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
      <LetsChat />
    </Box>
  );
};

export default Centers;

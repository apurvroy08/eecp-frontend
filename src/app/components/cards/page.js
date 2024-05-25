import { Box, Typography, Divider } from "@mui/material";
import Image from "next/image";
import sameer from "../../assets/Sameerbg.jpg"
import anuj from "../../assets/Anujbg.jpg"
import subroto from "../../assets/Dr. Subroto mandal.jpg"
import yatin from "../../assets/yaatinwagh.jpg"
import Deepak from "../../assets/Deepakbg.jpg"
import SKdas from "../../assets/SKdasbg.jpg"
import Bhageerath from "../../assets/Bhagirathbg.jpg"
import Amarpal from "../../assets/Amarpalbg.jpg"
import Rahul from "../../assets/Rahulbg.jpg"
import RKMohanta from "../../assets/RKMohantabg.jpg"
const data = [
    {
        img: sameer,
        title: "Dr. Sameer Dani",
        subtitle: "Throat Specialist",
        add: "Next to I.O.C. Petrol Pump, Opp. GNFC info tower, Pakwan Cross Road, Sarkhej - Gandhinagar Hwy, Bodakdev, Ahmedabad.",
        phone: "+1-904-321-7575",
        email: "Skand78@gmail.com",
    },
    {
        img: anuj,
        title: "Dr. Anuj Shrivastava",
        subtitle: "Throat Specialist",
        add: "A4, Floor-GRD, Plot -57, A, Amba Sadan, Jerbai Wadia Rd, Arunody Colony, Bhoiwada, Parel, Mumbai, Maharashtra 400012",
        phone: "+1-904-321-7575",
        email: "Skand78@gmail.com",
    },
    {
        img: Rahul,
        title: "Dr. Rahul gupta",
        subtitle: "Throat Specialist",
        add: "Intercity CHS, Juhu Nagar, Sector-16, Vashi, Navi Mumbai, Maharashtra 400703",
        phone: "+1-904-321-7575",
        email: "Skand78@gmail.com",
    },
    {
        img: yatin,
        title: "Dr. Yatin Wagh",
        subtitle: "Throat Specialist",
        add: "Shree Vighnaharata Superspeciality Hospital, Nahata Nagar, Nakane Rd, Dhule, Maharashtra 424002",
        phone: "+1-904-321-7575",
        email: "Skand78@gmail.com",
    },
    {
        img: subroto,
        title: "Dr. Subroto Mandal",
        subtitle: "Throat Specialist",
        add: "PL NO 13, Narmadapuram Rd, beside Oyo Hotel Gajanan, Sneh Nagar, Shri Ram Colony, Bhopal, Madhya Pradesh 462026",
        phone: "+1-904-321-7575",
        email: "Skand78@gmail.com",
    },
    {
        img: Deepak,
        title: "Dr. Deepak Chaturvedi",
        subtitle: "Throat Specialist",
        add: "11, Main Rd No. 3, opposite Ekant Park, Rishi Nagar, Mannipuram, Char Imli, Bhopal, Madhya Pradesh 462016",
        phone: "",
        email: "",
    },
    {
        img: SKdas,
        title: "Dr. S.k Das ",
        subtitle: "Throat Specialist",
        add: "PLOT NO- 76-77B,L- BLOCK, C1, Near Janakpuri, beside Ramkrishna school, chanakaya place 2, New Delhi, Delhi 110059",
        phone: "",
        email: "",
    },
    {
        img:Bhageerath ,
        title: "Dr. Bhageerath",
        subtitle: "Throat Specialist",
        add: "Central complex, circle, Sridevi mall rd, beside new VBR diagnostic Bus stand, beside udipi bhavan, Sai nagar. Hanamkonda, Telangana 506001",
        phone: "",
        email: "",
    },
    {
        img:  RKMohanta,
        title: "Dr. R.K Mohanta",
        subtitle: "Throat Specialist",
        add: " FRHP+7QP, CDA Sector VI, Cuttack, Odisha 753014",
        phone: "",
        email: "",
    },   {
        img:Amarpal,
        title: "Dr. Amarpal Singh",
        subtitle: "Throat Specialist",
        add: " 82Q7+5FF Synergy Institute of Medical Sciences, Canal Rd, PO, Ballupur, Dehradun, Uttarakhand 248001",
        phone: "",
        email: "",
    },
   

];
const Cards = () => {
    return (
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "15px",
            mb: "100px",
        }}>
            {data.map((item, index) => (
                <Box
                    key={index}
                    sx={{
                        width: "275px",
                        minHeight: "440px",
                        mt: "40px"
                    }}
                >
                    <Box
                        sx={{
                            width: "100%",
                            height: "300px",
                        }}
                    >
                        <Image
                            src={item.img}
                            alt="about-bad-image"
                            style={{ height: "100%", width: "100%" }}
                        />
                    </Box>
                    <Box
                        sx={{
                            p: "4px 30px 10px",
                            border: "1px solid #AFAFAF",
                            borderTop: "none",
                            height: "30%"
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: "18px",
                                fontWeight: "500",
                                color: "#DD253A",
                                lineHeight: "30px",
                            }}
                        >
                            {item.title}
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "14px",
                                fontWeight: "400",
                                color: "#000000",
                                lineHeight: "21px",
                            }}
                        >
                            {item.subtitle}
                        </Typography>
                        <Divider sx={{ my: "12px" }} />
                        <Typography
                            sx={{
                                fontSize: "11px",
                                fontWeight: "400",
                                color: "#000000",
                                lineHeight: "14px",
                            }}
                        >
                            {item.add}
                        </Typography>
                    </Box>
                </Box>
            ))}
        </Box>
    );
};
export default Cards;
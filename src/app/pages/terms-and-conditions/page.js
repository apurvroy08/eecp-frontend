import { Box, Container, Link, Typography } from "@mui/material";
import React from 'react'

const TermsAndConditions = () => {
    return (
        <Box component={"div"}>
            <Box
                sx={{
                    padding: { xs: "40px 12px", sm: "80px 100px 40px" },
                    background:
                        "linear-gradient(-45deg,rgba(147,26,222,.83),rgba(28,206,234,.82))",
                }}
            >
                <Container>
                    <Typography
                        variant="h3"
                        sx={{ fontWeight: 500, color: "#fff", paddingTop: { sm: "80px" } }}
                    >
                        Terms and Conditions
                    </Typography>
                </Container>
            </Box>
            <Container>
                <Box sx={{ paddingY: "60px", display: "flex", flexDirection: "column", gap: "50px" }}>

                    <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                        <Typography variant="h5">
                            Introduction
                        </Typography>
                        <Typography variant='body2'>
                            Welcome to Guru EECP! These Terms and Conditions ("Terms") govern your use of our website and services. By accessing or using our website, you agree to comply with these Terms. If you do not agree with any part of these Terms, please do not use our website.
                        </Typography>
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                        <Typography variant="h5">
                            Use of Website
                        </Typography>
                        <Typography variant="body2">
                            You may use our website for lawful purposes only. You agree not to use our website in any way that violates applicable laws or regulations or infringes upon the rights of others.
                        </Typography>
                        <Typography variant='body2'>
                            You are solely responsible for maintaining the confidentiality of your account information and password and for restricting access to your computer or device.
                        </Typography>
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                        <Typography variant="h5">
                            Intellectual Property
                        </Typography>
                        <Typography variant="body2">
                            The content on our website, including text, graphics, logos, images, and software, is protected by copyright and other intellectual property laws.
                        </Typography>
                        <Typography variant="body2">
                            You may not reproduce, modify, distribute, or display any content from our website without our prior written consent.
                        </Typography>
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                        <Typography variant="h5">
                            Links to Third-Party Websites
                        </Typography>
                        <Typography variant="body2">
                            Our website may contain links to third-party websites for your convenience. We do not endorse or control these websites and are not responsible for their content or privacy practices.
                        </Typography>
                        <Typography variant="body2">
                            Your use of third-party websites is at your own risk. We recommend reviewing the terms and privacy policies of these websites before using them.
                        </Typography>
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                        <Typography variant="h5">
                            Changes to Terms and Conditions
                        </Typography>
                        <Typography variant="body2">
                            We reserve the right to update or modify these Terms at any time without prior notice. Your continued use of our website after any changes indicates your acceptance of the revised Terms.
                        </Typography>
                        <Typography variant="body2">
                            You agree to indemnify and hold Guru EECP harmless from any claims, damages, liabilities, costs, or expenses (including legal fees) arising out of or related to your use of our website or services or your violation of these Terms.
                        </Typography>
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                        <Typography variant="h5">
                            Contact Us
                        </Typography>
                        <Typography variant="body2">
                            If you have any questions or concerns about these Terms and Conditions, please contact us at
                        </Typography>
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                        <Typography variant="body2">
                            <span style={{ fontWeight: "bold" }}>Guru EECP</span>
                        </Typography>
                        <Typography variant="body2">
                            #24, A Block, New Market
                        </Typography>
                        <Typography variant="body2">
                            TT Nagar, Bhopal - 462020
                        </Typography>
                        <Typography variant="body2">
                            <Link underline="none" color="#000" fontWeight="600">
                                gurueecp@gmail.com
                            </Link>
                        </Typography>
                    </Box>
                </Box>
            </Container >
        </Box >
    );
}

export default TermsAndConditions

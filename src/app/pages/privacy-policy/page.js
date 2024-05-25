import { Box, Container, Link, Typography } from '@mui/material'
import React from 'react'

const PrivacyPolicy = () => {
    return (
        <Box component={"div"}>
            <Box
                sx={{
                    padding: { xs: "40px 16px", sm: "80px 100px 40px" },
                    background:
                        "linear-gradient(-45deg,rgba(147,26,222,.83),rgba(28,206,234,.82))",
                }}
            >
                <Container>
                    <Typography
                        variant="h3"
                        sx={{ fontWeight: 500, color: "#fff", paddingTop: { sm: "80px" } }}
                    >
                        Privacy Policy
                    </Typography>
                </Container>
            </Box>
            <Container>
                <Box sx={{ paddingY: "60px", display: "flex", flexDirection: "column", gap: "50px" }}>

                    <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                        <Typography variant="h5">
                            Privacy Policy
                        </Typography>
                        <Typography variant='body2'>
                            At Guru EECP, protecting your privacy and maintaining the confidentiality of your personal information is paramount. We collect information about you when you visit our website or engage with our staff to ensure we can provide you with the highest quality of service tailored to your needs. This may include your name, address, age, gender, medical history, or any other information necessary to facilitate your treatment. Rest assured, we handle this information with the utmost care and respect for your privacy.
                        </Typography>
                        <Typography variant='body2'>
                            Your trust is of utmost importance to us, and we want you to feel confident that your personal information is safe and secure. We never disclose your information to third parties unless required by law or necessary to fulfill our obligations in providing you with our services. Additionally, we utilize industry-standard security measures to protect your data from unauthorized access, disclosure, alteration, or destruction.
                        </Typography>
                        <Typography variant='body2'>
                            Your trust is of utmost importance to us, and we want you to feel confident that your personal information is safe and secure. We never disclose your information to third parties unless required by law or necessary to fulfill our obligations in providing you with our services. Additionally, we utilize industry-standard security measures to protect your data from unauthorized access, disclosure, alteration, or destruction.
                        </Typography>
                        <Typography>
                            Your privacy is important to us, and we are committed to transparency in our data practices. We may update this Privacy Policy periodically to reflect changes in our operations or regulatory requirements. Any updates will be posted on our website, and we encourage you to review this policy regularly.
                        </Typography>
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                        <Typography variant="h5">
                            Consent
                        </Typography>
                        <Typography variant="body2">
                            By engaging with Guru EECP, you acknowledge and consent to the collection, use, and disclosure of your personal information as outlined in this Privacy Policy. We collect this information to provide you with the highest quality of care and personalized services. Your name, address, age, gender, and medical history are essential for tailoring our treatment protocols to your individual needs, ensuring the most effective outcomes.
                        </Typography>
                        <Typography variant='body2'>
                            Rest assured, we are committed to protecting the confidentiality of your personal information. We do not disclose your information to any third parties unless necessary to provide you with our services or required by law. Additionally, we employ stringent security measures to safeguard your data against unauthorized access, disclosure, alteration, or destruction.
                        </Typography>
                        <Typography variant='body2'>
                            UIf you have any questions or concerns about our Privacy Policy or our handling of your personal information, please do not hesitate to contact us. Your privacy and satisfaction are of the utmost importance to us, and we are here to address any inquiries or feedback you may have.
                        </Typography>
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                        <Typography variant="h5">
                            Data Security
                        </Typography>
                        <Typography variant="body2">
                            At Guru EECP, we take data security seriously and have implemented robust measures to safeguard your personal information. We understand the sensitive nature of the information you provide us, and we are committed to ensuring its confidentiality and integrity.
                        </Typography>
                        <Typography variant="body2">
                            To protect your data from unauthorized access, disclosure, alteration, or destruction, we employ a multi-layered approach to security. Our systems utilize industry-standard encryption protocols to secure data transmission, both internally and externally. Access to your personal information is restricted to authorized personnel who require it to perform their duties, and all staff members undergo regular training on data protection best practices.
                        </Typography>
                        <Typography variant="body2">
                            Your trust is essential to us, and we are dedicated to earning and maintaining it through our unwavering commitment to data security and privacy. If you have any questions or concerns about our data security practices, please do not hesitate to contact us.
                        </Typography>
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                        <Typography variant="h5">
                            Termination
                        </Typography>
                        <Typography variant="body2">
                            These Terms and Conditions remain in effect for all use made of
                            this Site unless specifically terminated by <span style={{ fontWeight: "bold" }}>Guru EECP</span>.
                            <span style={{ fontWeight: "bold" }}> Guru EECP</span> may amend or terminate these Terms and Conditions
                            at any time for any reason, with or without notice. Upon
                            termination, You must destroy all materials obtained from this
                            Site and all copies made thereof.
                        </Typography>
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                        <Typography variant="h5">
                            Changes To This Privacy Policy
                        </Typography>
                        <Typography variant="body2">
                            Please note that this privacy policy may change from time to time.
                            If we make material changes that will affect personal information
                            we have already collected from You, we will make reasonable
                            efforts to notify You of the changes and to give You the
                            opportunity to amend or cancel your registration.
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
    )
}

export default PrivacyPolicy
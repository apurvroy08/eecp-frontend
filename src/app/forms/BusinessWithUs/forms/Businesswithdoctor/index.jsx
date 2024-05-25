import * as React from 'react';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { Grid, InputAdornment, Checkbox } from '@mui/material';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import CustomButton from "@/app/buttons/custom-button/page";
import LocationCityIcon from '@mui/icons-material/LocationCity';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    contact: Yup.string().required('Contact is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    city: Yup.string().required('City is required'),
    dailyOpd: Yup.string().required('Daily OPD is required'),
    department: Yup.string().required('Department is required'),
    whyEecp: Yup.string().required('This field is required'),
    businessExperience: Yup.string().required('This field is required'),
    eecpExperience: Yup.string().required('This field is required'),
    understandEecp: Yup.string().required('This field is required'),
    checkbox: Yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
  });
const Businesswithdoctors = () => {
 
  
    const formik = useFormik({
      initialValues: {
        name: '',
        contact: '',
        email: '',
        city: '',
        dailyOpd: '',
        department: '',
        whyEecp: '',
        businessExperience: '',
        eecpExperience: '',
        understandEecp: '',
        checkbox: false,
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
        console.log('Form values', values);
      },
    });
  return (
    <div>

<form onSubmit={formik.handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Typography sx={{ fontSize: "14px", paddingBottom: "10px" }}>
                Name *
              </Typography>
              <TextField
                id="name"
                name="name"
                type="text"
                variant="outlined"
                fullWidth
                placeholder="Name"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircleIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& input": {
                    padding: "17px 8px",
                  },
                  "& .MuiFormHelperText-root": {
                    margin: 0,
                  },
                  bgcolor: "#ebf6fd",
                }}
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography sx={{ fontSize: "14px", paddingBottom: "10px" }}>
                Contact *
              </Typography>
              <TextField
                id="contact"
                name="contact"
                type="tel"
                variant="outlined"
                fullWidth
                placeholder="Phone"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PhoneIphoneIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& input": {
                    padding: "17px 8px",
                  },
                  "& .MuiFormHelperText-root": {
                    margin: 0,
                  },
                  bgcolor: "#ebf6fd",
                }}
                value={formik.values.contact}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.contact && Boolean(formik.errors.contact)}
                helperText={formik.touched.contact && formik.errors.contact}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography sx={{ fontSize: "14px", paddingBottom: "10px" }}>
                Email *
              </Typography>
              <TextField
                id="email"
                name="email"
                type="email"
                variant="outlined"
                fullWidth
                placeholder="Email"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AlternateEmailIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& input": {
                    padding: "17px 8px",
                  },
                  "& .MuiFormHelperText-root": {
                    margin: 0,
                  },
                  bgcolor: "#ebf6fd",
                }}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography sx={{ fontSize: "14px", paddingBottom: "10px" }}>
                City *
              </Typography>
              <TextField
                id="city"
                name="city"
                type="text"
                variant="outlined"
                fullWidth
                placeholder="City"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocationCityIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& input": {
                    padding: "17px 8px",
                  },
                  "& .MuiFormHelperText-root": {
                    margin: 0,
                  },
                  bgcolor: "#ebf6fd",
                }}
                value={formik.values.city}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.city && Boolean(formik.errors.city)}
                helperText={formik.touched.city && formik.errors.city}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography sx={{ fontSize: "14px", paddingBottom: "10px" }}>
                What is your daily OPD? *
              </Typography>
              <TextField
                id="dailyOpd"
                name="dailyOpd"
                type="text"
                variant="outlined"
                fullWidth
                placeholder="Daily OPD"
                sx={{
                  "& input": {
                    padding: "17px 8px",
                  },
                  "& .MuiFormHelperText-root": {
                    margin: 0,
                  },
                  bgcolor: "#ebf6fd",
                }}
                value={formik.values.dailyOpd}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.dailyOpd && Boolean(formik.errors.dailyOpd)}
                helperText={formik.touched.dailyOpd && formik.errors.dailyOpd}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography sx={{ fontSize: "14px", paddingBottom: "10px" }}>
                Department *
              </Typography>
              <TextField
                id="department"
                name="department"
                type="text"
                variant="outlined"
                fullWidth
                placeholder="Department"
                sx={{
                  "& input": {
                    padding: "17px 8px",
                  },
                  "& .MuiFormHelperText-root": {
                    margin: 0,
                  },
                  bgcolor: "#ebf6fd",
                }}
                value={formik.values.department}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.department && Boolean(formik.errors.department)}
                helperText={formik.touched.department && formik.errors.department}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography sx={{ fontSize: "14px", paddingBottom: "10px" }}>
                Why you choose EECP? *
              </Typography>
              <TextField
                id="whyEecp"
                name="whyEecp"
                type="text"
                variant="outlined"
                fullWidth
                sx={{
                  "& input": {
                    padding: "17px 8px",
                  },
                  "& .MuiFormHelperText-root": {
                    margin: 0,
                  },
                  bgcolor: "#ebf6fd",
                }}
                value={formik.values.whyEecp}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.whyEecp && Boolean(formik.errors.whyEecp)}
                helperText={formik.touched.whyEecp && formik.errors.whyEecp}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography sx={{ fontSize: "14px", paddingBottom: "10px" }}>
                Do you have any business experience? *
              </Typography>
              <TextField
                id="businessExperience"
                name="businessExperience"
                type="text"
                variant="outlined"
                fullWidth
                sx={{
                  "& input": {
                    padding: "17px 8px",
                  },
                  "& .MuiFormHelperText-root": {
                    margin: 0,
                  },
                  bgcolor: "#ebf6fd",
                }}
                value={formik.values.businessExperience}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.businessExperience && Boolean(formik.errors.businessExperience)}
                helperText={formik.touched.businessExperience && formik.errors.businessExperience}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography sx={{ fontSize: "14px", paddingBottom: "10px" }}>
                Do you have any experience in EECP TREATMENT OR in EECP Patients? *
              </Typography>
              <TextField
                id="eecpExperience"
                name="eecpExperience"
                type="text"
                variant="outlined"
                fullWidth
                sx={{
                  "& input": {
                    padding: "17px 8px",
                  },
                  "& .MuiFormHelperText-root": {
                    margin: 0,
                  },
                  bgcolor: "#ebf6fd",
                }}
                value={formik.values.eecpExperience}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.eecpExperience && Boolean(formik.errors.eecpExperience)}
                helperText={formik.touched.eecpExperience && formik.errors.eecpExperience}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography sx={{ fontSize: "14px", paddingBottom: "10px" }}>
                What do you understand EECP TREATMENT *
              </Typography>
              <TextField
                id="understandEecp"
                name="understandEecp"
                type="text"
                variant="outlined"
                fullWidth
                sx={{
                  "& input": {
                    padding: "17px 8px",
                  },
                  "& .MuiFormHelperText-root": {
                    margin: 0,
                  },
                  bgcolor: "#ebf6fd",
                }}
                value={formik.values.understandEecp}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.understandEecp && Boolean(formik.errors.understandEecp)}
                helperText={formik.touched.understandEecp && formik.errors.understandEecp}
              />
            </Grid>
          </Grid>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              my: "20px",
            }}
          >
            <Checkbox
              id="checkbox"
              name="checkbox"
              checked={formik.values.checkbox}
              onChange={formik.handleChange}
              sx={{ paddingLeft: 0 }}
              size="small"
            />
            <Typography sx={{ color: "#243771", fontSize: "11px" }}>
              By continuing, I agree to EECP Guru{" "}
              <a href="/pages/privacy-policy">Privacy Policy</a> and{" "}
              <a href="/pages/terms-and-conditions">Terms & Conditions</a>.
            </Typography>
          </Box>
          <CustomButton type="submit" name="Submit" />
        </form>

    </div>
  )
}

export default Businesswithdoctors
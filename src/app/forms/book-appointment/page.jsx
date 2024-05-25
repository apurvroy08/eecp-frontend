"use client"
import CustomButton from "@/app/buttons/custom-button/page";
import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  FormHelperText,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { createAppoinments, getCenterList } from "@/app/apis";
import { getAvailableDate } from "@/app/apis";
import { getAvailableTime } from "@/app/apis";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import MaleIcon from "@mui/icons-material/Male";
import { useFormik } from "formik";
import * as yup from "yup";

const formHelperTextStyle = {
  margin: 0,
  color: "red",
  fontSize: "12px",
};

const AppointmentForm = ({ onClose }) => {
  const [centerList, setCenterList] = useState("");
  const [availableDateList, setAvailableDateList] = useState("");
  const [availableTimeByDate, setAvailableTimeByDate] = useState("");
  const [dateId, setDateId] = useState("");

  const fetchCenterListData = async () => {
    const center = await getCenterList();
    setCenterList(center);
  };

  const fetchAvailableDate = async () => {
    const date = await getAvailableDate();
    setAvailableDateList(date);
  };

  useEffect(() => {
    fetchCenterListData();
    fetchAvailableDate();
  }, []);

  const handleTime = async (id) => {
    try {
      const timeData = await getAvailableTime(id);
      setAvailableTimeByDate(timeData);
    } catch (error) {
      console.log("Error fetching available time:", error);
    }
  };

  const initialValues = {
    name: "",
    phone: "",
    age: "",
    center: null,
    date: "",
    time: null,
  };

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .matches(/^[A-Za-z\s]*$/, "Please enter a valid name")
      .min(3, "Name must be at least 3 characters")
      .max(20, "Name must be at most 20 characters")
      .required("Name is required"),
    phone: yup
      .number()
      .required("Please enter number")
      .test("is-ten-digits", "Number must be exactly 10 digits", (value) => {
        if (value) {
          const stringValue = String(value);
          return stringValue.length === 10;
        }
        return false;
      }),
    age: yup
      .number()
      .required("Please enter age")
      .min(1, "Age must be at least 1")
      .max(120, "Age must be at most 120"),
    center: yup.object().required("Center is required"),
    date: yup.object().required("Date is required"),
    time: yup.object().required("Time is required"),
  });

  const onSubmit = async (values, { resetForm }) => {
    const formData = {
      name: values.name,
      age: values.age,
      phone: values.phone,
      slot_id: values.time.slot_id,
      center_id: values.center.center_id,
    };

    resetForm();
    await createAppoinments(formData);
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: onSubmit,
  });

  return (
    <Box>
      <Box fullWidth sx={{ display: "flex", justifyContent: "end" }}>
        {onClose && (
          <Button
            onClick={onClose}
            sx={{
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
          >
            <HighlightOffIcon sx={{ fontSize: "32px", color: "#9d3892" }} />
          </Button>
        )}
      </Box>
      <Typography sx={{ fontSize: "24px", textAlign: "center" }}>
        Book an Appointment
      </Typography>
      <Typography
        sx={{ textAlign: "center", fontSize: "13px", padding: "10px 0px 38px" }}
      >
        Ready to prioritize your cardiovascular health? Book an appointment for cutting-edge EECP treatment at EECP Guru. Our expert team combines innovative technology with compassionate care to provide personalized solutions for all your cardiovascular concerns.
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography sx={{ fontSize: "14px", paddingBottom: "10px" }}>
              Your Name *
            </Typography>
            <TextField
              id="nameField"
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
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
            />
            {formik.touched.name && formik.errors.name && (
              <FormHelperText sx={formHelperTextStyle}>
                {formik.errors.name}
              </FormHelperText>
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography sx={{ fontSize: "14px", paddingBottom: "10px" }}>
              Your Phone *
            </Typography>
            <TextField
              id="numberField"
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
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
            />
            {formik.touched.phone && formik.errors.phone && (
              <FormHelperText sx={formHelperTextStyle}>
                {formik.errors.phone}
              </FormHelperText>
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography sx={{ fontSize: "14px", paddingBottom: "10px" }}>
              Age *
            </Typography>
            <TextField
              id="ageField"
              type="tel"
              variant="outlined"
              fullWidth
              placeholder="Age"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MaleIcon />
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
              name="age"
              value={formik.values.age}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.age && Boolean(formik.errors.age)}
            />
            {formik.touched.age && formik.errors.age && (
              <FormHelperText sx={formHelperTextStyle}>
                {formik.errors.age}
              </FormHelperText>
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography sx={{ fontSize: "14px", paddingBottom: "10px" }}>
              Center *
            </Typography>
            <Autocomplete
              fullWidth
              disablePortal
              id="center"
              options={centerList}
              onBlur={formik.handleBlur}
              value={formik.values.center}
              onChange={(event, value) => formik.setFieldValue("center", value)}
              getOptionLabel={(option) => option.name}
              renderInput={(params) => (
                <TextField
                  sx={{ bgcolor: "#ebf6fd" }}
                  {...params}
                  label={params.inputProps?.value ? "" : "Choose Center"}
                />
              )}
            />
            {formik.touched.center && formik.errors.center && (
              <FormHelperText sx={formHelperTextStyle}>
                {formik.errors.center}
              </FormHelperText>
            )}
          </Grid>
          <Grid item xs={12}>
            <Typography sx={{ fontSize: "14px", paddingBottom: "10px" }}>
              Choose Slot *
            </Typography>
            <Box sx={{ display: "flex", flexWrap:"wrap", gap: "24px", width: "100%" }}>
              <Box sx={{ width: "100%" }}>
                <Autocomplete
                  id="date"
                  options={
                    Array.isArray(availableDateList) ? availableDateList : []
                  }
                  getOptionLabel={(option) => option.slot_dates}
                  value={
                    Array.isArray(availableDateList)
                      ? availableDateList.find(
                          (item) =>
                            item.slot_dates_id ===
                            formik.values.date?.slot_dates_id
                        ) || null
                      : null
                  }
                  onChange={(event, value) => {
                    setDateId(value?.slot_dates_id);
                    handleTime(value?.slot_dates_id);
                    formik.setFieldValue("date", value);
                  }}
                  onBlur={formik.handleBlur}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      sx={{ bgcolor: "#ebf6fd" }}
                      label="Choose Date"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />
                {formik.touched.date && formik.errors.date && (
                  <FormHelperText sx={formHelperTextStyle}>
                    {formik.errors.date}
                  </FormHelperText>
                )}
              </Box>
              <Box sx={{ width: "100%" }}>
                <Autocomplete
                  id="time"
                  options={
                    Array.isArray(availableTimeByDate)
                      ? availableTimeByDate
                      : []
                  }
                  getOptionLabel={(option) => option.start_slot_time}
                  value={formik.values.time}
                  onChange={(event, value) => {
                    formik.setFieldValue("time", value);
                  }}
                  onBlur={formik.handleBlur}
                  noOptionsText="Please select a date first."
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      sx={{ bgcolor: "#ebf6fd" }}
                      label="Choose Time"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />
                {formik.touched.time && formik.errors.time && (
                  <FormHelperText sx={formHelperTextStyle}>
                    {formik.errors.time}
                  </FormHelperText>
                )}
              </Box>
            </Box>
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
            checked={formik.values.checkbox}
            name="checkbox"
            onChange={() =>
              formik.setFieldValue("checkbox", !formik.values.checkbox)
            }
            sx={{ paddingLeft: 0 }}
            size="small"
            error={formik.touched.checkbox && !formik.values.checkbox}
          />
          <Typography sx={{ color: "#243771", fontSize: "11px" }}>
            By continuing, I agree to EECP Guru{" "}
            <a href="/pages/privacy-policy">Privacy Policy</a> and{" "}
            <a href="/pages/terms-and-conditions">Terms & Conditions</a>.
          </Typography>
        </Box>
        <CustomButton
          disabled={!formik.values.checkbox}
          click={formik.handleSubmit}
          name="Book Appointment"
        />
      </form>
    </Box>
  );
};

export default AppointmentForm;

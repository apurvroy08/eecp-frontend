"use client"
import CustomButton from "@/app/buttons/custom-button/page";
import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  FormHelperText,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { getCenterList, createContact } from "@/app/apis";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useFormik } from "formik";
import * as yup from "yup";

const ContactUs = ({ onClose }) => {
  const [centerList, setCenterList] = useState("");

  const fetchCenterListData = async () => {
    const center = await getCenterList();
    setCenterList(center);
  };

  const initialValues = {
    name: "",
    phone: "",
    center: null,
    message: ""
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
    center: yup.object().required("Center is required"),
  });

  const onSubmit = async (values, { resetForm }) => {
    const formData = {
      name: values.name,
      phone: values.phone,
      center_id: values.center.center_id,
      message: values.message,
    };
    console.log(formData, "formDataaaaa");
    resetForm();
    await createContact(formData);
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: onSubmit,
  });

  useEffect(() => {
    fetchCenterListData();
  }, []);

  return (
    <Box>
      <Box fullWidth sx={{ display: "flex", justifyContent: "end" }}>
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
      </Box>
      <Typography
        sx={{ fontSize: "24px", display: "flex", justifyContent: "center" }}
      >
        Cantact Us
      </Typography>
      <Typography sx={{ fontSize: "14px", padding: "8px 0px 50px" }}>
        Our constant endeavour is to provide high-quality care to our patients.
        Your feedback is important to us and can help us improve our services.
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography sx={{ fontSize: "12px", paddingBottom: "10px" }}>
              Your Name *
            </Typography>
            <TextField
              id="nameField"
              type="text"
              variant="outlined"
              fullWidth
              placeholder="Name"
              sx={{
                "& input": {
                  padding: "17px 14px",
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
              <FormHelperText
                sx={{
                  margin: 0,
                  color: "red",
                  fontSize: "12px",
                }}
              >
                {formik.errors.name}
              </FormHelperText>
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography sx={{ fontSize: "12px", paddingBottom: "10px" }}>
              Your Phone *
            </Typography>
            <TextField
              id="numberField"
              type="tel"
              variant="outlined"
              fullWidth
              placeholder="Phone"
              sx={{
                "& input": {
                  padding: "17px 14px",
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
              <FormHelperText
                sx={{
                  margin: 0,
                  color: "red",
                  fontSize: "12px",
                }}
              >
                {formik.errors.phone}
              </FormHelperText>
            )}
          </Grid>
          <Grid item xs={12}>
            <Typography sx={{ fontSize: "12px", paddingBottom: "10px" }}>
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
                  {...params}
                  label={params.inputProps?.value ? "" : "Choose Center"}
                  sx={{
                    bgcolor: "#ebf6fd",
                  }}
                />
              )}
            />
            {formik.touched.center && formik.errors.center && (
              <FormHelperText
                sx={{
                  margin: 0,
                  color: "red",
                  fontSize: "12px",
                }}
              >
                {formik.errors.center}
              </FormHelperText>
            )}
          </Grid>
          <Grid item xs={12}>
            <textarea
              name="message"
              value={formik.values.message}
              style={{
                width: "calc(100% - 26px)",
                height: "80px",
                backgroundColor: "#ebf6fd",
                borderRadius: "4px",
                border: "1px solid #ccc",
                outline: "none",
                resize: "none",
                padding: "8px 12px",
              }}
              placeholder="Text here"
              onChange={formik.handleChange}
            />
          </Grid>
        </Grid>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
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
            Click the checkbox to submit the details.
          </Typography>
        </Box>
        <Box>
          <CustomButton
            disabled={!formik.values.checkbox}
            click={formik.handleSubmit}
            name="Submit"
          />
        </Box>
      </form>
    </Box>
  );
};

export default ContactUs;

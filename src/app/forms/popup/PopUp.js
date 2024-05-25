"use client";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

const style = {
    position: "absolute",
    top: "30%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    borderRadius: "15px",
    boxShadow: 24,
    p: 4,
};

const Popup = () => {
    const [mousePos, setMousePos] = useState({});
    const [showForm, setShowForm] = useState(false);
    const shown = useRef(false);
    const [open, setOpen] = useState(true);

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        number: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
            fullName: "",
            email: "",
            number: ""
        });
        handleClose();
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePos({ x: event.clientX, y: event.clientY });
            if (event.clientY === 0 && !shown.current) {
                setShowForm(true);
                shown.current = true;
            }
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div>
            {showForm && (
                <div className="form-popup">
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <form onSubmit={handleSubmit}>
                            <Box sx={style}>
                                <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                                    <Box>
                                        <Typography>
                                            Full Name
                                        </Typography>
                                        <TextField
                                            id="fullName"
                                            name="fullName"
                                            label="Full Name"
                                            variant="outlined"
                                            required
                                            fullWidth
                                            value={formData.fullName}
                                            onChange={handleChange}
                                        />
                                    </Box>
                                    <Box>
                                        <Typography>
                                            Email
                                        </Typography>
                                        <TextField
                                            type="email"
                                            id="email"
                                            name="email"
                                            label="Email"
                                            variant="outlined"
                                            required
                                            fullWidth
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </Box>
                                    <Box>
                                        <Typography>
                                            Number
                                        </Typography>
                                        <TextField
                                            id="number"
                                            type="number"
                                            name="number"
                                            label="Number"
                                            variant="outlined"
                                            required
                                            fullWidth
                                            value={formData.number}
                                            onChange={handleChange}
                                        />
                                    </Box>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        sx={{ mt: "10px" }}
                                    >
                                        Submit
                                    </Button>
                                </Box>
                            </Box>
                        </form>
                    </Modal>
                </div>
            )}
        </div>
    );
};

export default Popup;

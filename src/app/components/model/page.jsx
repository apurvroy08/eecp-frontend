// "use client";
// import AppointmentForm from "@/app/forms/book-appointment/page";
// import BusinessWithUs from "@/app/forms/BusinessWithUs/page";
// import ContactUs from "@/app/forms/contact-us/page";
// import { Box, Modal } from "@mui/material";
// import React, { useState } from "react";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: {xs:"80%", sm:"50%"},
//   maxHeight:"80%",
//   overflowY:"auto",
//   bgcolor: "background.paper",
//   boxShadow: 24,
//   p: 4,
//   borderRadius: "10px",
// };

// const Model = ({ modalClose, title }) => {
//   const [open, setOpen] = useState(true);
//   const handleOpen = () => setOpen(true);
//   return (
//     <Modal open={open} handleOpen={handleOpen} onClose={modalClose}>
//       <Box>
//         <Box sx={style}>
//           {(title === "Contact Us" && <ContactUs onClose={modalClose} />) ||
//             (title === "Book Appointment" && (
//               <AppointmentForm onClose={modalClose} />
//             ))  ||  (title === "Book Appointment" && (
//               <AppointmentForm onClose={modalClose})) />}
//         </Box>
//       </Box>
//     </Modal>
//   );
// };

// export default Model;



"use client";
import AppointmentForm from "@/app/forms/book-appointment/page";
import BusinessWithUs from "@/app/forms/BusinessWithUs/page";
import ContactUs from "@/app/forms/contact-us/page";
import { Box, Modal } from "@mui/material";
import React, { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "80%", sm: "50%" },
  maxHeight: "80%",
  overflowY: "auto",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};

const Model = ({ modalClose, title }) => {
  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);


  return (
    <Modal open={open} handleOpen={handleOpen} onClose={modalClose}>
      <Box>
        <Box sx={style}>
          {title === "Contact Us" && <ContactUs onClose={modalClose} />}
          {title === "Book Appointment" && <AppointmentForm onClose={modalClose} />}
          {title === "Business With Us" && <BusinessWithUs onClose={modalClose} />}
        </Box>
      </Box>
    </Modal>
  );
};

export default Model;

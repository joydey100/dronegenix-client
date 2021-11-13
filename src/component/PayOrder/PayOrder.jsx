import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const PayOrder = () => {
  return (
    <section>
      <Box sx={{ pt: 3, textAlign: "center" }}>
        <Typography variant="h5" color="primary" sx={{ fontWeight: 600 }}>
          {" "}
          Payment System are Coming Soon!!!!
        </Typography>
      </Box>
    </section>
  );
};

export default PayOrder;

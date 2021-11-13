import React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Button, Typography } from "@mui/material";

const MangeOrderItem = ({ order, confirmOrder, deleteOrder }) => {
  // Destructure
  const { img, name, price, status, _id } = order;

  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th" scope="row" align="center">
        <img src={img} alt="order-img" style={{ width: "85px" }} />
      </TableCell>
      <TableCell align="center"> {name} </TableCell>
      <TableCell align="center">{price}</TableCell>
      <TableCell align="center">
        <Typography
          variant="body1"
          className={status === "Shipped" ? "success" : "error"}
          sx={{ fontWeight: 600 }}
        >
          {status}{" "}
        </Typography>
      </TableCell>
      <TableCell align="center">
        <Button
          variant="contained"
          color="success"
          onClick={() => confirmOrder(_id)}
          disabled={status === "Shipped"}
        >
          {" "}
          Confirm{" "}
        </Button>{" "}
      </TableCell>
      <TableCell align="center">
        <Button
          variant="contained"
          color="error"
          onClick={() => deleteOrder(_id)}
        >
          {" "}
          Remove{" "}
        </Button>{" "}
      </TableCell>
    </TableRow>
  );
};

export default MangeOrderItem;

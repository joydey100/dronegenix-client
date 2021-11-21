import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import MangeOrderItem from "./MangeOrderItem";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Swal from "sweetalert2";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const order = fetch(`https://sheltered-waters-81006.herokuapp.com/orders`)
      .then((res) => res.json())
      .then((data) => setOrders(data));

    return () => order;
  }, []);

  const confirmOrder = (id) => {
    const getOrder = orders.find((order) => order._id === id);
    getOrder.status = "Shipped";

    // Confirmation for Approve
    Swal.fire({
      title: "Are you sure?",
      text: "You want to Approve this Order",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Approve it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://sheltered-waters-81006.herokuapp.com/order/${id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(getOrder),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
              window.location.reload();
            }
          });
      }
    });
  };
  const deleteOrder = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, Delete  it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://sheltered-waters-81006.herokuapp.com/order/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            const filterData = orders?.filter((order) => order._id !== id);
            setOrders(filterData);
          });
        Swal.fire({
          title: "Deleted!",
          text: "Product has been removed.",
          icon: "success",
          confirmButtonColor: "#1B37B1",
        });
      }
    });
  };

  return (
    <section>
      {orders.length > 0 && (
        <TableContainer component={Paper}>
          <Table aria-label="simple table" sx={{ width: "100%" }}>
            <TableHead>
              <TableRow>
                <TableCell align="center">Product Image</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="center">Status</TableCell>
                <TableCell align="center">Status Confirmation</TableCell>
                <TableCell align="center">Remove</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <MangeOrderItem
                  key={order._id}
                  order={order}
                  confirmOrder={confirmOrder}
                  deleteOrder={deleteOrder}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {orders.length === 0 && (
        <Box
          sx={{
            margin: "0 auto",
            display: "block",
            textAlign: "center",
            pt: 2,
          }}
        >
          <Typography variant="h6" color="error">
            There is no Orders!
          </Typography>
        </Box>
      )}
    </section>
  );
};

export default ManageOrders;

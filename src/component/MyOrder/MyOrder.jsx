import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import SingleOrder from "./SingleOrder";
import useAuth from "../../hooks/useAuth";
import { Box } from "@mui/system";
import Swal from "sweetalert2";

const MyOrder = () => {
  const { user } = useAuth();
  const [myOrder, setMyOrder] = useState([]);

  const deleteOrder = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/order/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const filter = myOrder.filter((order) => order._id !== id);
              setMyOrder(filter);
              Swal.fire("Deleted!", "Your Order has been deleted.", "success");
            }
          });
      }
    });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/order/${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyOrder(data));
  }, [user.email]);

  return (
    <section>
      <Grid container spacing={3}>
        {myOrder.length > 0 ? (
          myOrder?.map((order) => (
            <SingleOrder
              key={order._id}
              order={order}
              deleteOrder={deleteOrder}
            />
          ))
        ) : (
          <Box sx={{ margin: "0 auto", pt: 2 }}>
            <Typography variant="h6" color="error">
              You have No Order
            </Typography>
          </Box>
        )}
      </Grid>
    </section>
  );
};

export default MyOrder;

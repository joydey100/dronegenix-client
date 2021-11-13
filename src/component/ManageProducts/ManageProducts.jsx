import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import ManageProductItem from "./ManageProductItem";
import Swal from "sweetalert2";

const ManageProducts = () => {
  const [drones, setDrones] = useState([]);

  useEffect(() => {
    fetch(`https://sheltered-waters-81006.herokuapp.com/dronelist`)
      .then((res) => res.json())
      .then((data) => setDrones(data));
  });

  const deleteDrone = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085D6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://sheltered-waters-81006.herokuapp.com/dronelist/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            const filterData = drones?.filter((order) => order._id !== id);
            setDrones(filterData);
          });
        Swal.fire({
          title: "Deleted!",
          text: "Successfully Deleted the item",
          icon: "success",
          confirmButtonColor: "#1B37B1",
        });
      }
    });
  };

  return (
    <section>
      <Grid container spacing={3}>
        {drones.length > 0 ? (
          drones?.map((drone) => (
            <ManageProductItem
              key={drone._id}
              drone={drone}
              deleteDrone={deleteDrone}
            />
          ))
        ) : (
          <Box sx={{ margin: "0 auto", pt: 2 }}>
            <Typography variant="h6">You have No Order</Typography>
          </Box>
        )}
      </Grid>
    </section>
  );
};

export default ManageProducts;

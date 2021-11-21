import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import Swal from "sweetalert2";

const AddProduct = () => {
  // Initial States
  const [newDrone, setNewDrone] = useState({
    name: "",
    desc: "",
    img: "",
    price: "",
  });

  // Post or adding new Products
  const addProduct = (e) => {
    e.preventDefault();

    const droneInfo = { ...newDrone };

    // Posting New Drone
    fetch("https://sheltered-waters-81006.herokuapp.com/dronelist", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(droneInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Great Job!",
            text: "You add a New Product",
            icon: "success",
            confirmButtonColor: "#1B37B1",
          });
        }
      });

    // Clear lists
    setNewDrone({
      name: "",
      desc: "",
      img: "",
      price: " ",
    });
  };

  return (
    <section>
      <form onSubmit={addProduct}>
        <TextField
          label="Name"
          type="text"
          variant="filled"
          fullWidth
          required
          value={newDrone.name}
          onChange={(e) => setNewDrone({ ...newDrone, name: e.target.value })}
        />
        <TextField
          label="Description"
          variant="filled"
          type="text"
          required
          fullWidth
          multiline
          rows={5}
          sx={{ my: 2 }}
          value={newDrone.desc}
          onChange={(e) => setNewDrone({ ...newDrone, desc: e.target.value })}
        />
        <TextField
          label="Image URL (Give a Hosting Image URL)"
          variant="filled"
          fullWidth
          type="text"
          required
          sx={{ my: 2 }}
          value={newDrone.img}
          onChange={(e) => setNewDrone({ ...newDrone, img: e.target.value })}
        />
        <TextField
          label="Price"
          variant="filled"
          fullWidth
          required
          type="number"
          sx={{ my: 2 }}
          value={newDrone.price}
          onChange={(e) => setNewDrone({ ...newDrone, price: e.target.value })}
        />
        <Button type="submit" variant="contained">
          {" "}
          Submit
        </Button>
      </form>
    </section>
  );
};

export default AddProduct;

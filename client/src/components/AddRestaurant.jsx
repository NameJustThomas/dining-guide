import React, { useState, useContext } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";

const AddRestaurant = () => {
  const { addRestaurants } = useContext(RestaurantsContext);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await <RestaurantsContext>

        
      </RestaurantsContext>.post("/", {
        name,
        location,
        price_range: priceRange,
      });
      console.log(response.data.data);
      addRestaurants(response.data.data.restaurant);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="mb-4">
      <form action="">
        <div className="row gx-3 gy-2 align-items-center">
          <div className="col-sm-4">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Name"
            />
          </div>
          <div className="col-sm-4">
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="form-control"
              type="text"
              placeholder="Location"
            />
          </div>
          <div className="col-sm-3">
            <select
              aria-label="label for the select"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="form-select"
              
            >
              <option disabled>Price Range</option>
              <option value="1">10</option>
              <option value="2">20</option>
              <option value="3">30</option>
              <option value="4">40</option>
              <option value="5">50</option>
              <option value="6">60</option>
            </select>
          </div>
          <div className="col-auto">
    <button type = "submit" className="btn btn-primary">Add</button>
  </div>
        </div>
      </form>
    </div>
  );
};

export default AddRestaurant;
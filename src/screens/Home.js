import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Template from "../components/Template";
import Carousal from "../components/Carousal";

export default function Home() {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/foodData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      console.log("Fetched data:", data);

      if (!Array.isArray(data) || data.length < 2) {
        console.error("Unexpected API format");
        setLoading(false);
        return;
      }

      setFoodItem(data[0] || []);
      setFoodCat(data[1] || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <Navbar />
      <Carousal />
      <div className="container mt-4">
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : foodCat.length > 0 ? (
          foodCat.map((category) => (
            <div key={category._id} className="mb-5">
              <h3 className="fs-3 m-3">{category.categoryName}</h3>
              <hr />
              <div className="row">
                {foodItem
                  .filter((item) => item.categoryName === category.categoryName)
                  .map((filteredItem) => (
                    <div className="col-md-4 mb-4" key={filteredItem._id}>
                      <Template item={filteredItem.name}
                      options={filteredItem.options[0]}
                      imgSrc={filteredItem.img} />
                    </div>
                  ))}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center">No Categories Found</div>
        )}
      </div>
      <Footer />
    </div>
  );
}

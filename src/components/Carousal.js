import React from "react";

export default function Carousal() {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{objectFit:"contain !important"}}
      >
        <div className="carousel-inner position-relative" id="carousel">
          <div className="carousel-item active">
            <img
              src="https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?w=900&h=700&fit=crop"
              className="d-block w-100"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?w=900&h=700&fit=crop"
              className="d-block w-100"
              alt="Pizza"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?w=900&h=700&fit=crop"
              className="d-block w-100"
              alt="Pasta"
            />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>

        {/* Search Bar INSIDE the Image at the Bottom */}
        <div
          className="position-absolute w-100 d-flex justify-content-center"
          style={{ bottom: "5%", left: "50%", transform: "translateX(-50%)", zIndex: "10" }}
        >
          <form className="d-flex w-50">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{ height: "40px", fontSize: "1.2rem" }}
            />
            <button className="btn btn-outline-success px-4" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

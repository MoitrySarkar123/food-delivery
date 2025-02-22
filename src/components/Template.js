import React from "react";

export default function Template() {
  return (
    <div>
      <div>
        <div
          className="card mt-3 bg-dark text-white"
          style={{ width: "18rem", maxHeight: "360px" }}
        >
          <img src="https://cdn.shopify.com/s/files/1/2289/1873/files/warm_plate-min.jpg?v=1668949150" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is some Important text.</p>
            <div className="container w-100">
              <select className="m-2 h-100 bg-success rounded">
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              <select className="m-2 h-100 bg-success rounded">
                <option value="half">Half</option>
                <option value="full">Full</option>
              </select>
              <div className="d-inline h-100 fs-5">Total price</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";

export default function Template(props) {
  const item = props.item;
  let options=props.options;
  let priceOptions=Object.keys(options)

  return (
    <div className="col-md-4">
      <div
        className="card mt-3 bg-dark text-white"
        style={{ width: "18rem", maxHeight: "360px" }}
      >
        <img
          src={
            item.image ||
            "https://cdn.shopify.com/s/files/1/2289/1873/files/warm_plate-min.jpg?v=1668949150"
          }
          className="card-img-top"
          alt={item.foodName}
        />
        <div className="card-body">
          <h5 className="card-title">{item.foodName}</h5>
          
          <div className="container w-100">
            <select className="m-2 h-100 bg-success rounded">
              {Array.from(Array(6), (e, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
            <select className="m-2 h-100 bg-success rounded">
             {priceOptions.map((data)=>{
              return <option key={data} value={data}>{data}</option>
             })}
            </select>
            <div className="d-inline h-100 fs-5">${item.price || "0.00"}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

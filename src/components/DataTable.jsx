import React from "react";
  
function DataTable({ data }) {
  return (
    <div>
      <table id="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th className="mobile">Price</th>
            <th className="tablet">ProductKey</th>
            <th>Currency</th>
            <th className="desktop">MadeAt</th>
            <th className="laptop-l">ProductURL</th>
          </tr>
        </thead>
        <tbody>
          {data.map((product, index) => (
            <tr key={product.id || index}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td className="mobile">{product.price}</td>
              <td className="tablet">{product.productKey}</td>
              <td>{product.currency}</td>
              <td className="desktop">{product.madeAt}</td>
              <td className="laptop-l">{product.productUrl}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
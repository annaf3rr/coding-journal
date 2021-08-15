import React from "react";

const InventoryList = ({ grandTotal }) => {
  return (
    <div>
      {grandTotal.map((item) => (
        <p>
          {item.productName} -Php {item.totalAmt}
        </p>
      ))}
    </div>
  );
};

export default InventoryList;

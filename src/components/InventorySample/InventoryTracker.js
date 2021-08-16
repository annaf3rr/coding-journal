import React, { useState, useEffect } from "react";
import InventoryForm from "./InventoryForm";
import InventoryList from "./InventoryList";

const retrieveData = localStorage.getItem("inventory")
  ? JSON.parse(localStorage.getItem("inventory"))
  : [];

function InventoryTracker() {
  const [productName, setProdname] = useState("");
  const [totalAmt, setTotalamt] = useState(0);
  const [grandTotal, setGrandtotal] = useState(retrieveData);
  const handleName = (e) => {
    setProdname(e.target.value);
  };
  const handleAmt = (e) => {
    setTotalamt(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (productName !== "" && totalAmt > 0) {
      const product = { productName, totalAmt };
      setGrandtotal([...grandTotal, product]);
      setProdname("");
      setTotalamt(0);
    } else {
      alert("Invalid Name and Amount");
    }
  };

  const handleDelete = () => {
    setGrandtotal([]);
  };

  useEffect(() => {
    localStorage.setItem("inventory", JSON.stringify(grandTotal));
  }, [grandTotal]);

  return (
    <>
      <header>
        <h1>Product Information:</h1>
      </header>
      <br />
      <InventoryForm
        prodName={productName}
        amt={totalAmt}
        handleName={handleName}
        handleAmt={handleAmt}
        handleSubmit={handleSubmit}
        handleDelete={handleDelete}
      />
      <br />
      <InventoryList grandTotal={grandTotal} />
      <br />
      <h4>
        Grand Total:{" "}
        {grandTotal.reduce((accumulator, currentValue) => {
          return (accumulator += parseFloat(currentValue.totalAmt));
        }, 0)}
      </h4>
    </>
  );
}
export default InventoryTracker;

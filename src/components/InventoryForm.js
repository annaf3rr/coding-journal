import React from "react";

const InventoryForm = ({
  prodName,
  amt,
  handleName,
  handleAmt,
  handleSubmit,
  handleDelete,
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Product Name</label>
        <input onChange={handleName} type="text" value={prodName} />

        <label>Amount</label>
        <input onChange={handleAmt} type="number" value={amt} placeholder="0" />

        <button type="submit" onClick="{handleSubmit}">
          SUBMIT
        </button>
        <button type="submit" onClick="{handleDelete}">
          DELETE
        </button>
      </form>
    </div>
  );
};

export default InventoryForm;

import React from "react";

function SchoolBoard(props) {
  return (
    <div>
      <h3 style={{ display: !props.category && "none" }}>
        Category:{props.category}
      </h3>
      <h3 style={{ color: !props.category && "purple" }}>Post:{props.post}</h3>
      <hr />
    </div>
  );
}

export default SchoolBoard;

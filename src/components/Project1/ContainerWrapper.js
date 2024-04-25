import React from "react";

const ContainerWrapper = ({ children }) => {
  return (
    <div className="flex flex-column " style={{ backgroundColor: "#F1F2F2" }}>
      {children}
    </div>
  );
};

export default ContainerWrapper;

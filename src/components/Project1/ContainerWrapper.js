import React from "react";
import ContactMeBtn from "../ContactMeBtn";

const ContainerWrapper = ({ children }) => {
  return (
    <div style={{ backgroundColor: "#F1F2F2" }}>
      <div className="flex flex-column ">
        {children}
      </div>
      <div className="flex justify-center">
        <ContactMeBtn linkTo={"/contact"} />,
      </div>
    </div>
  );
};

export default ContainerWrapper;

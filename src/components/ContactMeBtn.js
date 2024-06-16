import React from "react";
import { Link } from "react-router-dom";

const ContactMeBtn = ({ extraClassName, linkTo, extraStyle, btnName }) => {
  const combineClassName = `btn mb-[30px]` + " " + extraClassName;

  return (
    <Link
      to={linkTo}
      className={combineClassName}
      style={{ width: 300, marginTop: 10 }}
    >
      {btnName || "Contact me"}
    </Link>
  );
};

export default ContactMeBtn;

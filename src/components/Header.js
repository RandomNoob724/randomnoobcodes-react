import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd }) => {
  const onClick = () => {
    console.log("click");
  };
  return (
    <div className="header">
      <h1>{title}</h1>
      <Button title="Add" color="green" onClick={onAdd} />
    </div>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

function DropDown() {
  return (
    <>
      <Menu right>
        <Link to="/">Home</Link>
        {/* <Link to='/signin'>
      Sign In
      </Link> */}
      </Menu>
    </>
  );
}

export default DropDown;

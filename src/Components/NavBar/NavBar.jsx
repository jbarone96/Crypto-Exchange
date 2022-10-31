import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import DropDown from "../DropDown/DropDown";

function NavBar() {
  const { user } = "3";
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      // await logout()
      navigate("/signin");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="flex rounded-div justify-between items-center h-20 font-semibold">
        <Link to="/">
          <h1 className="text-2xl">CoinWizard</h1>
        </Link>
        <div className="md:block hidden">{/* switch */}</div>
        <div className="md:block hidden">
          {user?.email ? (
            <div className="flex">
              <Link to="/account">
                <FaRegUserCircle
                  className="mr-4 mt-1 cursor-pointer"
                  size={26}
                />
              </Link>
              <button onClick={handleLogOut}>Log Out</button>
            </div>
          ) : (
            <Link to="/signin">Sign In</Link>
          )}
        </div>
        <div className="md:block hidden">
          <DropDown />
        </div>
      </div>
    </>
  );
}

export default NavBar;

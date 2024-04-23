import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Security/AuthProvider";
const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(user);

  // sign out a user
  const handleLogOut = () => {
    logOut().then().catch();
    navigate("/");
  };

  return (
    <div className="navbar bg-violet-800 text-white bg-opacity-75 backdrop-blur-lg p-5 rounded-md shadow-lg  lg:px-28 md:px-10 px-5  fixed z-50 top-0 border-b">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content  bg-violet-950 mt-3 z-[1] p-2 shadow  rounded-box w-52 "
          >
            <li>
              <NavLink to={"/"}>Home </NavLink>
            </li>
            <li>
              <NavLink to={"/notice"}>Events</NavLink>
            </li>

            <li>
              <NavLink to={"/exam"}>Aboutus</NavLink>
            </li>
            <li>
              <NavLink to={"/assignment"}>Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center ml-44">
          <img
            className="w-full h-auto"
            src="https://i.ibb.co/K7MQQJp/Event-Host.png"
            alt=""
          />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal items-center px-1 flex gap-4">
          <li>
            <NavLink to={"/"}>Home </NavLink>
          </li>
          <li>
            <NavLink to={"/notice"}>Events</NavLink>
          </li>

          <li>
            <NavLink to={"/exam"}>Aboutus</NavLink>
          </li>
          <li>
            <NavLink to={"/assignment"}>Contact</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <label className="swap swap-rotate mr-5">
          <img
            className="w-16 h-8"
            src="https://i.ibb.co/8KTsgMW/png-clipart-man-wearing-blue-shirt-illustration-computer-icons-avatar-user-login-avatar-blue-child-r.png"
            alt=""
          />
        </label>
        {/* <Link to="/login">
        <button className="btn p-4 rounded-lg">Login</button>
        </Link> */}

        <div className="items-center">
          {user?.displayName ? (
            <div className="dropdown center">
              <label tabIndex={0}>
                <div>
                  <img
                    className="h-10 w-10 rounded-full"
                    src={user.photoURL}
                    alt=""
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-lg dropdown-content mt-3  right-1  z-[1] p-2  rounded-box w-52"
              >
                <div className="dropdown ">
                  <div
                    tabIndex={0}
                    className="dropdown-content z-[50] card card-compact w-44 p-2 shadow bg-base-100 border text-black"
                  >
                    <figure>
                      <img
                        className="h-20 w-20 rounded-full"
                        src={user?.photoURL}
                        alt=""
                      />
                    </figure>
                    <div className="card-body ">
                      <hr />

                      <NavLink
                        onClick={handleLogOut}
                        className={({ isActive, isPending }) =>
                          isPending
                            ? "pending"
                            : isActive
                            ? "underline mr-5 text-blue-700"
                            : "mr-5 hover:text-gray-100"
                        }
                      >
                        <button className="btn btn-outline border-0 border-[#0165c3] hover:bg-[#0165c3] hover:border-[#0165c3] border-b-4 hover:text-white btn-sm">
                          LogOut
                        </button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </ul>
            </div>
          ) : (
            <img src="https://i.ibb.co/vcxBxfG/Group-7.png" alt="" />
          )}
        </div>
      </div>
    </div>
  );
};
export default NavBar;

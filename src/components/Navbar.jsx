import { Link } from "react-router-dom";
import claruswayIcon from "../assets/cw.jpeg";

const Navbar = () => {
  return (
    <div className="navbar bg-secondary flex justify-between">
      <Link to="/">
        <div className="w-10 rounded-full">
          <img src={claruswayIcon} alt="clarusway" />
        </div>
      </Link>
      <Link to="/">
        <h1 className="h-full text-center text-2xl tracking-tighter cursor-pointer ">
          &lt;David Moses<span className="text-green-600">Blog/&gt;</span>
        </h1>
      </Link>
      {/* if isLoggedIn true Profile, New Blog and Logout, else Login and Register */}
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabindex="0" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" alt="profile" />
            </div>
          </label>
          <ul
            tabindex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="profile">
                <button>Profile</button>
              </Link>
            </li>
            <li>
              <Link to="newblog">
                {" "}
                <button className="flex justify-between w-40">
                  Blog <span className="badge">New</span>
                </button>
              </Link>
            </li>
            <li>
              <Link to="login">
                {" "}
                <button>Logout</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabindex="0" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" alt="profile" />
            </div>
          </label>
          <ul
            tabindex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <button>Login</button>
            </li>
            <li>
              <button>Register</button>
            </li>
          </ul>
        </div>
      </div> */}
      {/* navbar should be on the top,
        click user icon to see a dropdown menu,
        if you logged in: profile, new blog and logout options,
        if you didn't log in: login and register options */}
    </div>
  );
};

export default Navbar;

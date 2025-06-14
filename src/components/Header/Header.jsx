import "./Header.css";
import logo from "../../assets/logo.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function Header({
  weatherData,
  onLoginClick,
  onRegisterClick,
  onAddNewItem,
  isLoggedIn,
}) {
  const currentUser = useContext(CurrentUserContext);
  const currentDate = new Date().toLocaleDateString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="logo" />
      </Link>
      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>

      <nav className="header__navigation">
        <ul className="header__navigation_container">
          <ToggleSwitch />
          {isLoggedIn ? (
            <>
              <li>
                <button
                  className="header__navigation_button"
                  onClick={onAddNewItem}
                >
                  + Add clothes
                </button>
              </li>
              <li>
                <Link to="/profile" className="header__navigation_link">
                  <span className="header__navigation_username">
                    {" "}
                    {currentUser.name}
                  </span>

                  {currentUser.avatar ? (
                    <img
                      src={currentUser.avatar}
                      className="header__navigation_user"
                      alt="avatar"
                    />
                  ) : (
                    <span className="header__navigation_user header__navigation_user_type_none">
                      {" "}
                      {currentUser?.name?.toUpperCase().chartAt(0) || ""}
                    </span>
                  )}
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <button
                  className="header__navigation_button"
                  onClick={onLoginClick}
                >
                  Log in
                </button>
              </li>
              <li>
                <button
                  className="header__navigation_button"
                  onClick={onRegisterClick}
                >
                  Sign up
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

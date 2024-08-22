import PropTypes from "prop-types";
import "./Header.css";

const Header = ({ className = "" }) => {
  return (
    <div className={`header42 ${className}`}>
      <img className="menu-icon38" alt="" src="/menu-icon.svg" />
      <div className="notification-and-count13">
        <img className="notification-icon38" alt="" src="/notification1.svg" />
        <b className="b31">12</b>
      </div>
      <div className="connect-wallet42">
        <b className="connect42">Connect</b>
      </div>
      <img className="profile-icon49" alt="" src="/profile7.svg" />
      <img className="menu-icon38" alt="" src="/riarrowdropdownline3.svg" />
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;

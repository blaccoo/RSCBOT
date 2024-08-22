import PropTypes from "prop-types";
import "./SocialMediaHandle.css";

const SocialMediaHandle = ({ className = "", group182 }) => {
  return (
    <div className={`social-media-handle3 ${className}`}>
      <div className="community3">
        <img className="community-child" alt="" src="/rectangle-14.svg" />
        <div className="join-our-communities3">Join our communities</div>
        <img className="community-item" alt="" src={group182} />
      </div>
    </div>
  );
};

SocialMediaHandle.propTypes = {
  className: PropTypes.string,
  group182: PropTypes.string,
};

export default SocialMediaHandle;

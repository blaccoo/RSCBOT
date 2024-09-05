import PropTypes from "prop-types";
import "./FooterStartFrame13.css";

const FooterStartFrame13 = ({ className = "" }) => {
  return (
    <div className={`footer-start-frame38 ${className}`}>
      <div className="iconoiryoutube-parent">
        <img className="iconoiryoutube1" alt="" src="/iconoiryoutube.svg" />
        <div className="wallet-parent20">
          <div className="wallet119">
            <div className="introduction-to-trading2">
              Introduction to Trading Part 1
            </div>
          </div>
          <div className="wallet120">
            <img
              className="fluent-emojicoin-icon18"
              alt=""
              src="/fluentemojicoin1.svg"
            />
            <div className="introduction-to-trading2">+</div>
            <img
              className="fluent-emojicoin-icon18"
              alt=""
              src="/notokey.svg"
            />
            <div className="introduction-to-trading2">2</div>
            <div className="introduction-to-trading2">Keys</div>
          </div>
        </div>
        <div className="wallet121">
          <img
            className="fluent-emojicoin-icon18"
            alt=""
            src="/teenyiconstickcirclesolid.svg"
          />
          <div className="introduction-to-trading2">Pending</div>
        </div>
      </div>
    </div>
  );
};

FooterStartFrame13.propTypes = {
  className: PropTypes.string,
};

export default FooterStartFrame13;

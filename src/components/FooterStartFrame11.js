import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FooterStartFrame11.css";

const FooterStartFrame11 = ({
  className = "",
  herbetPere,
  openmojiflagNigeria,
  k,
  propWidth,
  propFlex,
  propWidth1,
  propFlex1,
}) => {
  const frameDiv2Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const wallet2Style = useMemo(() => {
    return {
      flex: propFlex,
      width: propWidth1,
    };
  }, [propFlex, propWidth1]);

  const herbetPereStyle = useMemo(() => {
    return {
      flex: propFlex1,
    };
  }, [propFlex1]);

  return (
    <div className={`footer-start-frame38 ${className}`}>
      <div className="profile-group">
        <img className="profile-icon51" alt="" src="/profile8.svg" />
        <div className="frame-parent21">
          <div className="wallet-parent11" style={frameDiv2Style}>
            <div className="wallet72" style={wallet2Style}>
              <b className="k" style={herbetPereStyle}>
                {herbetPere}
              </b>
            </div>
            <div className="wallet73">
              <img
                className="openmojiflag-nigeria-icon"
                alt=""
                src={openmojiflagNigeria}
              />
            </div>
          </div>
          <div className="wallet-parent12">
            <div className="wallet74">
              <img
                className="openmojiflag-nigeria-icon"
                alt=""
                src="/fluentemojicoin.svg"
              />
              <div className="k">23,456,000</div>
            </div>
            <div className="wallet75">
              <img
                className="openmojiflag-nigeria-icon"
                alt=""
                src="/notokey.svg"
              />
              <div className="k">455</div>
            </div>
            <div className="wallet75">
              <img
                className="openmojiflag-nigeria-icon"
                alt=""
                src="/carbonfriendship1.svg"
              />
              <div className="k">91</div>
            </div>
          </div>
          <div className="wallet77">
            <div className="k">{k}</div>
          </div>
        </div>
        <div className="wallet78">
          <div className="lvl-bronze1">Lvl - Bronze</div>
        </div>
      </div>
    </div>
  );
};

FooterStartFrame11.propTypes = {
  className: PropTypes.string,
  herbetPere: PropTypes.string,
  openmojiflagNigeria: PropTypes.string,
  k: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propFlex: PropTypes.any,
  propWidth1: PropTypes.any,
  propFlex1: PropTypes.any,
};

export default FooterStartFrame11;

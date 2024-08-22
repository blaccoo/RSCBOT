import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./FooterStartFrame9.css";

const FooterStartFrame9 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onWalletContainerClick = useCallback(() => {
    navigate("/boast");
  }, [navigate]);

  return (
    <div className={`footer-start-frame36 ${className}`}>
      <div className="wallet-parent8">
        <div className="wallet63">
          <img
            className="simple-line-iconsenergy"
            alt=""
            src="/simplelineiconsenergy1.svg"
          />
          <div className="div162">500/500</div>
        </div>
        <div className="wallet64" onClick={onWalletContainerClick}>
          <img
            className="simple-line-iconsenergy"
            alt=""
            src="/hugeiconsfire.svg"
          />
          <div className="div162">Boast</div>
        </div>
      </div>
      <div className="energy-limit" />
    </div>
  );
};

FooterStartFrame9.propTypes = {
  className: PropTypes.string,
};

export default FooterStartFrame9;

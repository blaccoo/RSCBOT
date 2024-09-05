import ConfirmationFrame1 from "./ConfirmationFrame1";
import PropTypes from "prop-types";
import "./ModalClaimingReferalBonus.css";

const ModalClaimingReferalBonus = ({ className = "" }) => {
  return (
    <div className={`modal-claiming-referal-bonus ${className}`}>
      <ConfirmationFrame1 />
      <div className="frame22">
        <div className="frame22">
          <div className="close18">
            <b className="claim-all">Claim All</b>
          </div>
        </div>
      </div>
    </div>
  );
};

ModalClaimingReferalBonus.propTypes = {
  className: PropTypes.string,
};

export default ModalClaimingReferalBonus;

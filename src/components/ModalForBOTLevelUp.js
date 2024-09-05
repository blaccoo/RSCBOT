import { useState, useCallback } from "react";
import ModalForStartPurchase from "./ModalForStartPurchase";
import PortalPopup from "./PortalPopup";
import PropTypes from "prop-types";
import "./ModalForBOTLevelUp.css";

const ModalForBOTLevelUp = ({ className = "" }) => {
  const [isModalForStartPurchaseOpen, setModalForStartPurchaseOpen] =
    useState(false);

  const openModalForStartPurchase = useCallback(() => {
    setModalForStartPurchaseOpen(true);
  }, []);

  const closeModalForStartPurchase = useCallback(() => {
    setModalForStartPurchaseOpen(false);
  }, []);

  return (
    <>
      <div className={`modal-for-bot-starp ${className}`}>
        <div className="confirmation-frame7">
          <div className="stake-complete7">
            <img className="frame-icon7" alt="" src="/frame2.svg" />
            <b className="rsc-bot2">RSC BOT</b>
            <div className="allow-bot-mines1">
              Allow BOT mines and collect coin for you when you are not around
            </div>
            <b className="this-bot-mines-container1">
              <span>This BOT Mines for you for</span>
              <span className="span8"> 12</span>
              <span> hours</span>
            </b>
            <div className="frame-parent43">
              <div className="notostar-frame">
                <img className="notostar-icon2" alt="" src="/notostar1.svg" />
              </div>
              <div className="wrapper18">
                <b className="b46">150</b>
              </div>
              <div className="tablerletter-i-wrapper4">
                <img
                  className="notostar-icon2"
                  alt=""
                  src="/tablerletteri.svg"
                />
              </div>
              <div className="standard-container">
                <b className="standard1">Standard</b>
              </div>
            </div>
          </div>
        </div>
        <div className="frame28">
          <div className="confirm-button30">
            <div className="close24" onClick={openModalForStartPurchase}>
              <b className="continue9">Continue</b>
            </div>
          </div>
        </div>
      </div>
      {isModalForStartPurchaseOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeModalForStartPurchase}
        >
          <ModalForStartPurchase onClose={closeModalForStartPurchase} />
        </PortalPopup>
      )}
    </>
  );
};

ModalForBOTLevelUp.propTypes = {
  className: PropTypes.string,
};

export default ModalForBOTLevelUp;

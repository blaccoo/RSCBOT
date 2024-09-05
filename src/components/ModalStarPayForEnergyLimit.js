import { useState, useCallback } from "react";
import ModalForStartPurchase2 from "./ModalForStartPurchase2";
import PortalPopup from "./PortalPopup";
import "./ModalStarPayForEnergyLimit.css";

const ModalStarPayForEnergyLimit = () => {
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
      <div className="modal-star-pay-for-energy-limi">
        <div className="confirmation-frame11">
          <div className="stake-complete11">
            <img className="frame-icon11" alt="" src="/frame2.svg" />
            <b className="energy-limit1">Energy Limit</b>
            <div className="increase-the-the1">
              Increase the the storage capacity
            </div>
            <b className="limit-increase-for1">
              +500 Limit increase for each new Levels
            </b>
            <div className="frame-parent48">
              <div className="notostar-wrapper4">
                <img className="notostar-icon6" alt="" src="/notostar1.svg" />
              </div>
              <div className="wrapper22">
                <b className="b51">50</b>
              </div>
              <div className="tablerletter-i-wrapper8">
                <img
                  className="notostar-icon6"
                  alt=""
                  src="/tablerletteri.svg"
                />
              </div>
              <div className="level-11-container">
                <b className="level-111">Level 11</b>
              </div>
            </div>
          </div>
        </div>
        <div className="frame32">
          <div className="confirm-button34">
            <div className="close28" onClick={openModalForStartPurchase}>
              <b className="continue13">Continue</b>
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
          <ModalForStartPurchase2 onClose={closeModalForStartPurchase} />
        </PortalPopup>
      )}
    </>
  );
};

export default ModalStarPayForEnergyLimit;

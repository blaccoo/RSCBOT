import { useState, useCallback } from "react";
import ModalForStartPurchase1 from "./ModalForStartPurchase1";
import PortalPopup from "./PortalPopup";
import "./ModalStarPayForMultitap.css";

const ModalStarPayForMultitap = () => {
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
      <div className="modal-star-pay-for-multitap">
        <div className="confirmation-frame9">
          <div className="stake-complete9">
            <img className="frame-icon9" alt="" src="/frame2.svg" />
            <b className="multi-tap2">Multi-tap</b>
            <div className="increase-the-amount1">
              Increase the amount of coin you can earn per tap
            </div>
            <b className="per-tap-for1">+5 per tap for this new Levels</b>
            <div className="frame-parent45">
              <div className="notostar-wrapper1">
                <img className="notostar-icon3" alt="" src="/notostar1.svg" />
              </div>
              <div className="wrapper20">
                <b className="b48">50</b>
              </div>
              <div className="tablerletter-i-wrapper6">
                <img
                  className="notostar-icon3"
                  alt=""
                  src="/tablerletteri.svg"
                />
              </div>
              <div className="level-11-wrapper">
                <b className="level-11">Level 11</b>
              </div>
            </div>
          </div>
        </div>
        <div className="frame30">
          <div className="confirm-button32">
            <div className="close26" onClick={openModalForStartPurchase}>
              <b className="continue11">Continue</b>
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
          <ModalForStartPurchase1 onClose={closeModalForStartPurchase} />
        </PortalPopup>
      )}
    </>
  );
};

export default ModalStarPayForMultitap;

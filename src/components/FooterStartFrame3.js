import { useState, useCallback } from "react";
import ModalForBOTLevelUp from "./ModalForBOTLevelUp";
import PortalPopup from "./PortalPopup";
import PropTypes from "prop-types";
import "./FooterStartFrame3.css";

const FooterStartFrame3 = ({ className = "" }) => {
  const [isModalForBOTStarpOpen, setModalForBOTStarpOpen] = useState(false);

  const openModalForBOTStarp = useCallback(() => {
    setModalForBOTStarpOpen(true);
  }, []);

  const closeModalForBOTStarp = useCallback(() => {
    setModalForBOTStarpOpen(false);
  }, []);

  return (
    <>
      <div className={`footer-start-frame36 ${className}`}>
        <div
          className="game-iconsrobot-golem-parent"
          onClick={openModalForBOTStarp}
        >
          <img
            className="game-iconsrobot-golem"
            alt=""
            src="/gameiconsrobotgolem.svg"
          />
          <div className="wallet-parent17">
            <div className="wallet105">
              <div className="bot-mines-for1">BOT Mines for 24 Hours</div>
            </div>
            <div className="wallet106">
              <img
                className="magestar-fill-icon"
                alt=""
                src="/magestarfill1@2x.png"
              />
              <div className="bot-mines-for1">200</div>
            </div>
          </div>
          <div className="wallet107">
            <img
              className="teenyiconstick-circle-solid3"
              alt=""
              src="/teenyiconstickcirclesolid2.svg"
            />
            <div className="activated">Activated</div>
          </div>
        </div>
      </div>
      {isModalForBOTStarpOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeModalForBOTStarp}
        >
          <ModalForBOTLevelUp onClose={closeModalForBOTStarp} />
        </PortalPopup>
      )}
    </>
  );
};

FooterStartFrame3.propTypes = {
  className: PropTypes.string,
};

export default FooterStartFrame3;

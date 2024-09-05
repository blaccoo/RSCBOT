import { useState, useMemo, useCallback } from "react";
import ModalForMultitapLevelUp from "./ModalForMultitapLevelUp";
import PortalPopup from "./PortalPopup";
import PropTypes from "prop-types";
import "./FooterStartFrame2.css";

const FooterStartFrame2 = ({
  className = "",
  hugeiconstap06,
  multitap,
  prop,
  propHeight,
  level1,
}) => {
  const [isModalForMultitapLevelUpOpen, setModalForMultitapLevelUpOpen] =
    useState(false);
  const wallet3Style = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const openModalForMultitapLevelUp = useCallback(() => {
    setModalForMultitapLevelUpOpen(true);
  }, []);

  const closeModalForMultitapLevelUp = useCallback(() => {
    setModalForMultitapLevelUpOpen(false);
  }, []);

  return (
    <>
      <div className={`footer-start-frame34 ${className}`}>
        <div
          className="hugeiconstap-06-parent"
          onClick={openModalForMultitapLevelUp}
        >
          <img className="hugeiconstap-06" alt="" src={hugeiconstap06} />
          <div className="wallet-parent14">
            <div className="wallet98">
              <div className="multitap">{multitap}</div>
            </div>
            <div className="wallet99">
              <img
                className="fluent-emojicoin-icon15"
                alt=""
                src="/fluentemojicoin.svg"
              />
              <div className="multitap">{prop}</div>
            </div>
          </div>
          <div className="wallet100" style={wallet3Style}>
            <div className="multitap">{level1}</div>
          </div>
        </div>
      </div>
      {isModalForMultitapLevelUpOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeModalForMultitapLevelUp}
        >
          <ModalForMultitapLevelUp onClose={closeModalForMultitapLevelUp} />
        </PortalPopup>
      )}
    </>
  );
};

FooterStartFrame2.propTypes = {
  className: PropTypes.string,
  hugeiconstap06: PropTypes.string,
  multitap: PropTypes.string,
  prop: PropTypes.string,
  level1: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
};

export default FooterStartFrame2;

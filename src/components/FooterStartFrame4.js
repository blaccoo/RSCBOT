import { useState, useMemo, useCallback } from "react";
import ModalForRechargeSpeedLevelUp from "./ModalForRechargeSpeedLevelUp";
import PortalPopup from "./PortalPopup";
import PropTypes from "prop-types";
import "./FooterStartFrame4.css";

const FooterStartFrame4 = ({
  className = "",
  propHeight,
  hugeiconschatBot,
  bOTMinesFor1Hour,
  fluentEmojicoin,
  prop,
  teenyiconstickCircleSolid,
  pending,
  frameDivPadding,
  frameDivWidth,
  frameDivPadding1,
  fluentEmojicoinIconWidth,
  fluentEmojicoinIconHeight,
  teenyiconstickCircleSolidWidth,
  teenyiconstickCircleSolidHeight,
}) => {
  const [isModalForBOTLevelUpOpen, setModalForBOTLevelUpOpen] = useState(false);
  const footerStartFrame4Style = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const frameDiv5Style = useMemo(() => {
    return {
      padding: frameDivPadding,
    };
  }, [frameDivPadding]);

  const frameDiv6Style = useMemo(() => {
    return {
      width: frameDivWidth,
      padding: frameDivPadding1,
    };
  }, [frameDivWidth, frameDivPadding1]);

  const fluentEmojicoinIcon1Style = useMemo(() => {
    return {
      width: fluentEmojicoinIconWidth,
      height: fluentEmojicoinIconHeight,
    };
  }, [fluentEmojicoinIconWidth, fluentEmojicoinIconHeight]);

  const teenyiconstickCircleSolid1Style = useMemo(() => {
    return {
      width: teenyiconstickCircleSolidWidth,
      height: teenyiconstickCircleSolidHeight,
    };
  }, [teenyiconstickCircleSolidWidth, teenyiconstickCircleSolidHeight]);

  const openModalForBOTLevelUp = useCallback(() => {
    setModalForBOTLevelUpOpen(true);
  }, []);

  const closeModalForBOTLevelUp = useCallback(() => {
    setModalForBOTLevelUpOpen(false);
  }, []);

  return (
    <>
      <div
        className={`footer-start-frame35 ${className}`}
        style={footerStartFrame4Style}
      >
        <div
          className="wallet-parent15"
          onClick={openModalForBOTLevelUp}
          style={frameDiv5Style}
        >
          <div className="wallet101">
            <img className="hugeiconschat-bot1" alt="" src={hugeiconschatBot} />
          </div>
          <div className="wallet-parent16" style={frameDiv6Style}>
            <div className="wallet102">
              <div className="bot-mines-for">{bOTMinesFor1Hour}</div>
            </div>
            <div className="wallet103">
              <img
                className="fluent-emojicoin-icon16"
                alt=""
                src={fluentEmojicoin}
                style={fluentEmojicoinIcon1Style}
              />
              <div className="bot-mines-for">{prop}</div>
            </div>
          </div>
          <div className="wallet104">
            <img
              className="teenyiconstick-circle-solid2"
              alt=""
              src={teenyiconstickCircleSolid}
              style={teenyiconstickCircleSolid1Style}
            />
            <div className="bot-mines-for">{pending}</div>
          </div>
        </div>
      </div>
      {isModalForBOTLevelUpOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeModalForBOTLevelUp}
        >
          <ModalForRechargeSpeedLevelUp onClose={closeModalForBOTLevelUp} />
        </PortalPopup>
      )}
    </>
  );
};

FooterStartFrame4.propTypes = {
  className: PropTypes.string,
  hugeiconschatBot: PropTypes.string,
  bOTMinesFor1Hour: PropTypes.string,
  fluentEmojicoin: PropTypes.string,
  prop: PropTypes.string,
  teenyiconstickCircleSolid: PropTypes.string,
  pending: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
  frameDivPadding: PropTypes.any,
  frameDivWidth: PropTypes.any,
  frameDivPadding1: PropTypes.any,
  fluentEmojicoinIconWidth: PropTypes.any,
  fluentEmojicoinIconHeight: PropTypes.any,
  teenyiconstickCircleSolidWidth: PropTypes.any,
  teenyiconstickCircleSolidHeight: PropTypes.any,
};

export default FooterStartFrame4;

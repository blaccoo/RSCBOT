import { useState, useCallback } from "react";
import ModalClaimingReferalBonus from "./ModalClaimingReferalBonus";
import PortalPopup from "./PortalPopup";
import PropTypes from "prop-types";
import "./FooterStartFrame12.css";

const FooterStartFrame12 = ({
  className = "",
  profile,
  herbetPere,
  fluentEmojicoin,
  prop,
  lvlGold,
}) => {
  const [isModalClaimingReferalBonusOpen, setModalClaimingReferalBonusOpen] =
    useState(false);

  const openModalClaimingReferalBonus = useCallback(() => {
    setModalClaimingReferalBonusOpen(true);
  }, []);

  const closeModalClaimingReferalBonus = useCallback(() => {
    setModalClaimingReferalBonusOpen(false);
  }, []);

  return (
    <>
      <div className={`footer-start-frame42 ${className}`}>
        <div className="profile-parent3">
          <img className="profile-icon58" alt="" src={profile} />
          <div className="wallet-parent23">
            <div className="wallet133">
              <b className="herbet-pere1">{herbetPere}</b>
            </div>
            <div className="wallet-parent24">
              <div className="wallet134">
                <img
                  className="fluent-emojicoin-icon21"
                  alt=""
                  src={fluentEmojicoin}
                />
                <div className="herbet-pere1">{prop}</div>
              </div>
              <div className="wallet135">
                <img
                  className="fluent-emojicoin-icon21"
                  alt=""
                  src="/fluentemojicoin.svg"
                />
                <div className="herbet-pere1">5000</div>
              </div>
              <div
                className="wallet136"
                onClick={openModalClaimingReferalBonus}
              >
                <div className="herbet-pere1">Claim</div>
              </div>
            </div>
          </div>
          <div className="wallet137">
            <div className="lvl-gold">{lvlGold}</div>
          </div>
        </div>
      </div>
      {isModalClaimingReferalBonusOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeModalClaimingReferalBonus}
        >
          <ModalClaimingReferalBonus onClose={closeModalClaimingReferalBonus} />
        </PortalPopup>
      )}
    </>
  );
};

FooterStartFrame12.propTypes = {
  className: PropTypes.string,
  profile: PropTypes.string,
  herbetPere: PropTypes.string,
  fluentEmojicoin: PropTypes.string,
  prop: PropTypes.string,
  lvlGold: PropTypes.string,
};

export default FooterStartFrame12;

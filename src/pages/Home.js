import { useState, useCallback } from "react";
import ModalForBOTClaim from "../components/ModalForBOTClaim";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import CurrentBalanceFrame from "../components/CurrentBalanceFrame";
import Title from "../components/Title";
import FooterStartFrame9 from "../components/FooterStartFrame9";
import FooterSection from "../components/FooterSection";
import "./Home.css";
import Header from "../components/Header";
import Divider from "../components/Divider";
import Divider2 from "../components/Divider2";

const Home = () => {
  const [isModalForBOTClaimOpen, setModalForBOTClaimOpen] = useState(false);
  const navigate = useNavigate();

  const openModalForBOTClaim = useCallback(() => {
    setModalForBOTClaimOpen(true);
  }, []);

  const closeModalForBOTClaim = useCallback(() => {
    setModalForBOTClaimOpen(false);
  }, []);

  const onProfileIconClick = useCallback(() => {
    navigate("/friends-profile");
  }, [navigate]);

  const onHomeContainerClick = useCallback(() => {
    navigate("/task");
  }, [navigate]);


  return (
    <>
      <div className="home">
      <Header/>
        <div className="home-body-frame2">
      
         
          <Divider/>
          <CurrentBalanceFrame
            prop="104.50 "
            divColor="#e4e4f0"
            lvlBronzeColor="#e4e4f0"
          />
          <Title
            frameDivHeight="60px"
            frameDivOverflowY="auto"
            vector="/vector3.svg"
            vector1="/vector4.svg"
            vector2="/vector5.svg"
            vector3="/vector8.svg"
            vector4="/vector9.svg"
            vector5="/vector3.svg"
            vector6="/vector4.svg"
            vector7="/vector5.svg"
            vector8="/vector9.svg"
            referralCountColor="#fff"
            fRIENDSColor="#fff"
            taskKeyColor="#fff"
            kEYSColor="#fff"
          />
          <div className="mining-frame2">
            <div className="mining-frame3">
              <div className="mining-info-frame">
                <div className="mining-tap-frame">
                  <img
                    className="mining-button-icon"
                    alt=""
                    src="/mining-button@2x.png"
                  />
                </div>
                <div className="wallet24" onClick={openModalForBOTClaim}>
                  <img
                    className="hugeiconschat-bot"
                    alt=""
                    src="/hugeiconschatbot1.svg"
                  />
                  <div className="bot">BOT</div>
                </div>
              </div>
            </div>
            <FooterStartFrame9 />
            <div className="footer-start-frame4">
              <div className="footer-frame3">
                <div className="home-referral3">
                  <div className="referal-frame3">
                    <div className="referal-text3">
                      <div className="refer-friends-to3">
                        Refer friends to get 5000 referral bonus now
                      </div>
                    </div>
                    <div className="frame-parent15">
                      <div className="httpsrisingcoinxyzrefant-wrapper1">
                        <div className="bot">
                          https://risingcoin.xyz?ref=anthonyeyo
                        </div>
                      </div>
                      <div className="rectangle-parent6">
                        <div className="frame-child8" />
                        <div className="frame-child9" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Divider2/>
          <FooterSection />
        </div>
      </div>
      {isModalForBOTClaimOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeModalForBOTClaim}
        >
          <ModalForBOTClaim onClose={closeModalForBOTClaim} />
        </PortalPopup>
      )}
    </>
  );
};

export default Home;

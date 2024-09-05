import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CurrentBalanceFrame from "../components/CurrentBalanceFrame";
import Title from "../components/Title";
import Footer from "../components/Footer";
import "./ComingSonWallet.css";
import Divider from "../components/Divider";
import Header from "../components/Header";
import FooterSection from "../components/FooterSection";

const ComingSonWallet = () => {
  const navigate = useNavigate();

  const onProfileIconClick = useCallback(() => {
    navigate("/friends-profile");
  }, [navigate]);

  return (
    <div className="coming-son-wallet">
      <Header/>
      <div className="home-body-frame3">
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
        <div className="mining-frame4">
          <div className="mining-frame5">
            <div className="mining-info-frame1">
              <div className="wallet-wrapper">
                <div className="wallet25">
                  <div className="risingcoin-wallet-comes-container">
                    <p className="risingcoin-wallet-comes-with-a">
                      <span className="risingcoin">{`RisingCoin `}</span>
                      <b className="risingcoin">{`Wallet `}</b>
                      <span className="comes-with-a">
                        comes with a Pee-to-Peer trading system.
                      </span>
                    </p>
                    <p className="risingcoin-wallet-comes-with-a">
                      You will be able to store and exchange your cryptocurrency
                      to fiat at the best price ever.
                    </p>
                  </div>
                </div>
              </div>
              <img
                className="hugeiconscoming-soon-02"
                alt=""
                src="/hugeiconscomingsoon02.svg"
              />
            </div>
          </div>
          <div className="footer-start-frame5">
            <div className="wallet-wrapper">
              <div className="wallet25">
                <div className="risingcoin-wallet-comes-container">
                  Coming Soon
                </div>
              </div>
            </div>
          </div>
          <div className="footer-start-frame6">
            <div className="footer-frame4">
              <div className="home-referral4">
                <div className="referal-frame4">
                  <div className="referal-text4">
                    <div className="refer-friends-to4">
                      Refer friends to get referral bonus now
                    </div>
                  </div>
                  <div className="frame-parent18">
                    <div className="httpsrisingcoinxyzrefant-wrapper2">
                      <div className="httpsrisingcoinxyzrefant4">
                        https://risingcoin.xyz?ref=anthonyeyo
                      </div>
                    </div>
                    <div className="rectangle-parent7">
                      <div className="frame-child10" />
                      <div className="frame-child11" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterSection />
      </div>
    </div>
  );
};

export default ComingSonWallet;

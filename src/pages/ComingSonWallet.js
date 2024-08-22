import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CurrentBalanceFrame from "../components/CurrentBalanceFrame";
import Title from "../components/Title";
import FooterStartFrame5 from "../components/FooterStartFrame5";
import BottomTabs1 from "../components/BottomTabs1";
import "./ComingSonWallet.css";

const ComingSonWallet = () => {
  const navigate = useNavigate();

  const onHomeContainerClick = useCallback(() => {
    navigate("/task");
  }, [navigate]);

  return (
    <div className="coming-son-wallet">
      <div className="home-body-frame3">
        <div className="header36">
          <div className="notification-and-count7">
            <img
              className="notification-icon32"
              alt=""
              src="/notification1.svg"
            />
            <b className="b25">12</b>
          </div>
          <div className="connect-wallet36">
            <b className="connect36">Connect</b>
          </div>
          <img className="profile-icon36" alt="" src="/profile1.svg" />
        </div>
        <CurrentBalanceFrame prop="104.50 " />
        <Title frameDivHeight="60px" frameDivOverflowY="auto" />
        <div className="mining-frame4">
          <div className="mining-frame5">
            <div className="mining-info-frame1">
              <div className="wallet-wrapper">
                <div className="wallet18">
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
          <div className="footer-start-frame19">
            <div className="wallet-wrapper">
              <div className="wallet18">
                <div className="risingcoin-wallet-comes-container">
                  Coming Soon
                </div>
              </div>
            </div>
          </div>
          <FooterStartFrame5 propAlignSelf="unset" propWidth="340px" />
        </div>
        <BottomTabs1
          materialSymbolsLighttaskAlt="/materialsymbolslighttaskaltrounded1.svg"
          propOverflowY="unset"
          propBorder="1px solid #8e5ce0"
          homeBorderRadius="unset"
          homeBorder="unset"
          homeHeight="unset"
          iconParkdotTop="0.5px"
          onHomeContainerClick={onHomeContainerClick}
        />
      </div>
    </div>
  );
};

export default ComingSonWallet;

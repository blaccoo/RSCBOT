import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CurrentBalanceFrame3 from "../components/CurrentBalanceFrame3";
import CoinOvervieFrame2 from "../components/CoinOvervieFrame2";
import BottomTabs1 from "../components/BottomTabs1";
import "./USDT.css";

const USDT = () => {
  const navigate = useNavigate();

  const onWalletContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onHomeContainerClick = useCallback(() => {
    navigate("/task");
  }, [navigate]);

  return (
    <div className="usdt15">
      <div className="wallet-body-frame11">
        <div className="header14">
          <img className="menu-icon14" alt="" src="/menu-icon.svg" />
          <img className="notification-icon13" alt="" src="/notification.svg" />
          <div className="connect-wallet14">
            <b className="connect14">Connect</b>
          </div>
          <img className="profile-icon14" alt="" src="/profile.svg" />
        </div>
        <CurrentBalanceFrame3 />
        <div className="title3">
          <div className="title-instruction-frame3">
            <div className="use-trade-to">
              Use Trade to Buy or Sell Any Currency Listed
            </div>
          </div>
        </div>
        <div className="coin-overview-and-transactions10">
          <CoinOvervieFrame2 />
          <div className="footer-start-frame9">
            <div className="footer-frame9">
              <div className="home-referral9">
                <div className="referal-frame9">
                  <div className="referal-link-frame9">
                    <div className="httpsrisingcoinxyzrefant9">
                      https://risingcoin.xyz?ref=anthonyeyo
                    </div>
                    <div className="rectangle-parent10">
                      <div className="frame-child18" />
                      <div className="frame-child19" />
                    </div>
                  </div>
                  <div className="referal-text9">
                    <div className="refer-friends-to9">
                      Refer friends to get 3 RSC or 5% every time they mine
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <BottomTabs1
          materialSymbolsLighttaskAlt="/materialsymbolslighttaskaltrounded1.svg"
          onWalletContainerClick={onWalletContainerClick}
          onHomeContainerClick={onHomeContainerClick}
        />
      </div>
    </div>
  );
};

export default USDT;

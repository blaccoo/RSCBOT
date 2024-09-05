import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CurrentBalanceFrame3 from "../components/CurrentBalanceFrame3";
import CoinOvervieFrame2 from "../components/CoinOvervieFrame2";
import BottomTabs2 from "../components/BottomTabs2";
import "./USDT.css";
import Divider from "../components/Divider";
import Header from "../components/Header";
import FooterSection from "../components/FooterSection";

const USDT = () => {
  const navigate = useNavigate();

  const onProfileIconClick = useCallback(() => {
    navigate("/friends-profile");
  }, [navigate]);

  return (
    <div className="usdt15">
      <Header/>
      <div className="wallet-body-frame11">
      <Divider/>
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
          <div className="footer-start-frame1">
            <div className="footer-frame1">
              <div className="home-referral1">
                <div className="referal-frame1">
                  <div className="referal-text1">
                    <div className="refer-friends-to1">
                      Refer friends to get 5000 referral bonus now
                    </div>
                  </div>
                  <div className="frame-parent4">
                    <div className="httpsrisingcoinxyzrefant-container">
                      <div className="httpsrisingcoinxyzrefant1">
                        https://risingcoin.xyz?ref=anthonyeyo
                      </div>
                    </div>
                    <div className="rectangle-parent2">
                      <div className="frame-child2" />
                      <div className="frame-child3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    <FooterSection/>
      </div>
    </div>
  );
};

export default USDT;

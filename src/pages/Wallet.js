import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import CurrentBalanceFrame5 from "../components/CurrentBalanceFrame5";
import CoinFrame from "../components/CoinFrame";
import BottomTabs1 from "../components/BottomTabs1";
import "./Wallet.css";
import Divider from "../components/Divider";

const Wallet = () => {
  const navigate = useNavigate();

  const onWalletContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onHomeContainerClick = useCallback(() => {
    navigate("/task");
  }, [navigate]);

  return (
    <div className="wallet17">
      <div className="wallet-body-frame27">
        <Header />
        <CurrentBalanceFrame5 />
        <div className="title9">
          <div className="title-instruction-frame7">
            <div className="use-trade-to1">
              Use Trade to Buy or Sell Any Currency Listed
            </div>
          </div>
        </div>
        <div className="mining-features-frame">
          <div className="mined-balance">
            <CoinFrame
              ellipse22="/ellipse-22@2x.png"
              risingCoin="RisingCoin"
              coinTotalConversion="$89.60"
              balance="105.45"
              rSC="RSC"
            />
            <CoinFrame
              ellipse22="/ellipse-221@2x.png"
              risingCoin="Etherum"
              coinTotalConversion="$17.60"
              balance="23,980.45"
              rSC="Naira"
            />
            <CoinFrame
              ellipse22="/ellipse-222@2x.png"
              risingCoin="Dollar"
              coinTotalConversion="$2635.60"
              balance="2635.60"
              rSC="USDT"
            />
            <CoinFrame
              ellipse22="/ellipse-223@2x.png"
              risingCoin="Binance BNB"
              coinTotalConversion="$2007.60"
              balance="3.78"
              rSC="BNB"
            />
          </div>
          <div className="footer-start-frame17">
            <div className="footer-frame17">
              <div className="home-referral17">
                <div className="referal-frame17">
                  <div className="referal-link-frame17">
                    <div className="httpsrisingcoinxyzrefant17">
                      https://risingcoin.xyz?ref=anthonyeyo
                    </div>
                    <div className="rectangle-parent20">
                      <div className="frame-child36" />
                      <div className="frame-child37" />
                    </div>
                  </div>
                  <div className="referal-text17">
                    <div className="refer-friends-to17">
                      Refer friends to get 3 RSC or 5% every time they mine
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
<Divider/>
        <BottomTabs1
          materialSymbolsLighttaskAlt="/materialsymbolslighttaskaltrounded1.svg"
          propOverflowY="unset"
          propBorder="1px solid #8e5ce0"
          homeBorderRadius="unset"
          homeBorder="unset"
          homeHeight="unset"
          iconParkdotTop="0.5px"
          onWalletContainerClick={onWalletContainerClick}
          onHomeContainerClick={onHomeContainerClick}
        />
      </div>
    </div>
  );
};

export default Wallet;

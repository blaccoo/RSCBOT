import CoinFrame from "./CoinFrame";
import PropTypes from "prop-types";
import "./MiningFeaturesFrame.css";

const MiningFeaturesFrame = ({ className = "" }) => {
  return (
    <div className={`mining-features-frame ${className}`}>
      <div className="mined-balance1">
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
      <div className="footer-start-frame40">
        <div className="footer-frame12">
          <div className="home-referral12">
            <div className="referal-frame12">
              <div className="referal-text12">
                <div className="refer-friends-to10">
                  Refer friends to get 5000 referral bonus now
                </div>
              </div>
              <div className="frame-parent57">
                <div className="httpsrisingcoinxyzrefant-wrapper6">
                  <div className="httpsrisingcoinxyzrefant10">
                    https://risingcoin.xyz?ref=anthonyeyo
                  </div>
                </div>
                <div className="rectangle-parent13">
                  <div className="frame-child22" />
                  <div className="frame-child23" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

MiningFeaturesFrame.propTypes = {
  className: PropTypes.string,
};

export default MiningFeaturesFrame;

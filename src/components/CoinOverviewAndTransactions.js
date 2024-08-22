import { useMemo } from "react";
import PropTypes from "prop-types";
import "./CoinOverviewAndTransactions.css";

const CoinOverviewAndTransactions = ({
  className = "",
  propHeight,
  propHeight1,
}) => {
  const coinOverviewAndTransactionsStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const footerStartFrameStyle = useMemo(() => {
    return {
      height: propHeight1,
    };
  }, [propHeight1]);

  return (
    <div
      className={`coin-overview-and-transactions22 ${className}`}
      style={coinOverviewAndTransactionsStyle}
    >
      <div className="footer-start-frame27" style={footerStartFrameStyle}>
        <div className="footer-frame19">
          <div className="home-referral19">
            <div className="referal-frame19">
              <div className="referal-link-frame19">
                <div className="httpsrisingcoinxyzrefant19">
                  https://risingcoin.xyz?ref=anthonyeyo
                </div>
                <div className="rectangle-parent22">
                  <div className="frame-child40" />
                  <div className="frame-child41" />
                </div>
              </div>
              <div className="referal-text19">
                <div className="refer-friends-to19">
                  Refer friends to get 3 RSC or 5% every time they mine
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CoinOverviewAndTransactions.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
  propHeight1: PropTypes.any,
};

export default CoinOverviewAndTransactions;

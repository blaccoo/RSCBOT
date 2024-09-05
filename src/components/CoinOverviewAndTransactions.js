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

  const footerStartFrame3Style = useMemo(() => {
    return {
      height: propHeight1,
    };
  }, [propHeight1]);

  return (
    <div
      className={`coin-overview-and-transactions22 ${className}`}
      style={coinOverviewAndTransactionsStyle}
    >
      <div className="footer-start-frame32" style={footerStartFrame3Style}>
        <div className="footer-frame11">
          <div className="home-referral11">
            <div className="referal-frame11">
              <div className="referal-link-frame1">
                <div className="httpsrisingcoinxyzrefant9">
                  https://risingcoin.xyz?ref=anthonyeyo
                </div>
                <div className="rectangle-parent12">
                  <div className="frame-child20" />
                  <div className="frame-child21" />
                </div>
              </div>
              <div className="referal-text11">
                <div className="refer-friends-to9">
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

import AdsFrame from "./AdsFrame";
import PropTypes from "prop-types";
import "./CurrentBalanceFrame4.css";

const CurrentBalanceFrame4 = ({ className = "" }) => {
  return (
    <div className={`current-balance-frame9 ${className}`}>
      <div className="title12">
        <div className="title-instruction-frame9">
          <div className="buy-and-sell">
            Buy and Sell Cryptocurrency with Fiat using Peer to Peer
          </div>
        </div>
      </div>
      <div className="ads-frame6">
        <div className="ouiml-create-advanced-job-wrapper">
          <img
            className="ouiml-create-advanced-job-icon"
            alt=""
            src="/ouimlcreateadvancedjob.svg"
          />
        </div>
        <div className="create-ad-wrapper">
          <div className="buy-and-sell">Create Ad</div>
        </div>
      </div>
      <div className="ads-frame7">
        <div className="ouiml-create-advanced-job-wrapper">
          <img
            className="ouiml-create-advanced-job-icon"
            alt=""
            src="/mingcuteuser4fill2.svg"
          />
        </div>
        <div className="my-ads-parent">
          <div className="my-ads">My Ads</div>
          <div className="manage-all-your">Manage all your ads here</div>
        </div>
      </div>
      <AdsFrame updatePaymentInformation="Update Payment and Trades" />
    </div>
  );
};

CurrentBalanceFrame4.propTypes = {
  className: PropTypes.string,
};

export default CurrentBalanceFrame4;

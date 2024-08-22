import WithdrawalLimitInfo from "../components/WithdrawalLimitInfo";
import "./USDTWithdrawalModal.css";

const USDTWithdrawalModal = () => {
  return (
    <div className="usdt-withdrawal-modal">
      <div className="usernmar-frame">
        <b className="withdraw-usdt-to">Withdraw USDT To External Wallet</b>
      </div>
      <WithdrawalLimitInfo />
      <div className="usernmar-frame1">
        <b className="amount">Amount</b>
      </div>
      <div className="rectangle-group">
        <div className="frame-inner" />
        <div className="enter-amount-wrapper">
          <div className="enter-amount1">Enter Amount</div>
        </div>
        <div className="wrapper1">
          <div className="fee">+</div>
        </div>
        <div className="fee-wrapper">
          <div className="fee">Fee</div>
        </div>
        <b className="usdt1">USDT</b>
      </div>
      <div className="frame1">
        <div className="confirm-button">
          <div className="close">
            <b className="send">Send</b>
          </div>
        </div>
      </div>
      <div className="error-message">Error message</div>
    </div>
  );
};

export default USDTWithdrawalModal;

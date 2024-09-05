import "./USDTSendModal.css";

const USDTSendModal = () => {
  return (
    <div className="usdt-send-modal">
      <div className="space">
        <b className="send-usdt-to">
          Send USDT to Users only on this platform to send USDT to external
          wallet Please use withdrawal method
        </b>
      </div>
      <div className="usernmar-frame4">
        <b className="address">Address</b>
      </div>
      <div className="rectangle-group">
        <div className="frame-item" />
        <div className="enter-recipient-address-wrapper">
          <div className="enter-recipient-address">Enter Recipient Address</div>
        </div>
        <div className="flowbitewallet-solid">
          <img className="group-icon" alt="" src="/group.svg" />
        </div>
      </div>
      <div className="usernmar-frame5">
        <b className="address">Amount</b>
      </div>
      <div className="rectangle-container">
        <div className="frame-item" />
        <div className="enter-recipient-address-wrapper">
          <div className="enter-recipient-address">Enter Amount</div>
        </div>
        <div className="wrapper2">
          <div className="div27">+</div>
        </div>
        <div className="fee-container">
          <div className="div27">Fee</div>
        </div>
        <b className="usdt6">USDT</b>
      </div>
      <div className="frame5">
        <div className="confirm-button5">
          <div className="close3">
            <b className="send1">Send</b>
          </div>
        </div>
      </div>
      <div className="not-enough-coin">Not enough Coin to Send</div>
      <div className="username-does-not">Username does not match record</div>
    </div>
  );
};

export default USDTSendModal;

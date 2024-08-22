import "./USDTReceiveModal.css";

const USDTReceiveModal = () => {
  return (
    <div className="usdt-receive-modal">
      <div className="title7">
        <b className="receive-bep-20">Receive BEP 20 USDT</b>
      </div>
      <div className="scan-fram">
        <img className="qr-code-icon" alt="" src="/qr-code@2x.png" />
        <div className="address1">
          <div className="x4ef67t76h90klmbx45e">X4EF67T76H90KLMBX45E</div>
        </div>
        <div className="address-info">
          <div className="x4ef67t76h90klmbx45e">Your USDT address</div>
        </div>
      </div>
      <div className="warning">
        <div className="x4ef67t76h90klmbx45e">
          Receive only BEP 20 USDT to this address. Sending other asset to this
          address may result in permanent loss.
        </div>
      </div>
      <div className="frame17">
        <div className="confirm-button18">
          <div className="close13">
            <b className="copy">Copy</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default USDTReceiveModal;

import { useCallback } from "react";
import "./ConfirmAddAmountToDeposit.css";

const ConfirmAddAmountToDeposit = () => {
  const onFrameContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='confirmButtonContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="confirm-add-amount-to-deposit1">
      <div className="usernmar-frame13">
        <b className="send2">Send</b>
      </div>
      <div className="usernmar-frame14">
        <b className="deposit-fee">Deposit fee</b>
        <b className="b10">+</b>
        <b className="b10">NGN</b>
        <b className="b10">100</b>
      </div>
      <div className="usernmar-frame14">
        <b className="deposit-fee">Receive in wallet</b>
        <b className="b10">NGN</b>
        <b className="b10">100</b>
      </div>
      <div className="usernmar-frame16">
        <b className="deposit-fee">Merchant</b>
        <b className="b10">@</b>
        <b className="b10">username</b>
        <div className="bitcoin-iconsverify-filled1">
          <img className="vector-icon3" alt="" src="/vector2.svg" />
        </div>
      </div>
      <div className="usernmar-frame14">
        <b className="deposit-fee">Payment Time</b>
        <b className="b10">15</b>
        <b className="b10">Minutes</b>
      </div>
      <div className="frame12" onClick={onFrameContainerClick}>
        <div
          className="confirm-button13"
          data-scroll-to="confirmButtonContainer"
        >
          <div className="close9">
            <b className="confirm1">Confirm</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmAddAmountToDeposit;

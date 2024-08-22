import { useCallback } from "react";
import "./ConfirmAddAmountToDeposit1.css";

const ConfirmAddAmountToDeposit1 = () => {
  const onFrameContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='confirmButtonContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="confirm-add-amount-to-deposit">
      <div className="usernmar-frame8">
        <b className="receive">Receive</b>
      </div>
      <div className="usernmar-frame9">
        <b className="withdrwal-fee">Withdrwal fee</b>
        <b className="username">-</b>
        <b className="username">NGN</b>
        <b className="username">100</b>
      </div>
      <div className="usernmar-frame9">
        <b className="withdrwal-fee">Receive in account</b>
        <b className="username">NGN</b>
        <b className="username">9400</b>
      </div>
      <div className="usernmar-frame11">
        <b className="withdrwal-fee">Merchant</b>
        <b className="username">@</b>
        <b className="username">username</b>
        <div className="bitcoin-iconsverify-filled">
          <img className="vector-icon2" alt="" src="/vector2.svg" />
        </div>
      </div>
      <div className="usernmar-frame9">
        <b className="withdrwal-fee">Payment Time</b>
        <b className="username">15</b>
        <b className="username">Minutes</b>
      </div>
      <div className="frame10" onClick={onFrameContainerClick}>
        <div
          className="confirm-button11"
          data-scroll-to="confirmButtonContainer"
        >
          <div className="close7">
            <b className="confirm">Confirm</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmAddAmountToDeposit1;

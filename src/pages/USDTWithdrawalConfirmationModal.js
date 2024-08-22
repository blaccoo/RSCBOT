import ConfirmationFrame from "../components/ConfirmationFrame";
import "./USDTWithdrawalConfirmationModal.css";

const USDTWithdrawalConfirmationModal = () => {
  return (
    <div className="usdt-withdrawal-confirmation-m">
      <ConfirmationFrame
        propWidth="359px"
        frame="/frame1.svg"
        propWidth1="127.5px"
        propOverflow="hidden"
        propWidth2="359px"
        paymentConfirmed="You Did It!"
        youHaveConfirmedRecipient="You successful Withdraw USDT to another Wallet"
        yourWithdrawalWasSuccessful="Go back to wallet"
      />
      <div className="frame18">
        <div className="frame18">
          <div className="close14">
            <b className="back-to-wallet4">Back to Wallet</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default USDTWithdrawalConfirmationModal;

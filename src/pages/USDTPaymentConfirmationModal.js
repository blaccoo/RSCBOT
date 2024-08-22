import ConfirmationFrame from "../components/ConfirmationFrame";
import "./USDTPaymentConfirmationModal.css";

const USDTPaymentConfirmationModal = () => {
  return (
    <div className="usdt-payment-confirmation-moda">
      <ConfirmationFrame
        propWidth="359px"
        frame="/frame1.svg"
        propWidth1="127.5px"
        propOverflow="hidden"
        propWidth2="359px"
        paymentConfirmed="You Did It!"
        youHaveConfirmedRecipient="You successful send USDT to another user "
        yourWithdrawalWasSuccessful="Go back to wallet"
      />
      <div className="frame9">
        <div className="frame9">
          <div className="close6">
            <b className="back-to-wallet2">Back to Wallet</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default USDTPaymentConfirmationModal;

import "./AddAmountToDeposit.css";

const AddAmountToDeposit = () => {
  return (
    <div className="add-amount-to-deposit">
      <div className="usernmar-frame6">
        <b className="deposit-cash">Deposit Cash</b>
      </div>
      <div className="usernmar-frame7">
        <b className="how-much-do1">How much do you want to deposit?</b>
      </div>
      <div className="add-amount-to-deposit-inner">
        <div className="frame-parent2">
          <div className="group">
            <div className="div50">0</div>
            <div className="ngn11">NGN</div>
          </div>
          <div className="bal-group">
            <div className="bal1">Bal:</div>
            <div className="bal1">0.00</div>
          </div>
        </div>
      </div>
      <div className="frame6">
        <div className="confirm-button7">
          <div className="min-amount-n5001">Min Amount N500</div>
        </div>
      </div>
      <div className="frame7">
        <div className="confirm-button8">
          <div className="close4">
            <b className="countinue1">Countinue</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAmountToDeposit;

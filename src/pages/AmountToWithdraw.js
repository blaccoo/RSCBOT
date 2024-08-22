import "./AmountToWithdraw.css";

const AmountToWithdraw = () => {
  return (
    <div className="amount-to-withdraw">
      <div className="usernmar-frame2">
        <b className="withdraw-cash">Withdraw Cash</b>
      </div>
      <div className="usernmar-frame3">
        <b className="how-much-do">How much do you want to Withdraw?</b>
      </div>
      <div className="amount-to-withdraw-inner">
        <div className="frame-parent1">
          <div className="parent">
            <div className="div7">0</div>
            <div className="ngn2">NGN</div>
          </div>
          <div className="bal-parent">
            <div className="bal">Bal:</div>
            <div className="bal">0.00</div>
          </div>
        </div>
      </div>
      <div className="frame3">
        <div className="confirm-button2">
          <div className="min-amount-n500">Min Amount N500</div>
        </div>
      </div>
      <div className="frame4">
        <div className="confirm-button3">
          <div className="close2">
            <b className="countinue">Countinue</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmountToWithdraw;

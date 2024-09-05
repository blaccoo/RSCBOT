import { useCallback } from "react";
import "./UpdatedAccountModal.css";

const UpdatedAccountModal = () => {
  const onFrameContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='closeContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="updated-account-modal">
      <div className="usernmar-frame18">
        <b className="update-payment">Update Payment</b>
      </div>
      <div className="usernmar-frame19">
        <b className="opay-ng">Opay NG</b>
      </div>
      <div className="rectangle-parent3">
        <div className="frame-child4" />
        <div className="add-account-number-wrapper">
          <div className="add-account-number">Add Account Number</div>
        </div>
        <b className="acc">Acc</b>
      </div>
      <div className="rectangle-parent4">
        <div className="frame-child4" />
        <div className="add-account-number-wrapper">
          <div className="add-account-number">Account Name</div>
        </div>
        <b className="name2">Name</b>
      </div>
      <div className="frame14">
        <div className="confirm-button15" />
      </div>
      <div className="frame15" onClick={onFrameContainerClick}>
        <div className="confirm-button16">
          <div className="close11" data-scroll-to="closeContainer">
            <b className="add-account">Add Account</b>
          </div>
        </div>
      </div>
      <div className="error-message1">Error message</div>
    </div>
  );
};

export default UpdatedAccountModal;

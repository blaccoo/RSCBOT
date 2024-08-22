import FrameComponent from "../components/FrameComponent";
import CoinOverviewAndTransactions from "../components/CoinOverviewAndTransactions";
import SocialMediaHandle from "../components/SocialMediaHandle";
import BottomTabs from "../components/BottomTabs";
import "./AddCash.css";

const AddCash = () => {
  return (
    <div className="add-cash">
      <div className="wallet-body-frame29">
        <div className="header34">
          <img className="menu-icon33" alt="" src="/menu-icon.svg" />
          <img className="notification-icon30" alt="" src="/notification.svg" />
          <div className="connect-wallet34">
            <b className="connect34">Connect</b>
          </div>
          <img className="profile-icon34" alt="" src="/profile.svg" />
        </div>
        <div className="send-and-recieve-frame7">
          <div className="p2p7">
            <div className="trade12">Chose from available merchant</div>
          </div>
        </div>
        <div className="frame-parent12">
          <div className="select-a-merchant-container">
            <div className="select-a-merchant1">Select a Merchant</div>
          </div>
          <FrameComponent withdraw="Deposit" prop="+" propColor="#5ebba9" />
          <FrameComponent withdraw="Deposit" prop="+" propColor="#c4c4c4" />
          <FrameComponent withdraw="Deposit" prop="+" propColor="#c4c4c4" />
          <FrameComponent withdraw="Deposit" prop="+" propColor="#c4c4c4" />
          <FrameComponent withdraw="Deposit" prop="+" propColor="#c4c4c4" />
          <FrameComponent withdraw="Deposit" prop="+" propColor="#c4c4c4" />
          <FrameComponent withdraw="Deposit" prop="+" propColor="#c4c4c4" />
          <FrameComponent withdraw="Deposit" prop="+" propColor="#c4c4c4" />
          <FrameComponent withdraw="Deposit" prop="+" propColor="#c4c4c4" />
        </div>
        <CoinOverviewAndTransactions propHeight="211px" propHeight1="193px" />
        <SocialMediaHandle group182="/group-1821.svg" />
        <BottomTabs
          propHeight="unset"
          walletIcon="/wallet-icon.svg"
          wallet="Wallet"
          fluenthome48Filled="/fluenthome48filled.svg"
          home="Home"
          tradeIcon="/trade-icon.svg"
          trade="Trade"
        />
      </div>
    </div>
  );
};

export default AddCash;

import FrameComponent from "../components/FrameComponent";
import CoinOverviewAndTransactions from "../components/CoinOverviewAndTransactions";
import SocialMediaHandle from "../components/SocialMediaHandle";
import BottomTabs from "../components/BottomTabs";
import "./ChoseWhoToWithdrawFrom.css";

const ChoseWhoToWithdrawFrom = () => {
  return (
    <div className="chose-who-to-withdraw-from">
      <div className="wallet-body-frame21">
        <div className="header25">
          <img className="menu-icon25" alt="" src="/menu-icon.svg" />
          <img className="notification-icon23" alt="" src="/notification.svg" />
          <div className="connect-wallet25">
            <b className="connect25">Connect</b>
          </div>
          <img className="profile-icon25" alt="" src="/profile.svg" />
        </div>
        <div className="send-and-recieve-frame3">
          <div className="p2p4">
            <div className="trade9">Chose from available merchant</div>
          </div>
        </div>
        <div className="frame-parent8">
          <div className="select-a-merchant-wrapper">
            <div className="select-a-merchant">Select a Merchant</div>
          </div>
          <FrameComponent withdraw="Withdraw" prop="-" />
          <FrameComponent withdraw="Withdraw" prop="-" propColor="#5ebba9" />
          <FrameComponent withdraw="Withdraw" prop="-" propColor="#c4c4c4" />
          <FrameComponent withdraw="Withdraw" prop="-" propColor="#c4c4c4" />
          <FrameComponent withdraw="Withdraw" prop="-" propColor="#c4c4c4" />
          <FrameComponent withdraw="Withdraw" prop="-" propColor="#c4c4c4" />
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

export default ChoseWhoToWithdrawFrom;

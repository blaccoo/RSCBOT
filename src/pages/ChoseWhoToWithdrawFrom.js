import FrameComponent from "../components/FrameComponent";
import CoinOverviewAndTransactions from "../components/CoinOverviewAndTransactions";
import SocialMediaHandle from "../components/SocialMediaHandle";
import BottomTabs from "../components/BottomTabs";
import "./ChoseWhoToWithdrawFrom.css";
import Divider from "../components/Divider";
import Header from "../components/Header";
import FooterSection from "../components/FooterSection";

const ChoseWhoToWithdrawFrom = () => {
  return (
    <div className="chose-who-to-withdraw-from">
      <Header/>
      <div className="wallet-body-frame21">
  <Divider/>
        <div className="send-and-recieve-frame3">
          <div className="p2p4">
            <div className="trade11">Chose from available merchant</div>
          </div>
        </div>
        <div className="frame-parent10">
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
   <FooterSection />
      </div>
    </div>
  );
};

export default ChoseWhoToWithdrawFrom;

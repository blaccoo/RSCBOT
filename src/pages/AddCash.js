import FrameComponent from "../components/FrameComponent";
import CoinOverviewAndTransactions from "../components/CoinOverviewAndTransactions";
import SocialMediaHandle from "../components/SocialMediaHandle";

import "./AddCash.css";
import FooterSection from "../components/FooterSection";
import Divider from "../components/Divider";
import Header from "../components/Header";

const AddCash = () => {
  return (
    <div className="add-cash">
      <Header/>
      <div className="wallet-body-frame29">
    <Divider/>
        <div className="send-and-recieve-frame7">
          <div className="p2p7">
            <div className="trade14">Chose from available merchant</div>
          </div>
        </div>
        <div className="frame-parent16">
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
        <FooterSection/>
      </div>
    </div>
  );
};

export default AddCash;

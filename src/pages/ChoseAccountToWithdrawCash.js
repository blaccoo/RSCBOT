import CoinOverviewAndTransactions from "../components/CoinOverviewAndTransactions";
import SocialMediaHandle from "../components/SocialMediaHandle";
import BottomTabs from "../components/BottomTabs";
import "./ChoseAccountToWithdrawCash.css";
import Header from "../components/Header";
import Divider from "../components/Divider";
import Footer from "../components/Footer";
import FooterSection from "../components/FooterSection";

const ChoseAccountToWithdrawCash = () => {
  return (
    <div className="chose-account-to-withdraw-cash">
      <Header/>
      <div className="wallet-body-frame23">
   <Divider/>
        <div className="send-and-recieve-frame4">
          <div className="p2p5">
            <div className="trade12">
              From Which Account do you want to receive your cash?
            </div>
          </div>
        </div>
        <div className="send-and-recieve-frame5">
          <div className="p2p5">
            <div className="trade13">
              Note: Only add payment account that is in your legal name that
              also correspond to what you have in the app
            </div>
          </div>
        </div>
        <div className="current-balance-frame4">
          <div className="title8">
            <div className="title-instruction-frame6">
              <div className="add-your-payment2">Add your payment methods</div>
            </div>
          </div>
          <div className="payment-banks-added2">
            <div className="select-one-container">
              <div className="select-one1">Select one</div>
            </div>
            <div className="frame-parent11">
              <div className="first-bank-of-nigeria-container">
                <div className="select-one1">First Bank of Nigeria</div>
                <div className="remove7">REMOVE</div>
              </div>
              <div className="wrapper8">
                <div className="select-one1">3110888763567</div>
              </div>
              <div className="wrapper8">
                <div className="select-one1">User NAme</div>
              </div>
            </div>
            <div className="frame-parent11">
              <div className="first-bank-of-nigeria-container">
                <div className="select-one1">Opy</div>
                <div className="remove7">REMOVE</div>
              </div>
              <div className="wrapper8">
                <div className="select-one1">3110888763567</div>
              </div>
              <div className="wrapper8">
                <div className="select-one1">User NAme</div>
              </div>
            </div>
            <div className="frame-parent11">
              <div className="first-bank-of-nigeria-container">
                <div className="select-one1">GTBank</div>
                <div className="remove7">REMOVE</div>
              </div>
              <div className="wrapper8">
                <div className="select-one1">3110888763567</div>
              </div>
              <div className="wrapper8">
                <div className="select-one1">User NAme</div>
              </div>
            </div>
          </div>
        </div>
        <CoinOverviewAndTransactions propHeight="211px" propHeight1="193px" />
        <SocialMediaHandle group182="/group-1821.svg" />
     <FooterSection/>
      </div>
    </div>
  );
};

export default ChoseAccountToWithdrawCash;

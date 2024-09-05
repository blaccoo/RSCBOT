import CoinOverviewAndTransactions from "../components/CoinOverviewAndTransactions";
import SocialMediaHandle from "../components/SocialMediaHandle";
import BottomTabs from "../components/BottomTabs";
import "./ChoseAccountAddCash.css";
import Header from "../components/Header";
import FooterSection from "../components/FooterSection";

const ChoseAccountAddCash = () => {
  return (
    <div className="chose-account-add-cash">
      <Header/>
      <div className="wallet-body-frame1">
      <Divider/>
        <div className="send-and-recieve-frame">
          <div className="p2p">
            <div className="trade">
              From Which Account are you paying the Merchant From?
            </div>
          </div>
        </div>
        <div className="send-and-recieve-frame1">
          <div className="p2p">
            <div className="trade1">
              Note: Only make payment from an account that is in your legal name
              that corresponse to what you have in the app
            </div>
          </div>
        </div>
        <div className="current-balance-frame">
          <div className="title">
            <div className="title-instruction-frame">
              <div className="add-your-payment">Add your payment methods</div>
            </div>
          </div>
          <div className="payment-banks-added">
            <div className="select-one-wrapper">
              <div className="select-one">Select one</div>
            </div>
            <div className="frame-group">
              <div className="first-bank-of-nigeria-parent">
                <div className="select-one">First Bank of Nigeria</div>
                <div className="remove">REMOVE</div>
              </div>
              <div className="wrapper">
                <div className="select-one">3110888763567</div>
              </div>
              <div className="wrapper">
                <div className="select-one">User NAme</div>
              </div>
            </div>
            <div className="frame-group">
              <div className="first-bank-of-nigeria-parent">
                <div className="select-one">Opy</div>
                <div className="remove">REMOVE</div>
              </div>
              <div className="wrapper">
                <div className="select-one">3110888763567</div>
              </div>
              <div className="wrapper">
                <div className="select-one">User NAme</div>
              </div>
            </div>
            <div className="frame-group">
              <div className="first-bank-of-nigeria-parent">
                <div className="select-one">GTBank</div>
                <div className="remove">REMOVE</div>
              </div>
              <div className="wrapper">
                <div className="select-one">3110888763567</div>
              </div>
              <div className="wrapper">
                <div className="select-one">User NAme</div>
              </div>
            </div>
          </div>
        </div>
        <CoinOverviewAndTransactions />
        <SocialMediaHandle group182="/group-1821.svg" />
     <FooterSection/>
      </div>
    </div>
  );
};

export default ChoseAccountAddCash;

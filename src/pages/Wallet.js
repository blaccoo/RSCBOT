import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CurrentBalanceFrame5 from "../components/CurrentBalanceFrame5";
import MiningFeaturesFrame from "../components/MiningFeaturesFrame";
import BottomTabs2 from "../components/BottomTabs2";
import "./Wallet.css";
import FooterSection from "../components/FooterSection";
import Divider from "../components/Divider";
import Header from "../components/Header";
import Divider2 from "../components/Divider2";

const Wallet = () => {
  const navigate = useNavigate();

  const onProfileIconClick = useCallback(() => {
    navigate("/friends-profile");
  }, [navigate]);

  return (
    <div className="wallet23">
      <Header/>
      <div className="wallet-body-frame27">
     <Divider/>
        <CurrentBalanceFrame5 />
        <div className="title9">
          <div className="title-instruction-frame7">
            <div className="use-trade-to1">
              Use Trade to Buy or Sell Any Currency
            </div>
          </div>
        </div>
        <MiningFeaturesFrame />
        <Divider2/>
        <FooterSection />
      </div>
    </div>
  );
};

export default Wallet;

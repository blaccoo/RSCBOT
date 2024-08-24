import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CurrentBalanceFrame from "../components/CurrentBalanceFrame";
import Title from "../components/Title";
import FooterStartFrame1 from "../components/FooterStartFrame1";
import FooterStartFrame5 from "../components/FooterStartFrame5";
import FooterStartFrame10 from "../components/FooterStartFrame10";
import BottomTabs1 from "../components/BottomTabs1";
import "./FriendsProfile.css";

const FriendsProfile = () => {
  const navigate = useNavigate();

  const onWalletContainerClick = useCallback(() => {
    navigate("/wallet");
  }, [navigate]);

  const onWalletContainerClick1 = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className="friends-profile">
      <div className="home-body-frame5">
        <div className="header38">
          <img className="menu-icon35" alt="" src="/menu-icon.svg" />
          <div className="notification-and-count9">
            <img
              className="notification-icon34"
              alt=""
              src="/notification1.svg"
            />
            <b className="b27">12</b>
          </div>
          <div className="connect-wallet38">
            <b className="connect38">Connect</b>
          </div>
          <img className="profile-icon38" alt="" src="/profile1.svg" />
        </div>
        <CurrentBalanceFrame prop="104.50 " />
        <Title frameDivHeight="91px" frameDivOverflowY="unset" />
        <div className="mining-frame8">
          <FooterStartFrame1
            hugeiconsmarketing="/carbonfriendship.svg"
            special="Friends"
            solarmoneyBagBroken="/f7status.svg"
            profitPerDay="Stats"
            streamlineinvestmentSelection="/materialsymbolssocialleaderboardoutlinerounded.svg"
            investment="Leaders Board"
            propHeight="55px"
            frameDivLeft="-1px"
          />
          <div className="wallet23">
            <b className="my-referal-link">My Referal Link</b>
          </div>
          <FooterStartFrame5 propAlignSelf="stretch" propWidth="unset" />
          <b className="my-referals-network">My Referals Network</b>
          <FooterStartFrame10
            profile="/profile8.svg"
            herbetPere="Herbet Pere"
            fluentEmojicoin="/fluentemojicoin.svg"
            prop="23,456,000"
            lvlGold="Lvl - Gold"
          />
          <FooterStartFrame10
            profile="/profile9.svg"
            herbetPere="Nsisong Eyo"
            fluentEmojicoin="/fluentemojicoin1.svg"
            prop="500,456,000"
            lvlGold="Lvl - Elite"
          />
          <FooterStartFrame10
            profile="/profile10.svg"
            herbetPere="Anthony A"
            fluentEmojicoin="/fluentemojicoin1.svg"
            prop="1000,000"
            lvlGold="Lvl - Bronze"
          />
        </div>
        <BottomTabs1
          materialSymbolsLighttaskAlt="/materialsymbolslighttaskaltrounded.svg"
          propOverflowY="auto"
          propBorder="unset"
          homeBorderRadius="10px"
          homeBorder="1px solid #48486f"
          homeHeight="60px"
          iconParkdotTop="6.5px"
          onWalletContainerClick={onWalletContainerClick}
       
        />
      </div>
    </div>
  );
};

export default FriendsProfile;

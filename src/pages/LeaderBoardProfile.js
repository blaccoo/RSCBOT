import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CurrentBalanceFrame from "../components/CurrentBalanceFrame";
import Title from "../components/Title";
import FooterStartFrame1 from "../components/FooterStartFrame1";
import FooterStartFrame11 from "../components/FooterStartFrame11";
import BottomTabs1 from "../components/BottomTabs1";
import "./LeaderBoardProfile.css";

const LeaderBoardProfile = () => {
  const navigate = useNavigate();

  const onWalletContainerClick = useCallback(() => {
    navigate("/wallet");
  }, [navigate]);

  const onWalletContainerClick1 = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className="leader-board-profile">
      <div className="home-body-frame7">
        <div className="header40">
          <img className="menu-icon37" alt="" src="/menu-icon.svg" />
          <div className="notification-and-count11">
            <img
              className="notification-icon36"
              alt=""
              src="/notification1.svg"
            />
            <b className="b29">12</b>
          </div>
          <div className="connect-wallet40">
            <b className="connect40">Connect</b>
          </div>
          <img className="profile-icon40" alt="" src="/profile1.svg" />
        </div>
        <CurrentBalanceFrame prop="23,456,000 " />
        <Title frameDivHeight="91px" frameDivOverflowY="unset" />
        <div className="mining-frame10">
          <FooterStartFrame1
            hugeiconsmarketing="/carbonfriendship.svg"
            special="Friends"
            solarmoneyBagBroken="/f7status.svg"
            profitPerDay="Stats"
            streamlineinvestmentSelection="/materialsymbolssocialleaderboardoutlinerounded.svg"
            investment="Leaders Board"
            propHeight="55px"
            frameDivLeft="230px"
          />
          <div className="wallet30">
            <b className="your-rank">Your Rank</b>
          </div>
          <FooterStartFrame11
            herbetPere="Herbet Pere"
            openmojiflagNigeria="/openmojiflagnigeria.svg"
            k="98k"
          />
          <b className="leaders-board">Leaders Board</b>
          <FooterStartFrame11
            herbetPere="Antony Eyo"
            openmojiflagNigeria="/openmojiflagnigeria.svg"
            k="1"
            propWidth="105px"
            propFlex="1"
            propWidth1="unset"
            propFlex1="1"
          />
          <FooterStartFrame11
            herbetPere="Blu Ivan"
            openmojiflagNigeria="/openmojiflagusoutlyingislands.svg"
            k="2"
            propWidth="unset"
            propFlex="unset"
            propWidth1="76px"
            propFlex1="1"
          />
          <FooterStartFrame11
            herbetPere="Ahme Lia"
            openmojiflagNigeria="/openmojiflagindia.svg"
            k="3"
            propWidth="unset"
            propFlex="unset"
            propWidth1="76px"
            propFlex1="1"
          />
          <FooterStartFrame11
            herbetPere="Lukaku W"
            openmojiflagNigeria="/openmojiflagbangladesh.svg"
            k="4"
            propWidth="unset"
            propFlex="unset"
            propWidth1="76px"
            propFlex1="1"
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
          onWalletContainerClick={onWalletContainerClick1}
        />
      </div>
    </div>
  );
};

export default LeaderBoardProfile;

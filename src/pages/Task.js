import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CurrentBalanceFrame from "../components/CurrentBalanceFrame";
import Title from "../components/Title";
import FooterStartFrame1 from "../components/FooterStartFrame1";
import FooterStartFrame3 from "../components/FooterStartFrame3";
import FooterStartFrame8 from "../components/FooterStartFrame8";
import FooterStartFrame6 from "../components/FooterStartFrame6";
import FooterStartFrame4 from "../components/FooterStartFrame4";
import FooterStartFrame5 from "../components/FooterStartFrame5";
import BottomTabs1 from "../components/BottomTabs1";
import "./Task.css";

const Task = () => {
  const navigate = useNavigate();

  const onWalletContainerClick = useCallback(() => {
    navigate("/wallet");
  }, [navigate]);

  const onWalletContainerClick1 = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className="task">
      <div className="home-body-frame1">
        <div className="header30">
          <img className="menu-icon30" alt="" src="/menu-icon.svg" />
          <div className="notification-and-count5">
            <img
              className="notification-icon27"
              alt=""
              src="/notification1.svg"
            />
            <b className="b22">12</b>
          </div>
          <div className="connect-wallet30">
            <b className="connect30">Connect</b>
          </div>
          <img className="profile-icon30" alt="" src="/profile1.svg" />
        </div>
        <CurrentBalanceFrame prop="104.50 " />
        <Title frameDivHeight="91px" frameDivOverflowY="unset" />
        <div className="mining-frame1">
          <FooterStartFrame1
            hugeiconsmarketing="/hugeiconsmarketing.svg"
            special="Special"
            solarmoneyBagBroken="/iconoirtrophy.svg"
            profitPerDay="Leagues"
            streamlineinvestmentSelection="/carbonfriendship.svg"
            investment="Referal"
            propHeight="unset"
            frameDivLeft="0px"
          />
          <div className="wallet15">
            <b className="rising-coin-trading">Rising Coin Trading Academy</b>
          </div>
          <FooterStartFrame3
            gameIconsrobotGolem="/iconoiryoutube.svg"
            bOTMinesFor24Hours="Introduction to Trading Part 1"
            magestarFill="/fluentemojicoin.svg"
            prop="200,000"
            teenyiconstickCircleSolid="/teenyiconstickcirclesolid.svg"
            purchased="Pending"
            propWidth="unset"
            propDisplay="unset"
          />
          <FooterStartFrame3
            gameIconsrobotGolem="/iconoiryoutube.svg"
            bOTMinesFor24Hours="Understanding Market Analysis"
            teenyiconstickCircleSolid="/teenyiconstickcirclesolid.svg"
            purchased="Pending"
            propWidth="unset"
            propDisplay="unset"
          />
          <FooterStartFrame3
            gameIconsrobotGolem="/iconoiryoutube.svg"
            bOTMinesFor24Hours="Setting Up a Trading Account"
            teenyiconstickCircleSolid="/teenyiconstickcirclesolid.svg"
            purchased="Pending"
            propWidth="unset"
            propDisplay="unset"
          />
          <FooterStartFrame3
            gameIconsrobotGolem="/iconoiryoutube.svg"
            bOTMinesFor24Hours="Trading Terminology Explained"
            teenyiconstickCircleSolid="/teenyiconstickcirclesolid.svg"
            purchased="Pending"
            propWidth="unset"
            propDisplay="unset"
          />
          <b className="partners-task">Partners Task</b>
          <FooterStartFrame8 />
          <FooterStartFrame6
            tablerxboxBFilled="/tablerxboxbfilled.svg"
            joinBlumBOT="Join Blum BOT"
          />
          <FooterStartFrame3
            gameIconsrobotGolem="/fluentemojihighcontrasthamster.svg"
            bOTMinesFor24Hours="Join Hamster Kombat Channel"
            magestarFill="/fluentemojicoin.svg"
            prop="200,000"
            teenyiconstickCircleSolid="/teenyiconstickcirclesolid1.svg"
            purchased="Done"
            propWidth="unset"
            propDisplay="unset"
          />
          <b className="partners-task">Social Task</b>
          <FooterStartFrame4
            propHeight="unset"
            hugeiconschatBot="/uittelegramalt.svg"
            bOTMinesFor1Hour="Join our Telegram Channel"
            fluentEmojicoin="/fluentemojicoin.svg"
            prop="200,000"
            teenyiconstickCircleSolid="/teenyiconstickcirclesolid1.svg"
            pending="Done"
          />
          <FooterStartFrame6
            tablerxboxBFilled="/pajamastwitter.svg"
            joinBlumBOT="Join our X Handle"
          />
          <FooterStartFrame5 propAlignSelf="stretch" propWidth="unset" />
        </div>
        <BottomTabs1
          materialSymbolsLighttaskAlt="/materialsymbolslighttaskaltrounded1.svg"
          propOverflowY="auto"
          propBorder="1px solid #484747"
          homeBorderRadius="unset"
          homeBorder="unset"
          homeHeight="unset"
          iconParkdotTop="0.5px"
          onWalletContainerClick={onWalletContainerClick}
      
        />
      </div>
    </div>
  );
};

export default Task;

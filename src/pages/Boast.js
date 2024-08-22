import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CurrentBalanceFrame from "../components/CurrentBalanceFrame";
import Title from "../components/Title";
import FooterStartFrame1 from "../components/FooterStartFrame1";
import FooterStartFrame2 from "../components/FooterStartFrame2";
import FooterStartFrame4 from "../components/FooterStartFrame4";
import FooterStartFrame3 from "../components/FooterStartFrame3";
import FooterStartFrame7 from "../components/FooterStartFrame7";
import FooterStartFrame5 from "../components/FooterStartFrame5";
import BottomTabs1 from "../components/BottomTabs1";
import "./Boast.css";

const Boast = () => {
  const navigate = useNavigate();

  const onWalletContainerClick = useCallback(() => {
    navigate("/wallet");
  }, [navigate]);

  const onWalletContainerClick1 = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className="boast">
      <div className="home-body-frame">
        <div className="header13">
          <img className="menu-icon13" alt="" src="/menu-icon.svg" />
          <div className="notification-and-count2">
            <img
              className="notification-icon12"
              alt=""
              src="/notification1.svg"
            />
            <b className="b15">12</b>
          </div>
          <div className="connect-wallet13">
            <b className="connect13">Connect</b>
          </div>
          <img className="profile-icon13" alt="" src="/profile1.svg" />
        </div>
        <CurrentBalanceFrame prop="104.50 " />
        <Title />
        <div className="mining-frame">
          <FooterStartFrame1
            hugeiconsmarketing="/hugeiconsmarketing.svg"
            special="Special"
            solarmoneyBagBroken="/solarmoneybagbroken.svg"
            profitPerDay="Asset"
            streamlineinvestmentSelection="/streamlineinvestmentselection.svg"
            investment="Market Place"
          />
          <div className="wallet10">
            <b className="boosters">Boosters</b>
          </div>
          <FooterStartFrame2
            hugeiconstap06="/hugeiconstap06.svg"
            multitap="Multitap"
            prop="5000"
            level1="Level 1"
          />
          <FooterStartFrame2
            hugeiconstap06="/simplelineiconsenergy.svg"
            multitap="Energy limit"
            prop="400000"
            propHeight="55px"
            level1="Level 10"
          />
          <FooterStartFrame2
            hugeiconstap06="/phspeedometerthin.svg"
            multitap="Recharching Speed"
            prop="200,000"
            propHeight="55px"
            level1="Level 3"
          />
          <b className="auto-miner">Auto Miner</b>
          <FooterStartFrame4
            hugeiconschatBot="/hugeiconschatbot.svg"
            bOTMinesFor1Hour="BOT Mines for 1 Hour"
            fluentEmojicoin="/fluentemojicoin.svg"
            prop="200,000"
            teenyiconstickCircleSolid="/teenyiconstickcirclesolid.svg"
            pending="Pending"
          />
          <FooterStartFrame4
            propHeight="60px"
            hugeiconschatBot="/fluentbotsparkle24regular.svg"
            bOTMinesFor1Hour="BOT Mines for 12 Hours "
            fluentEmojicoin="/magestarfill@2x.png"
            prop="100"
            teenyiconstickCircleSolid="/teenyiconstickcirclesolid.svg"
            pending="Pending"
          />
          <FooterStartFrame3
            gameIconsrobotGolem="/gameiconsrobotgolem.svg"
            bOTMinesFor24Hours="BOT Mines for 24 Hours"
            magestarFill="/magestarfill1@2x.png"
            prop="200"
            teenyiconstickCircleSolid="/teenyiconstickcirclesolid1.svg"
            purchased="Purchased"
          />
          <b className="auto-miner">Daily Boast</b>
          <FooterStartFrame7 />
          <FooterStartFrame4
            propHeight="65px"
            hugeiconschatBot="/hugeiconstaskdaily01.svg"
            bOTMinesFor1Hour="Daily Login"
            fluentEmojicoin="/fluentemojicoin.svg"
            prop="10,000"
            teenyiconstickCircleSolid="/teenyiconstickcirclesolid1.svg"
            pending="Done"
          />
          <FooterStartFrame5 />
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

export default Boast;

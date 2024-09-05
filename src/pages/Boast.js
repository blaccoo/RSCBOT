import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CurrentBalanceFrame from "../components/CurrentBalanceFrame";
import Title from "../components/Title";
import FooterStartFrame1 from "../components/FooterStartFrame1";
import FooterStartFrame2 from "../components/FooterStartFrame2";
import FooterStartFrame4 from "../components/FooterStartFrame4";
import FooterStartFrame3 from "../components/FooterStartFrame3";
import FooterStartFrame7 from "../components/FooterStartFrame7";

import "./Boast.css";
import FooterSection from "../components/FooterSection";
import Divider from "../components/Divider";
import Header from "../components/Header";
import Divider2 from "../components/Divider2";

const Boast = () => {
  const navigate = useNavigate();

  const onWalletContainerClick = useCallback(() => {
    navigate("/boast");
  }, [navigate]);

  const onWalletContainerClick1 = useCallback(() => {
    navigate("/coming-market-place");
  }, [navigate]);

  const onProfileIconClick = useCallback(() => {
    navigate("/friends-profile");
  }, [navigate]);

  return (
    <div className="boast">
      <Header/>
      <div className="home-body-frame">
        <Divider/>
        <CurrentBalanceFrame prop="104.50 " />
        <Title
          vector="/vector3.svg"
          vector1="/vector4.svg"
          vector2="/vector5.svg"
          vector3="/vector4.svg"
          vector4="/vector5.svg"
          vector5="/vector3.svg"
          vector6="/vector4.svg"
          vector7="/vector5.svg"
          vector8="/vector5.svg"
        />
        <div className="mining-frame">
          <FooterStartFrame1
            streamlineinvestmentSelection="/streamlineinvestmentselection.svg"
            investment="RSC Market "
            hugeiconsmarketing="/hugeiconsmarketing.svg"
            special="Special"
            hugeiconsfire="/hugeiconsfire.svg"
            boast="Boast"
            onWalletContainerClick={onWalletContainerClick}
            onWalletContainerClick1={onWalletContainerClick1}
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
            teenyiconstickCircleSolid="/teenyiconstickcirclesolid1.svg"
            pending="Pending"
            frameDivPadding="unset"
            frameDivWidth="182px"
            frameDivPadding1="unset"
            fluentEmojicoinIconWidth="24px"
            fluentEmojicoinIconHeight="24px"
            teenyiconstickCircleSolidWidth="24px"
            teenyiconstickCircleSolidHeight="24px"
          />
          <FooterStartFrame3 />
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
            frameDivPadding="unset"
            frameDivWidth="182px"
            frameDivPadding1="unset"
            fluentEmojicoinIconWidth="24px"
            fluentEmojicoinIconHeight="24px"
            teenyiconstickCircleSolidWidth="24px"
            teenyiconstickCircleSolidHeight="24px"
          />
          <div className="footer-start-frame">
            <div className="footer-frame">
              <div className="home-referral">
                <div className="referal-frame">
                  <div className="referal-text">
                    <div className="refer-friends-to">
                      Refer friends to get referral bonus now
                    </div>
                  </div>
                  <div className="frame-parent3">
                    <div className="httpsrisingcoinxyzrefant-wrapper">
                      <div className="boosters">
                        https://risingcoin.xyz?ref=anthonyeyo
                      </div>
                    </div>
                    <div className="rectangle-parent1">
                      <div className="rectangle-div" />
                      <div className="frame-child1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Divider2/>
        <FooterSection/>
      </div>
    </div>
  );
};

export default Boast;

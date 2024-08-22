import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CurrentBalanceFrame from "../components/CurrentBalanceFrame";
import Title from "../components/Title";
import FooterStartFrame1 from "../components/FooterStartFrame1";
import FrameComponent1 from "../components/FrameComponent1";
import BottomTabs1 from "../components/BottomTabs1";
import "./StatsProfile.css";

const StatsProfile = () => {
  const navigate = useNavigate();

  const onWalletContainerClick = useCallback(() => {
    navigate("/wallet");
  }, [navigate]);

  const onWalletContainerClick1 = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className="stats-profile">
      <div className="home-body-frame6">
        <div className="header39">
          <img className="menu-icon36" alt="" src="/menu-icon.svg" />
          <div className="notification-and-count10">
            <img
              className="notification-icon35"
              alt=""
              src="/notification1.svg"
            />
            <b className="b28">12</b>
          </div>
          <div className="connect-wallet39">
            <b className="connect39">Connect</b>
          </div>
          <img className="profile-icon39" alt="" src="/profile1.svg" />
        </div>
        <CurrentBalanceFrame prop="104.50 " />
        <Title frameDivHeight="91px" frameDivOverflowY="unset" />
        <div className="mining-frame9">
          <FooterStartFrame1
            hugeiconsmarketing="/carbonfriendship.svg"
            special="Friends"
            solarmoneyBagBroken="/f7status.svg"
            profitPerDay="Stats"
            streamlineinvestmentSelection="/materialsymbolssocialleaderboardoutlinerounded.svg"
            investment="Leaders Board"
            propHeight="55px"
            frameDivLeft="115px"
          />
          <div className="wallet24">
            <b className="current-circulating-balance">{`Current Circulating Balance `}</b>
          </div>
          <div className="footer-start-frame21">
            <div className="footer-start-frame-inner">
              <div className="frame-wrapper">
                <div className="wallet-wrapper2">
                  <div className="wallet25">
                    <img
                      className="fluent-emojicoin-icon"
                      alt=""
                      src="/fluentemojicoin2.svg"
                    />
                    <div className="div119">1,323,456,000,238</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="wallet26">
            <b className="current-circulating-balance">Total Mine Tap</b>
          </div>
          <div className="footer-start-frame22">
            <FrameComponent1
              hugeiconstap02="/hugeiconstap021.svg"
              prop="503,456,000,238"
            />
          </div>
          <div className="wallet24">
            <b className="current-circulating-balance">Users</b>
          </div>
          <div className="footer-start-frame22">
            <FrameComponent1
              hugeiconstap02="/flowbiteusersoutline.svg"
              prop="49,910,809"
            />
          </div>
          <div className="wallet24">
            <b className="current-circulating-balance">Monthly Active Users</b>
          </div>
          <div className="footer-start-frame22">
            <FrameComponent1
              hugeiconstap02="/materialsymbolslightcalendarmonthoutline.svg"
              prop="34,874.236"
            />
          </div>
          <div className="wallet24">
            <b className="current-circulating-balance">Active Online Users</b>
          </div>
          <div className="footer-start-frame22">
            <FrameComponent1
              hugeiconstap02="/mdiaccountonlineoutline.svg"
              prop="4,339.699"
            />
          </div>
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

export default StatsProfile;

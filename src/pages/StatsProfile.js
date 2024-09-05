import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CurrentBalanceFrame from "../components/CurrentBalanceFrame";
import Title from "../components/Title";
import FooterStartFrame1 from "../components/FooterStartFrame1";
import Footer from "../components/Footer";
import "./StatsProfile.css";
import Divider from "../components/Divider";
import Header from "../components/Header";
import FooterSection from "../components/FooterSection";
import Divider2 from "../components/Divider2";

const StatsProfile = () => {
  const navigate = useNavigate();

  const onWalletContainerClick = useCallback(() => {
    navigate("/friends-profile");
  }, [navigate]);

  const onWalletContainerClick1 = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="stats-profile">
      <Header/>
      <div className="home-body-frame6">
        <Divider/>
        <CurrentBalanceFrame
          prop="104.50 "
          divColor="#e4e4f0"
          lvlBronzeColor="#e4e4f0"
        />
        <Title
          frameDivHeight="91px"
          frameDivOverflowY="unset"
          vector="/vector3.svg"
          vector1="/vector4.svg"
          vector2="/vector5.svg"
          vector3="/vector8.svg"
          vector4="/vector9.svg"
          vector5="/vector3.svg"
          vector6="/vector4.svg"
          vector7="/vector5.svg"
          vector8="/vector9.svg"
          referralCountColor="#fff"
          fRIENDSColor="#fff"
          taskKeyColor="#fff"
          kEYSColor="#fff"
        />
        <div className="mining-frame9">
          <FooterStartFrame1
            propHeight="55px"
            solarmoneyBagBroken="/f7status.svg"
            profitPerDay="Stats"
            streamlineinvestmentSelection="/materialsymbolssocialleaderboardoutlinerounded.svg"
            investment="Leaders Board"
            hugeiconsmarketing="/carbonfriendship.svg"
            special="Friends"
            frameDivLeft="115px"
            hugeiconsfire="/f7status.svg"
            boast="Stats"
            walletWidth="50px"
            onWalletContainerClick={onWalletContainerClick}
            onWalletContainerClick1={onWalletContainerClick1}
          />
          <div className="wallet31">
            <b className="current-circulating-balance">{`Current Circulating Balance `}</b>
          </div>
          <div className="footer-start-frame12">
            <div className="footer-start-frame-inner">
              <div className="frame-wrapper">
                <div className="wallet-wrapper2">
                  <div className="wallet32">
                    <img
                      className="flowbiteusers-outline-icon"
                      alt=""
                      src="/fluentemojicoin3.svg"
                    />
                    <div className="div121">1,323,456,000,238</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="wallet33">
            <b className="current-circulating-balance">Total Mine Tap</b>
          </div>
          <div className="footer-start-frame12">
            <div className="frame-parent20">
              <div className="frame-wrapper1">
                <div className="wallet-wrapper2">
                  <div className="wallet32">
                    <img
                      className="flowbiteusers-outline-icon"
                      alt=""
                      src="/hugeiconstap021.svg"
                    />
                    <div className="div121">503,456,000,238</div>
                  </div>
                </div>
              </div>
              <div className="wallet35" />
            </div>
          </div>
          <div className="wallet31">
            <b className="current-circulating-balance">Users</b>
          </div>
          <div className="footer-start-frame12">
            <div className="frame-parent20">
              <div className="frame-wrapper1">
                <div className="wallet-wrapper2">
                  <div className="wallet32">
                    <img
                      className="flowbiteusers-outline-icon"
                      alt=""
                      src="/flowbiteusersoutline.svg"
                    />
                    <div className="div121">49,910,809</div>
                  </div>
                </div>
              </div>
              <div className="wallet35" />
            </div>
          </div>
          <div className="wallet31">
            <b className="current-circulating-balance">Monthly Active Users</b>
          </div>
          <div className="footer-start-frame12">
            <div className="frame-parent20">
              <div className="frame-wrapper1">
                <div className="wallet-wrapper2">
                  <div className="wallet32">
                    <img
                      className="flowbiteusers-outline-icon"
                      alt=""
                      src="/materialsymbolslightcalendarmonthoutline.svg"
                    />
                    <div className="div121">34,874.236</div>
                  </div>
                </div>
              </div>
              <div className="wallet35" />
            </div>
          </div>
          <div className="wallet31">
            <b className="current-circulating-balance">Active Online Users</b>
          </div>
          <div className="footer-start-frame12">
            <div className="frame-parent20">
              <div className="frame-wrapper1">
                <div className="wallet-wrapper2">
                  <div className="wallet32">
                    <img
                      className="flowbiteusers-outline-icon"
                      alt=""
                      src="/mdiaccountonlineoutline.svg"
                    />
                    <div className="div121">4,339.699</div>
                  </div>
                </div>
              </div>
              <div className="wallet35" />
            
            </div>
          </div>
        </div>
        <Divider2/>
        <FooterSection />
      </div>
    </div>
  );
};

export default StatsProfile;

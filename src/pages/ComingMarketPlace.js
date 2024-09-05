import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CurrentBalanceFrame from "../components/CurrentBalanceFrame";
import Title from "../components/Title";
import Footer from "../components/Footer";
import "./ComingMarketPlace.css";
import Header from "../components/Header";
import Divider from "../components/Divider";
import FooterSection from "../components/FooterSection";

const ComingMarketPlace = () => {
  const navigate = useNavigate();

  const onProfileIconClick = useCallback(() => {
    navigate("/friends-profile");
  }, [navigate]);

  return (
    <div className="coming-market-place">
       <Header/>
      <div className="home-body-frame4">
      <Divider/>
        <CurrentBalanceFrame
          prop="104.50 "
          divColor="#e4e4f0"
          lvlBronzeColor="#e4e4f0"
        />
        <Title
          frameDivHeight="60px"
          frameDivOverflowY="auto"
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
        <div className="mining-frame6">
          <div className="mining-frame7">
            <div className="mining-info-frame2">
              <div className="wallet-frame">
                <div className="wallet28">
                  <b className="market-place-is">
                    Market Place is where anyone, from any location can buy and
                    sell any item comfortably.
                  </b>
                </div>
              </div>
              <img
                className="hugeiconscoming-soon-021"
                alt=""
                src="/hugeiconscomingsoon02.svg"
              />
            </div>
          </div>
          <div className="footer-start-frame7">
            <div className="wallet-frame">
              <div className="wallet28">
                <div className="market-place-is">Coming Soon</div>
              </div>
            </div>
          </div>
          <div className="footer-start-frame8">
            <div className="footer-frame5">
              <div className="home-referral5">
                <div className="referal-frame5">
                  <div className="referal-text5">
                    <div className="refer-friends-to5">
                      Refer friends to get referral bonus now
                    </div>
                  </div>
                  <div className="frame-parent19">
                    <div className="httpsrisingcoinxyzrefant-wrapper3">
                      <div className="httpsrisingcoinxyzrefant5">
                        https://risingcoin.xyz?ref=anthonyeyo
                      </div>
                    </div>
                    <div className="rectangle-parent8">
                      <div className="frame-child12" />
                      <div className="frame-child13" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterSection />
      </div>
    </div>
  );
};

export default ComingMarketPlace;

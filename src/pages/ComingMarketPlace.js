import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CurrentBalanceFrame from "../components/CurrentBalanceFrame";
import Title from "../components/Title";
import FooterStartFrame5 from "../components/FooterStartFrame5";
import BottomTabs1 from "../components/BottomTabs1";
import "./ComingMarketPlace.css";

const ComingMarketPlace = () => {
  const navigate = useNavigate();

  const onHomeContainerClick = useCallback(() => {
    navigate("/task");
  }, [navigate]);

  return (
    <div className="coming-market-place">
      <div className="home-body-frame4">
        <div className="header37">
          <div className="notification-and-count8">
            <img
              className="notification-icon33"
              alt=""
              src="/notification1.svg"
            />
            <b className="b26">12</b>
          </div>
          <div className="connect-wallet37">
            <b className="connect37">Connect</b>
          </div>
          <img className="profile-icon37" alt="" src="/profile1.svg" />
        </div>
        <CurrentBalanceFrame prop="104.50 " />
        <Title frameDivHeight="60px" frameDivOverflowY="auto" />
        <div className="mining-frame6">
          <div className="mining-frame7">
            <div className="mining-info-frame2">
              <div className="wallet-frame">
                <div className="wallet21">
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
          <div className="footer-start-frame20">
            <div className="wallet-frame">
              <div className="wallet21">
                <div className="market-place-is">Coming Soon</div>
              </div>
            </div>
          </div>
          <FooterStartFrame5 propAlignSelf="unset" propWidth="340px" />
        </div>
        <BottomTabs1
          materialSymbolsLighttaskAlt="/materialsymbolslighttaskaltrounded1.svg"
          propOverflowY="unset"
          propBorder="1px solid #8e5ce0"
          homeBorderRadius="unset"
          homeBorder="unset"
          homeHeight="unset"
          iconParkdotTop="0.5px"
          onHomeContainerClick={onHomeContainerClick}
        />
      </div>
    </div>
  );
};

export default ComingMarketPlace;

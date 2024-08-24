import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CurrentBalanceFrame from "../components/CurrentBalanceFrame";
import Title from "../components/Title";
import FooterStartFrame9 from "../components/FooterStartFrame9";
import FooterStartFrame5 from "../components/FooterStartFrame5";
import BottomTabs1 from "../components/BottomTabs1";
import "./Home.css";
import Header from "../components/Header";
import Divider from "../components/Divider";




const Home = () => {
  const navigate = useNavigate();

  const onHomeContainerClick = useCallback(() => {
    navigate("/task");
  }, [navigate]);

  return (
    <div className="home" >
      
      <div className="home-body-frame2" >
      <Header/>

   <Divider/>
        <CurrentBalanceFrame prop="104.50 " />
        <Title frameDivHeight="60px" frameDivOverflowY="auto" />
        <div className="mining-frame2">
          <div className="mining-frame3">
            <div className="mining-info-frame">
              <div className="mining-tap-frame">
                <img
                  className="mining-button-icon"
                  alt=""
                  src="/mining-button@2x.png"
                />
              </div>
            </div>
          </div>
          <FooterStartFrame9 />
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

export default Home;

import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CurrentBalanceFrame from "../components/CurrentBalanceFrame";
import Title from "../components/Title";
import FooterStartFrame1 from "../components/FooterStartFrame1";
import FooterStartFrame5 from "../components/FooterStartFrame5";
import FooterStartFrame12 from "../components/FooterStartFrame12";
import Footer from "../components/Footer";
import "./FriendsProfile1.css";
import FooterSection from "../components/FooterSection";
import Divider2 from "../components/Divider2";
import Divider from "../components/Divider";
import Header from "../components/Header";

const FriendsProfile1 = () => {
  const navigate = useNavigate();

  const onWalletContainerClick = useCallback(() => {
    navigate("/stats-profile");
  }, [navigate]);

  const onWalletContainerClick1 = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onProfileIconClick = useCallback(() => {
    navigate("/friends-profile");
  }, [navigate]);

  return (
    <div className="friends-profile">
      <Header/>
      <div className="home-body-frame9">
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
        <div className="mining-frame13">
          <FooterStartFrame1
            propHeight="55px"
            solarmoneyBagBroken="/f7status.svg"
            profitPerDay="Stats"
            streamlineinvestmentSelection="/materialsymbolssocialleaderboardoutlinerounded.svg"
            investment="Leaders Board"
            hugeiconsmarketing="/carbonfriendship.svg"
            special="Friends"
            frameDivLeft="-1px"
            hugeiconsfire="/f7status.svg"
            boast="Stats"
            walletWidth="50px"
            onWalletContainerClick={onWalletContainerClick}
            onWalletContainerClick1={onWalletContainerClick1}
          />
          <div className="wallet83">
            <b className="my-referal-link">My Referal Link</b>
          </div>
          <FooterStartFrame5
            footerStartFramePosition="unset"
            footerStartFrameBorderRadius="10px"
            footerFrameHeight="110px"
            homeReferralAlignSelf="unset"
            homeReferralWidth="344px"
            referalTextAlignSelf="unset"
            referalTextPadding="0px 5px"
            referFriendsToWidth="unset"
            referFriendsToAlignSelf="stretch"
            frameDivWidth="310px"
            frameDivBorderRadius="10px"
          />
          <b className="my-referals-network">My Referals Network</b>
          <FooterStartFrame12
            profile="/profile8.svg"
            herbetPere="Herbet Pere"
            fluentEmojicoin="/fluentemojicoin.svg"
            prop="23,456,000"
            lvlGold="Lvl - Gold"
          />
          <FooterStartFrame12
            profile="/profile9.svg"
            herbetPere="Nsisong Eyo"
            fluentEmojicoin="/fluentemojicoin1.svg"
            prop="500,456,000"
            lvlGold="Lvl - Elite"
          />
          <FooterStartFrame12
            profile="/profile10.svg"
            herbetPere="Anthony A"
            fluentEmojicoin="/fluentemojicoin1.svg"
            prop="1000,000"
            lvlGold="Lvl - Bronze"
          />
        </div>

        <Divider2/>
        <FooterSection/>
      </div>
    </div>
  );
};

export default FriendsProfile1;

import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FooterStartFrame10 from "../components/FooterStartFrame10";

import "./FriendsProfile.css";
import FooterSection from "../components/FooterSection";
import Divider from "../components/Divider";
import Header from "../components/Header";

const FriendsProfile = () => {
  const navigate = useNavigate();

  const onWalletContainerClick = useCallback(() => {
    navigate("/wallet");
  }, [navigate]);

  const onWalletContainerClick1 = useCallback(() => {
    navigate("/trade");
  }, [navigate]);

  const onWalletContainerClick2 = useCallback(() => {
    navigate("/friends-profile");
  }, [navigate]);

  return (
    <div className="start-task">
      <Header/>
      <div className="home-body-frame5">
      <Divider/>
        <div className="mining-frame8">
          <div className="wallet30">
            <b className="introduction-to-trading">
              Introduction to Trading Part 1
            </b>
          </div>
          <div className="footer-start-frame9">
            <div className="footer-frame6">
              <div className="home-referral6">
                <div className="referal-frame6">
                  <div className="referal-text6">
                    <div className="perform-this-task">{`Perform this task correctly for your reward. Task verification is manually checked `}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <b className="complete-task-and">Complete task and claim reward</b>
          <FooterStartFrame10 fluentEmojicoin="/fluentemojicoin2.svg" />
          <div className="footer-start-frame10">
            <div className="watch-video-complete">
              Watch video complete come back and answer the question according
              to the video
            </div>
          </div>
          <div className="footer-start-frame11">
            <div className="div120">5:00</div>
          </div>
        </div>
      </div>
      <FooterSection/>
    </div>
  );
};

export default FriendsProfile;

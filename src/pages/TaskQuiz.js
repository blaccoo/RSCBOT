import { useState, useCallback } from "react";
import ModalClaimingTask from "../components/ModalClaimingTask";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import FooterStartFrame10 from "../components/FooterStartFrame10";
import BottomTabs1 from "../components/BottomTabs1";
import "./TaskQuiz.css";
import Divider from "../components/Divider";
import Header from "../components/Header";
import FooterSection from "../components/FooterSection";

const TaskQuiz = () => {
  const [isModalClaimingTaskOpen, setModalClaimingTaskOpen] = useState(false);
  const navigate = useNavigate();

  const openModalClaimingTask = useCallback(() => {
    setModalClaimingTaskOpen(true);
  }, []);

  const closeModalClaimingTask = useCallback(() => {
    setModalClaimingTaskOpen(false);
  }, []);

  const onWalletContainerClick = useCallback(() => {
    navigate("/trade");
  }, [navigate]);

  const onWalletContainerClick1 = useCallback(() => {
    navigate("/wallet");
  }, [navigate]);

  const onWalletContainerClick2 = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onHomeContainerClick = useCallback(() => {
    navigate("/task");
  }, [navigate]);

  const onWalletContainerClick3 = useCallback(() => {
    navigate("/friends-profile");
  }, [navigate]);

  return (
    <>
      <div className="task-quiz">
        <Header/>
        <div className="home-body-frame10">
        <Divider/>
          <div className="mining-frame14">
            <div className="wallet84">
              <b className="introduction-to-trading1">
                Introduction to Trading Part 1
              </b>
            </div>
            <div className="footer-start-frame24">
              <div className="footer-frame8">
                <div className="home-referral8">
                  <div className="referal-frame8">
                    <div className="referal-text8">
                      <div className="perform-this-task1">{`Perform this task correctly for your reward. Task verification is manually checked `}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <b className="complete-task-and1">Complete task and claim reward</b>
            <FooterStartFrame10 fluentEmojicoin="/fluentemojicoin11.svg" />
            <div className="footer-start-frame25">
              <div className="according-to-445-container">
                Watch video complete come back and answer the question according
                to the video
              </div>
            </div>
            <div className="footer-start-frame26">
              <b className="according-to-445-container">
                <span>{`According to `}</span>
                <span className="span7">4:45</span>
                <span>{` minutes of the video you just watch: `}</span>
              </b>
              <div className="according-to-445-container">
                What is the term for selling an asset you don’t own, with the
                expectation of buying it back later at a lower price?
              </div>
            </div>
            <div className="footer-start-frame27">
              <div className="frame-parent37">
                <div className="material-symbolscircle-outlin-wrapper">
                  <img
                    className="material-symbolscircle-outlin-icon"
                    alt=""
                    src="/materialsymbolscircleoutline.svg"
                  />
                </div>
                <div className="long-term-position-wrapper">
                  <div className="long-term-position">Long term position</div>
                </div>
              </div>
              <div className="frame-parent37">
                <div className="material-symbolscircle-outlin-wrapper">
                  <img
                    className="material-symbolscircle-outlin-icon"
                    alt=""
                    src="/materialsymbolscircleoutline.svg"
                  />
                </div>
                <div className="long-term-position-wrapper">
                  <div className="long-term-position">Short term position</div>
                </div>
              </div>
              <div className="frame-parent37">
                <div className="material-symbolscircle-outlin-wrapper">
                  <img
                    className="material-symbolscircle-outlin-icon"
                    alt=""
                    src="/materialsymbolscircleoutline.svg"
                  />
                </div>
                <div className="long-term-position-wrapper">
                  <div className="long-term-position">Bullish market</div>
                </div>
              </div>
              <div className="frame-parent37">
                <div className="material-symbolscircle-outlin-wrapper">
                  <img
                    className="material-symbolscircle-outlin-icon"
                    alt=""
                    src="/materialsymbolscircleoutline.svg"
                  />
                </div>
                <div className="long-term-position-wrapper">
                  <div className="long-term-position">Trade holding</div>
                </div>
              </div>
            </div>
            <div
              className="footer-start-frame28"
              onClick={openModalClaimingTask}
            >
              <div className="check-answer-once">Check Answer Once</div>
            </div>
          </div>
        </div>
      <FooterSection/>
      </div>
      {isModalClaimingTaskOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeModalClaimingTask}
        >
          <ModalClaimingTask onClose={closeModalClaimingTask} />
        </PortalPopup>
      )}
    </>
  );
};

export default TaskQuiz;

import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FooterStartFrame1 from "../components/FooterStartFrame1";
import FooterStartFrame13 from "../components/FooterStartFrame13";
import FooterStartFrame3 from "../components/FooterStartFrame3";
import FooterStartFrame8 from "../components/FooterStartFrame8";
import FooterStartFrame4 from "../components/FooterStartFrame4";
import FooterStartFrame6 from "../components/FooterStartFrame6";

import "./Task.css";
import FooterSection from "../components/FooterSection";
import Divider from "../components/Divider";
import Header from "../components/Header";
import Divider2 from "../components/Divider2";

const Task = () => {
  const navigate = useNavigate();

  const onWalletContainerClick = useCallback(() => {
    navigate("/boast");
  }, [navigate]);

  const onWalletContainerClick1 = useCallback(() => {
    navigate("/wallet");
  }, [navigate]);

  const onWalletContainerClick2 = useCallback(() => {
    navigate("/trade");
  }, [navigate]);

  const onWalletContainerClick3 = useCallback(() => {
    navigate("/friends-profile");
  }, [navigate]);

  return (
    <div className="task1">
      <Header/>
      <div className="home-body-frame1">
      <Divider/>
        <div className="mining-frame1">
          <FooterStartFrame1
            propHeight="unset"
            streamlineinvestmentSelection="/streamlineinvestmentselection.svg"
            investment="RSC Market "
            hugeiconsmarketing="/hugeiconsmarketing.svg"
            special="Special"
            frameDivLeft="0px"
            hugeiconsfire="/hugeiconsfire.svg"
            boast="Boast"
            walletWidth="57px"
            onWalletContainerClick={onWalletContainerClick}
          />
          <div className="wallet17">
            <b className="rising-coin-trading">Rising Coin Trading Academy</b>
          </div>
          <FooterStartFrame13 />
          <FooterStartFrame3 />
          <FooterStartFrame3 />
          <FooterStartFrame3 />
          <b className="partners-task">Partners Task</b>
          <FooterStartFrame8 />
          <FooterStartFrame3 />
          <FooterStartFrame3 />
          <b className="social-task">Social Task</b>
          <FooterStartFrame4
            propHeight="unset"
            hugeiconschatBot="/uittelegramalt1.svg"
            bOTMinesFor1Hour="Join our Telegram Channel"
            fluentEmojicoin="/fluentemojicoin1.svg"
            prop="20,000"
            teenyiconstickCircleSolid="/teenyiconstickcirclesolid2.svg"
            pending="Done"
            frameDivPadding="0px 5px"
            frameDivWidth="unset"
            frameDivPadding1="0px 5px"
            fluentEmojicoinIconWidth="20px"
            fluentEmojicoinIconHeight="20px"
            teenyiconstickCircleSolidWidth="20px"
            teenyiconstickCircleSolidHeight="20px"
          />
          <FooterStartFrame6
            tablerxboxBFilled="/pajamastwitter.svg"
            joinBlumBOT="Join our X Handle"
            fluentEmojicoin="/fluentemojicoin1.svg"
            prop="20,000"
            teenyiconstickCircleSolid="/teenyiconstickcirclesolid.svg"
            footerStartFramePosition="unset"
            footerStartFrameAlignSelf="stretch"
            frameDivHeight="46px"
            frameDivPadding="0px 5px"
            frameDivWidth="unset"
            frameDivHeight1="39px"
            frameDivPadding1="0px 5px"
            fluentEmojicoinIconWidth="20px"
            fluentEmojicoinIconHeight="20px"
            teenyiconstickCircleSolidWidth="20px"
            teenyiconstickCircleSolidHeight="20px"
          />
          <div className="footer-start-frame2">
            <div className="wallet-parent">
              <div className="wallet18">
                <img
                  className="mingcuteyoutube-line-icon"
                  alt=""
                  src="/mingcuteyoutubeline.svg"
                />
              </div>
              <div className="wallet-group">
                <div className="wallet19">
                  <div className="rising-coin-trading">
                    Join our Youtube Channel
                  </div>
                </div>
                <div className="wallet20">
                  <img
                    className="fluent-emojicoin-icon"
                    alt=""
                    src="/fluentemojicoin1.svg"
                  />
                  <div className="rising-coin-trading">20,000</div>
                </div>
              </div>
              <div className="wallet21">
                <img
                  className="fluent-emojicoin-icon"
                  alt=""
                  src="/teenyiconstickcirclesolid.svg"
                />
                <div className="rising-coin-trading">Pending</div>
              </div>
            </div>
          </div>
          <div className="footer-start-frame3">
            <div className="footer-frame2">
              <div className="home-referral2">
                <div className="referal-frame2">
                  <div className="referal-text2">
                    <div className="refer-friends-to2">
                      Refer friends to get referral bonus now
                    </div>
                  </div>
                  <div className="frame-parent14">
                    <div className="httpsrisingcoinxyzrefant-frame">
                      <div className="rising-coin-trading">
                        https://risingcoin.xyz?ref=anthonyeyo
                      </div>
                    </div>
                    <div className="rectangle-parent5">
                      <div className="frame-child6" />
                      <div className="frame-child7" />
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

export default Task;

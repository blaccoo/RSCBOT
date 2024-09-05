import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FooterStartFrame1 from "../components/FooterStartFrame1";
import Footer from "../components/Footer";
import "./LeaderBoardProfile.css";
import Divider from "../components/Divider";
import Header from "../components/Header";
import FooterSection from "../components/FooterSection";

const LeaderBoardProfile = () => {
  const navigate = useNavigate();

  const onWalletContainerClick = useCallback(() => {
    navigate("/friends-profile");
  }, [navigate]);

  const onWalletContainerClick1 = useCallback(() => {
    navigate("/stats-profile");
  }, [navigate]);

  return (
    <div className="leader-board-profile">
      <Header/>
      <div className="home-body-frame7">
       <Divider />
        <div className="mining-frame10">
          <FooterStartFrame1
            propHeight="55px"
            solarmoneyBagBroken="/f7status.svg"
            profitPerDay="Stats"
            streamlineinvestmentSelection="/materialsymbolssocialleaderboardoutlinerounded.svg"
            investment="Leaders Board"
            hugeiconsmarketing="/carbonfriendship.svg"
            special="Friends"
            frameDivLeft="230px"
            hugeiconsfire="/f7status.svg"
            boast="Stats"
            walletWidth="50px"
            onWalletContainerClick={onWalletContainerClick}
        
          />
          <div className="wallet45">
            <b className="your-rank">Your Rank</b>
          </div>
          <div className="footer-start-frame17">
            <div className="profile-parent">
              <img className="profile-icon42" alt="" src="/profile8.svg" />
              <div className="frame-parent24">
                <div className="wallet-parent1">
                  <div className="wallet46">
                    <b className="your-rank">Herbet Pere</b>
                  </div>
                  <div className="wallet47">
                    <img
                      className="openmojiflag-nigeria-icon"
                      alt=""
                      src="/openmojiflagnigeria.svg"
                    />
                  </div>
                </div>
                <div className="wallet-parent2">
                  <div className="wallet48">
                    <img
                      className="openmojiflag-nigeria-icon"
                      alt=""
                      src="/fluentemojicoin.svg"
                    />
                    <div className="your-rank">23,456,000</div>
                  </div>
                  <div className="wallet49">
                    <img
                      className="openmojiflag-nigeria-icon"
                      alt=""
                      src="/notokey.svg"
                    />
                    <div className="your-rank">455</div>
                  </div>
                  <div className="wallet49">
                    <img
                      className="openmojiflag-nigeria-icon"
                      alt=""
                      src="/carbonfriendship1.svg"
                    />
                    <div className="your-rank">91</div>
                  </div>
                </div>
                <div className="wallet51">
                  <div className="your-rank">98k</div>
                </div>
              </div>
              <div className="wallet52">
                <div className="lvl-bronze">Lvl - Bronze</div>
              </div>
            </div>
          </div>
          <b className="leaders-board">Leaders Board</b>
          <div className="footer-start-frame17">
            <div className="profile-parent">
              <img className="profile-icon42" alt="" src="/profile8.svg" />
              <div className="frame-parent24">
                <div className="wallet-parent1">
                  <div className="wallet46">
                    <b className="antony-eyo">Antony Eyo</b>
                  </div>
                  <div className="wallet47">
                    <img
                      className="openmojiflag-nigeria-icon"
                      alt=""
                      src="/openmojiflagnigeria.svg"
                    />
                  </div>
                </div>
                <div className="wallet-parent2">
                  <div className="wallet48">
                    <img
                      className="openmojiflag-nigeria-icon"
                      alt=""
                      src="/fluentemojicoin.svg"
                    />
                    <div className="your-rank">23,456,000</div>
                  </div>
                  <div className="wallet49">
                    <img
                      className="openmojiflag-nigeria-icon"
                      alt=""
                      src="/notokey.svg"
                    />
                    <div className="your-rank">455</div>
                  </div>
                  <div className="wallet49">
                    <img
                      className="openmojiflag-nigeria-icon"
                      alt=""
                      src="/carbonfriendship1.svg"
                    />
                    <div className="your-rank">91</div>
                  </div>
                </div>
                <div className="wallet51">
                  <div className="your-rank">1</div>
                </div>
              </div>
              <div className="wallet52">
                <div className="lvl-bronze">Lvl - Bronze</div>
              </div>
            </div>
          </div>
          <div className="footer-start-frame17">
            <div className="profile-parent">
              <img className="profile-icon42" alt="" src="/profile8.svg" />
              <div className="frame-parent24">
                <div className="wallet-parent5">
                  <div className="wallet60">
                    <b className="antony-eyo">Blu Ivan</b>
                  </div>
                  <div className="wallet47">
                    <img
                      className="openmojiflag-nigeria-icon"
                      alt=""
                      src="/openmojiflagusoutlyingislands.svg"
                    />
                  </div>
                </div>
                <div className="wallet-parent2">
                  <div className="wallet48">
                    <img
                      className="openmojiflag-nigeria-icon"
                      alt=""
                      src="/fluentemojicoin.svg"
                    />
                    <div className="your-rank">23,456,000</div>
                  </div>
                  <div className="wallet49">
                    <img
                      className="openmojiflag-nigeria-icon"
                      alt=""
                      src="/notokey.svg"
                    />
                    <div className="your-rank">455</div>
                  </div>
                  <div className="wallet49">
                    <img
                      className="openmojiflag-nigeria-icon"
                      alt=""
                      src="/carbonfriendship1.svg"
                    />
                    <div className="your-rank">91</div>
                  </div>
                </div>
                <div className="wallet51">
                  <div className="your-rank">2</div>
                </div>
              </div>
              <div className="wallet52">
                <div className="lvl-bronze">Lvl - Bronze</div>
              </div>
            </div>
          </div>
          <div className="footer-start-frame17">
            <div className="profile-parent">
              <img className="profile-icon42" alt="" src="/profile8.svg" />
              <div className="frame-parent24">
                <div className="wallet-parent5">
                  <div className="wallet60">
                    <b className="antony-eyo">Ahme Lia</b>
                  </div>
                  <div className="wallet47">
                    <img
                      className="openmojiflag-nigeria-icon"
                      alt=""
                      src="/openmojiflagindia.svg"
                    />
                  </div>
                </div>
                <div className="wallet-parent2">
                  <div className="wallet48">
                    <img
                      className="openmojiflag-nigeria-icon"
                      alt=""
                      src="/fluentemojicoin.svg"
                    />
                    <div className="your-rank">23,456,000</div>
                  </div>
                  <div className="wallet49">
                    <img
                      className="openmojiflag-nigeria-icon"
                      alt=""
                      src="/notokey.svg"
                    />
                    <div className="your-rank">455</div>
                  </div>
                  <div className="wallet49">
                    <img
                      className="openmojiflag-nigeria-icon"
                      alt=""
                      src="/carbonfriendship1.svg"
                    />
                    <div className="your-rank">91</div>
                  </div>
                </div>
                <div className="wallet51">
                  <div className="your-rank">3</div>
                </div>
              </div>
              <div className="wallet52">
                <div className="lvl-bronze">Lvl - Bronze</div>
              </div>
            </div>
          </div>
          <div className="footer-start-frame17">
            <div className="profile-parent">
              <img className="profile-icon42" alt="" src="/profile8.svg" />
              <div className="frame-parent24">
                <div className="wallet-parent5">
                  <div className="wallet60">
                    <b className="antony-eyo">Lukaku W</b>
                  </div>
                  <div className="wallet47">
                    <img
                      className="openmojiflag-nigeria-icon"
                      alt=""
                      src="/openmojiflagbangladesh.svg"
                    />
                  </div>
                </div>
                <div className="wallet-parent2">
                  <div className="wallet48">
                    <img
                      className="openmojiflag-nigeria-icon"
                      alt=""
                      src="/fluentemojicoin.svg"
                    />
                    <div className="your-rank">23,456,000</div>
                  </div>
                  <div className="wallet49">
                    <img
                      className="openmojiflag-nigeria-icon"
                      alt=""
                      src="/notokey.svg"
                    />
                    <div className="your-rank">455</div>
                  </div>
                  <div className="wallet49">
                    <img
                      className="openmojiflag-nigeria-icon"
                      alt=""
                      src="/carbonfriendship1.svg"
                    />
                    <div className="your-rank">91</div>
                  </div>
                </div>
                <div className="wallet51">
                  <div className="your-rank">4</div>
                </div>
              </div>
              <div className="wallet52">
                <div className="lvl-bronze">Lvl - Bronze</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default LeaderBoardProfile;

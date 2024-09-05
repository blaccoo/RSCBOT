import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CurrentBalanceFrame from "../components/CurrentBalanceFrame";
import Title from "../components/Title";
import Footer from "../components/Footer";
import "./ComingSonTrade.css";
import Divider from "../components/Divider";
import FooterSection from "../components/FooterSection";

const ComingSonTrade = () => {
  const navigate = useNavigate();

  const onProfileIconClick = useCallback(() => {
    navigate("/friends-profile");
  }, [navigate]);

  return (
    <div className="coming-son-trade">
      <Header/>
      <div className="home-body-frame8">
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
        <div className="mining-frame11">
          <div className="mining-frame12">
            <div className="mining-info-frame3">
              <div className="wallet-wrapper7">
                <div className="wallet81">
                  <div className="trade-is-a-container">
                    <p className="trade-is-a-decentralized-secti">
                      <b className="trade15">Trade</b>
                      <span>
                        {" "}
                        is a decentralized section to quickly buy, sell or
                        convert any cryptocurrency to another, in a secured way
                        using your web 3 wallet at the best price.
                      </span>
                    </p>
                    <p className="trade-is-a-decentralized-secti">
                      It uses Unlimited Liquidity from world best Dex.
                    </p>
                    <p className="trade-is-a-decentralized-secti">&nbsp;</p>
                    <p className="trade-is-a-decentralized-secti">
                      Supported Blockchain. BSC, Etherum, TON, Solana and
                      others.
                    </p>
                  </div>
                </div>
              </div>
              <img
                className="hugeiconscoming-soon-022"
                alt=""
                src="/hugeiconscomingsoon02.svg"
              />
            </div>
          </div>
          <div className="footer-start-frame22">
            <div className="wallet-wrapper7">
              <div className="wallet81">
                <div className="coming-soon2">Coming Soon</div>
              </div>
            </div>
          </div>
          <div className="footer-start-frame23">
            <div className="footer-frame7">
              <div className="home-referral7">
                <div className="referal-frame7">
                  <div className="referal-text7">
                    <div className="refer-friends-to6">
                      Refer friends to get referral bonus now
                    </div>
                  </div>
                  <div className="frame-parent29">
                    <div className="httpsrisingcoinxyzrefant-wrapper4">
                      <div className="httpsrisingcoinxyzrefant6">
                        https://risingcoin.xyz?ref=anthonyeyo
                      </div>
                    </div>
                    <div className="rectangle-parent9">
                      <div className="frame-child14" />
                      <div className="frame-child15" />
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

export default ComingSonTrade;

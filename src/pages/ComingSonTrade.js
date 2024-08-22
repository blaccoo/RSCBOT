import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CurrentBalanceFrame from "../components/CurrentBalanceFrame";
import Title from "../components/Title";
import FooterStartFrame5 from "../components/FooterStartFrame5";
import BottomTabs1 from "../components/BottomTabs1";
import "./ComingSonTrade.css";

const ComingSonTrade = () => {
  const navigate = useNavigate();

  const onHomeContainerClick = useCallback(() => {
    navigate("/task");
  }, [navigate]);

  return (
    <div className="coming-son-trade">
      <div className="home-body-frame8">
        <div className="header41">
          <div className="notification-and-count12">
            <img
              className="notification-icon37"
              alt=""
              src="/notification1.svg"
            />
            <b className="b30">12</b>
          </div>
          <div className="connect-wallet41">
            <b className="connect41">Connect</b>
          </div>
          <img className="profile-icon41" alt="" src="/profile1.svg" />
        </div>
        <CurrentBalanceFrame prop="104.50 " />
        <Title frameDivHeight="60px" frameDivOverflowY="auto" />
        <div className="mining-frame11">
          <div className="mining-frame12">
            <div className="mining-info-frame3">
              <div className="wallet-wrapper3">
                <div className="wallet31">
                  <div className="trade-is-a-container">
                    <p className="trade-is-a-decentralized-secti">
                      <b className="trade13">Trade</b>
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
          <div className="footer-start-frame26">
            <div className="wallet-wrapper3">
              <div className="wallet31">
                <div className="coming-soon2">Coming Soon</div>
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

export default ComingSonTrade;

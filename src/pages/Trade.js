import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import BottomTabs1 from "../components/BottomTabs1";
import "./Trade.css";

const Trade = () => {
  const navigate = useNavigate();

  const onWalletContainerClick = useCallback(() => {
    navigate("/wallet");
  }, [navigate]);

  const onWalletContainerClick1 = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onHomeContainerClick = useCallback(() => {
    navigate("/task");
  }, [navigate]);

  return (
    <div className="trade7">
      <div className="wallet-body-frame16">
        <div className="header19">
          <img className="menu-icon19" alt="" src="/menu-icon.svg" />
          <div className="notification-and-count3">
            <img
              className="notification-icon17"
              alt=""
              src="/notification1.svg"
            />
            <b className="b18">12</b>
          </div>
          <div className="connect-wallet19">
            <b className="connect19">Connect</b>
          </div>
          <img className="profile-icon19" alt="" src="/profile1.svg" />
        </div>
        <div className="profile">
          <div className="top-navigation-bar">
            <div className="icon-park-outlineright">
              <img className="vector-icon6" alt="" src="/vector10.svg" />
            </div>
            <div className="trade-with-unlimited">Trade</div>
            <img
              className="icon-park-outlineright1"
              alt=""
              src="/iconparkoutlineright@2x.png"
            />
          </div>
          <div className="top-navigation-bar1">
            <div className="icon-park-outlineright">
              <img className="vector-icon6" alt="" src="/vector10.svg" />
            </div>
            <div className="trade-with-unlimited">{`Trade with Unlimited liquidity `}</div>
            <img
              className="icon-park-outlineright3"
              alt=""
              src="/iconparkoutlineright1@2x.png"
            />
          </div>
          <div className="content">
            <div className="coin-selection-wrapper">
              <div className="coin-selection">
                <img
                  className="cryptocurrency-colorbnb-icon"
                  alt=""
                  src="/cryptocurrencycolorbnb.svg"
                />
                <b className="bnb">BNB</b>
                <b className="bnb">Network</b>
                <img
                  className="menu-icon19"
                  alt=""
                  src="/riarrowdropdownline1.svg"
                />
              </div>
            </div>
            <div className="coin-selection-container">
              <div className="coin-selection1">
                <b className="bnb">Buy</b>
                <b className="sell8">Sell</b>
              </div>
            </div>
            <div className="coin-selection-parent">
              <div className="coin-selection2">
                <img
                  className="cryptocurrency-colorbnb-icon"
                  alt=""
                  src="/cryptocurrencycolorbnb.svg"
                />
                <b className="bnb">You Pay</b>
                <b className="bnb">USDT</b>
                <img
                  className="menu-icon19"
                  alt=""
                  src="/riarrowdropdownline1.svg"
                />
              </div>
              <b className="max-7356">
                <span>Max</span>
                <span className="span3">{`: `}</span>
                <span className="span4">73.56</span>
              </b>
            </div>
            <div className="list">
              <div className="points">
                <div className="parent1">
                  <b className="b19">7.1</b>
                  <b className="usdt-bep20"> USDT Bep20</b>
                </div>
                <div className="points-child" />
              </div>
              <div className="points1">
                <div className="points-item" />
                <div className="parent2">
                  <b className="b19">7823.3</b>
                  <b className="usdt-bep20">RSC Bep20</b>
                </div>
              </div>
              <div className="fee-parent">
                <b className="bnb">Fee</b>
                <b className="bnb-010">0.00064 BNB = 0.10 USDT</b>
              </div>
              <div className="checkbox">
                <div className="title-wrapper">
                  <div className="title5">Buy</div>
                </div>
              </div>
              <BottomTabs1
                materialSymbolsLighttaskAlt="/materialsymbolslighttaskaltrounded1.svg"
                propOverflowY="unset"
                propBorder="1px solid #8e5ce0"
                homeBorderRadius="unset"
                homeBorder="unset"
                homeHeight="unset"
                iconParkdotTop="0.5px"
                onWalletContainerClick={onWalletContainerClick}
                onWalletContainerClick={onWalletContainerClick1}
                onHomeContainerClick={onHomeContainerClick}
              />
              <div className="vector-wrapper">
                <img className="vector-icon8" alt="" src="/vector11.svg" />
              </div>
              <div className="rsc-exchnge">
                <div className="coin-selection-frame">
                  <div className="coin-selection3">
                    <img
                      className="cryptocurrency-colorbnb-icon2"
                      alt=""
                      src="/cryptocurrencycolorbnb1@2x.png"
                    />
                    <b className="bnb">To Buy</b>
                    <b className="bnb">RSC</b>
                  </div>
                </div>
                <img
                  className="menu-icon19"
                  alt=""
                  src="/riarrowdropdownline2.svg"
                />
                <b className="balance-000">Balance: 0.00</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trade;

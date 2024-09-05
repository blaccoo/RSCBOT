import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Points from "../components/Points";
import "./Trade.css";
import FooterSection from "../components/FooterSection";
import Divider from "../components/Divider";
import Header from "../components/Header";

const Trade = () => {
  const navigate = useNavigate();

  const onProfileIconClick = useCallback(() => {
    navigate("/friends-profile");
  }, [navigate]);

  const onTradeContainerClick = useCallback(() => {
    navigate("/trade");
  }, [navigate]);

  const onWalletContainerClick = useCallback(() => {
    navigate("/wallet");
  }, [navigate]);

  const onMineContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    navigate("/task");
  }, [navigate]);

  return (
    <div className="trade7">
      <Header/>
      <div className="wallet-body-frame16">
     <Divider/>
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
                <b className="current-price">Buy</b>
                <b className="sell8">Sell</b>
              </div>
            </div>
            <div className="coin-selection-parent">
              <div className="coin-selection1">
                <b className="current-price">0:29</b>
              </div>
              <div className="coin-selection2">
                <img
                  className="galasettings-icon"
                  alt=""
                  src="/galasettings.svg"
                />
              </div>
            </div>
            <div className="list">
              <Points prop="678,689" uSDTBep20="Buy Max" />
              <div className="rsc-exchnge">
                <div className="rsc-exchnge-inner">
                  <div className="coin-selection-container">
                    <div className="coin-selection3">
                      <img
                        className="cryptocurrency-colorbnb-icon"
                        alt=""
                        src="/cryptocurrencycolorbnb@2x.png"
                      />
                      <b className="b21">678,689</b>
                    </div>
                  </div>
                </div>
                <div className="rsc-exchnge-child">
                  <div className="coin-selection-container">
                    <div className="coin-selection3">
                      <img
                        className="cryptocurrency-colorbnb-icon"
                        alt=""
                        src="/cryptocurrencycolorbnb1@2x.png"
                      />
                      <b className="b22">33.56</b>
                    </div>
                  </div>
                </div>
              </div>
              <div className="current-price-parent">
                <b className="current-price">Current Price</b>
                <b className="rsc-0028">1 RSC = 0.028 USDT</b>
              </div>
              <img
                className="list-child"
                alt=""
                src="/frame-758531155@2x.png"
              />
              <div className="rsc-exchnge1">
                <div className="coin-selection-wrapper1">
                  <div className="coin-selection5">
                    <b className="usdt24">USDT</b>
                  </div>
                </div>
                <img
                  className="fluentdata-histogram-20-regul-icon"
                  alt=""
                  src="/riarrowdropdownline1.svg"
                />
                <b className="balance-49">Balance: 49</b>
              </div>
            </div>
            <div className="content-inner">
              <div className="estimated-balance-after-trade-wrapper">
                <b className="estimated-balance-after-container">
                  <span>Estimated Balance After Trade</span>
                  <span className="span3">{`: `}</span>
                  <span className="rsc10">678,698 RSC</span>
                </b>
              </div>
            </div>
            <div className="checkbox">
              <div className="title-wrapper">
                <div className="title5">Buy RSC with USDT</div>
              </div>
            </div>
            <div className="coin-selection-wrapper2">
              <div className="coin-selection6">
                <img
                  className="cryptocurrency-colorbnb-icon2"
                  alt=""
                  src="/cryptocurrencycolorbnb.svg"
                />
                <b className="current-price">BNB</b>
                <b className="current-price">Network</b>
                <img
                  className="fluentdata-histogram-20-regul-icon"
                  alt=""
                  src="/riarrowdropdownline1.svg"
                />
              </div>
            </div>
            <FooterSection/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trade;

import CurrentBalanceFrame1 from "../components/CurrentBalanceFrame1";
import FooterStartFrame from "../components/FooterStartFrame";
import SocialMediaHandle from "../components/SocialMediaHandle";
import BottomTabs from "../components/BottomTabs";
import "./CoinOverview.css";
import FooterSection from "../components/FooterSection";
import Divider from "../components/Divider";
import Header from "../components/Header";

const CoinOverview = () => {
  return (
    <div className="coin-overview">
      <Header/>
      <div className="wallet-body-frame4">
     <Divider/>
        <CurrentBalanceFrame1 />
        <div className="title2">
          <div className="title-instruction-frame2">
            <div className="use-p2p-to">
              Use P2P to Buy or Sell Any Currency
            </div>
          </div>
        </div>
        <div className="coin-overview-and-transactions3">
          <div className="coin-overvie-frame2">
            <div className="coin-frame">
              <div className="transaction-and-overview-fram">
                <div className="use-p2p-to">Transactions</div>
                <div className="transactions1">Transactions</div>
              </div>
              <div className="line-frame">
                <div className="line-frame-child" />
              </div>
              <div className="coin-frame-child" />
            </div>
            <div className="change-details-frame">
              <div className="detail-frame">
                <div className="all-orders-frame3">
                  <div className="order-frame3">
                    <div className="order-status">
                      <div className="ongoing">ONGOING</div>
                    </div>
                    <div className="amounts-of-order3">
                      <div className="sell">Buy:</div>
                      <div className="div32">1009.89</div>
                      <div className="div32">USDT</div>
                      <div className="div32">For</div>
                      <div className="div32">1597.76</div>
                      <div className="div32">NGN</div>
                    </div>
                    <div className="payment-method12">
                      <div className="ongoing">Payment Method:</div>
                      <div className="wallet2">Wallet</div>
                    </div>
                    <div className="orders-date-and-ref8">
                      <div className="th-march">{`27th : March : 2024 `}</div>
                      <div className="ongoing">{`1:32 PM `}</div>
                      <div className="ref">Ref:</div>
                      <div className="ongoing">#167-UY93475J73</div>
                    </div>
                  </div>
                  <div className="order-frame4">
                    <div className="order-status">
                      <div className="ongoing">CANCEL</div>
                    </div>
                    <div className="amounts-of-order3">
                      <div className="sell">Sell:</div>
                      <div className="div32">1009.89</div>
                      <div className="div32">USDT</div>
                      <div className="div32">For</div>
                      <div className="div32">1597.76</div>
                      <div className="div32">NGN</div>
                    </div>
                    <div className="payment-method12">
                      <div className="ongoing">Payment Method:</div>
                      <div className="wallet2">Wallet</div>
                    </div>
                    <div className="orders-date-and-ref8">
                      <div className="th-march">{`27th : March : 2024 `}</div>
                      <div className="ongoing">{`1:32 PM `}</div>
                      <div className="ref">Ref:</div>
                      <div className="ongoing">#167-UY93475J73</div>
                    </div>
                  </div>
                  <div className="order-frame3">
                    <div className="order-status">
                      <div className="ongoing">PENDING</div>
                    </div>
                    <div className="amounts-of-order3">
                      <div className="sell">Sell:</div>
                      <div className="div32">1009.89</div>
                      <div className="div32">USDT</div>
                      <div className="div32">For</div>
                      <div className="div32">1597.76</div>
                      <div className="div32">NGN</div>
                    </div>
                    <div className="payment-method12">
                      <div className="ongoing">Payment Method:</div>
                      <div className="wallet2">Wallet</div>
                    </div>
                    <div className="orders-date-and-ref8">
                      <div className="th-march">{`27th : March : 2024 `}</div>
                      <div className="ongoing">{`1:32 PM `}</div>
                      <div className="ref">Ref:</div>
                      <div className="ongoing">#167-UY93475J73</div>
                    </div>
                  </div>
                  <div className="order-frame3">
                    <div className="order-status">
                      <div className="ongoing">COMPLETED</div>
                    </div>
                    <div className="amounts-of-order3">
                      <div className="sell">Buy:</div>
                      <div className="div32">1009.89</div>
                      <div className="div32">USDT</div>
                      <div className="div32">For</div>
                      <div className="div32">1597.76</div>
                      <div className="div32">NGN</div>
                    </div>
                    <div className="payment-method12">
                      <div className="ongoing">Payment Method:</div>
                      <div className="wallet2">Wallet</div>
                    </div>
                    <div className="orders-date-and-ref8">
                      <div className="th-march">{`27th : March : 2024 `}</div>
                      <div className="ongoing">{`1:32 PM `}</div>
                      <div className="ref">Ref:</div>
                      <div className="ongoing">#167-UY93475J73</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="transaction-frame">
                <div className="space1" />
                <div className="transaction-details">
                  <div className="transaction">
                    <div className="price3">
                      <div className="sent">Sent</div>
                    </div>
                    <div className="coin-name">
                      <div className="ongoing">To</div>
                    </div>
                    <div className="price-changes">
                      <div className="ongoing">Fee</div>
                    </div>
                    <div className="price-changes1">
                      <div className="time">Time</div>
                    </div>
                  </div>
                  <div className="transaction">
                    <div className="sell">84 RSC</div>
                    <div className="coin-name">
                      <div className="ongoing">@huggycrypto</div>
                    </div>
                    <div className="price-changes">
                      <div className="price-changes2">
                        <div className="ongoing">{`0.42 `}</div>
                        <div className="ref">RSC</div>
                      </div>
                    </div>
                    <div className="price-changes1">
                      <div className="price-changes2">
                        <div className="march2024">{`23:March:2024 `}</div>
                        <div className="march2024">14:45:07</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="price-overview-parent">
                  <div className="transaction">
                    <div className="line-frame">
                      <div className="sent">Recieve</div>
                    </div>
                    <div className="coin-name2">
                      <div className="ongoing">From</div>
                    </div>
                    <div className="price-changes">
                      <div className="ongoing">Fee</div>
                    </div>
                    <div className="price-changes5">
                      <div className="time">Time</div>
                    </div>
                  </div>
                  <div className="transaction">
                    <div className="sent">!09.98 RSC</div>
                    <div className="coin-name2">
                      <div className="ongoing">@cryptomaster</div>
                    </div>
                    <div className="price-changes">
                      <div className="price-changes2">
                        <div className="ongoing">0</div>
                        <div className="ref">RSC</div>
                      </div>
                    </div>
                    <div className="price-changes5">
                      <div className="price-changes2">
                        <div className="ongoing">{`21:March:2024 `}</div>
                        <div className="ongoing">19:34:01</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="price-overview-parent">
                  <div className="transaction">
                    <div className="line-frame">
                      <div className="sent">Withdrawn</div>
                    </div>
                    <div className="coin-name2">
                      <div className="ongoing">To</div>
                    </div>
                    <div className="price-changes">
                      <div className="ongoing">Fee</div>
                    </div>
                    <div className="price-changes5">
                      <div className="time">Time</div>
                    </div>
                  </div>
                  <div className="transaction">
                    <div className="sent">3007 RSC</div>
                    <div className="coin-name2">
                      <div className="ongoing">xE0b7hu89005ff0l12xcv96b</div>
                    </div>
                    <div className="price-changes">
                      <div className="price-changes2">
                        <div className="ongoing">15.035</div>
                        <div className="ref">RSC</div>
                      </div>
                    </div>
                    <div className="price-changes5">
                      <div className="price-changes2">
                        <div className="ongoing">{`21:March:2024 `}</div>
                        <div className="ongoing">12:15:06</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="price-overview-parent">
                  <div className="transaction">
                    <div className="line-frame">
                      <div className="sent">Sold</div>
                    </div>
                    <div className="coin-name2">
                      <div className="ongoing">To</div>
                    </div>
                    <div className="price-changes">
                      <div className="ongoing">Fee</div>
                    </div>
                    <div className="price-changes5">
                      <div className="time">Time</div>
                    </div>
                  </div>
                  <div className="transaction">
                    <div className="sent">1834 RSC</div>
                    <div className="coin-name2">
                      <div className="ongoing">@fadafada</div>
                    </div>
                    <div className="price-changes">
                      <div className="price-changes2">
                        <div className="ongoing">9.37</div>
                        <div className="ref">RSC</div>
                      </div>
                    </div>
                    <div className="price-changes5">
                      <div className="price-changes2">
                        <div className="ongoing">{`20:March:2024 `}</div>
                        <div className="ongoing">13:15:27</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="price-overview-parent">
                  <div className="transaction">
                    <div className="line-frame">
                      <div className="sent">Bought</div>
                    </div>
                    <div className="coin-name2">
                      <div className="ongoing">From</div>
                    </div>
                    <div className="price-changes">
                      <div className="ongoing">Fee</div>
                    </div>
                    <div className="price-changes5">
                      <div className="time">Time</div>
                    </div>
                  </div>
                  <div className="transaction">
                    <div className="sent">10034 RSC</div>
                    <div className="coin-name2">
                      <div className="ongoing">@notcrypto</div>
                    </div>
                    <div className="price-changes">
                      <div className="price-changes2">
                        <div className="ongoing">0</div>
                        <div className="ref">RSC</div>
                      </div>
                    </div>
                    <div className="price-changes5">
                      <div className="price-changes2">
                        <div className="ongoing">{`19:March:2024 `}</div>
                        <div className="ongoing">23:01:11</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <FooterStartFrame
            propHeight="170px"
            propTop="34.5px"
            propHeight1="40px"
            propLeft="calc(50% - 153.5px)"
            propPadding="0px 0px 1px"
          />
        </div>
        <SocialMediaHandle group182="/group-1821.svg" />
<FooterSection />
      </div>
    </div>
  );
};

export default CoinOverview;

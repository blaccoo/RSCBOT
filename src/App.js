import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import LeaderBoardProfile from "./pages/LeaderBoardProfile";
import P2PCreateBuy from "./pages/P2PCreateBuy";
import CurrencyUpdate from "./pages/CurrencyUpdate";
import Screen1Trade from "./pages/Screen1Trade";
import ChoseAccountAddCash from "./pages/ChoseAccountAddCash";
import USDTWithdrawalModal from "./pages/USDTWithdrawalModal";
import WithdrawalPaymentConfirmation from "./pages/WithdrawalPaymentConfirmation";
import AmountToWithdraw from "./pages/AmountToWithdraw";
import PinForFiatDeposite1 from "./pages/PinForFiatDeposite1";
import P2PBuyList from "./pages/P2PBuyList";
import USDTSendModal from "./pages/USDTSendModal";
import Screen2Wallet from "./pages/Screen2Wallet";
import PinForFiatDeposite from "./pages/PinForFiatDeposite";
import CoinOverview from "./pages/CoinOverview";
import AddAmountToDeposit from "./pages/AddAmountToDeposit";
import P2PBuyPaymentConfirmation1 from "./pages/P2PBuyPaymentConfirmation1";
import P2PPayInfoAndTrade from "./pages/P2PPayInfoAndTrade";
import DepositFaitPaymentConfirmation from "./pages/DepositFaitPaymentConfirmation";
import P2PBuyConfirmPay from "./pages/P2PBuyConfirmPay";
import USDTPaymentConfirmationModal from "./pages/USDTPaymentConfirmationModal";
import P2PSellerConfirmRecipient from "./pages/P2PSellerConfirmRecipient";
import LineMdspeedLoop from "./pages/LineMdspeedLoop";
import ConfirmAddAmountToDeposit1 from "./pages/ConfirmAddAmountToDeposit1";
import DepositPaymentConfirmation from "./pages/DepositPaymentConfirmation";
import ConfirmAddAmountToDeposit from "./pages/ConfirmAddAmountToDeposit";
import Boast from "./pages/Boast";
import USDT from "./pages/USDT";
import P2PSellList from "./pages/P2PSellList";
import P2PSellerPaymentConfirmation from "./pages/P2PSellerPaymentConfirmation";
import P2P from "./pages/P2P";
import DepositFiatConfirmPay from "./pages/DepositFiatConfirmPay";
import Trade from "./pages/Trade";
import P2PCreatBuyAds from "./pages/P2PCreatBuyAds";
import P2PAddPaymentMethod from "./pages/P2PAddPaymentMethod";
import UpdatedAccountModal from "./pages/UpdatedAccountModal";
import P2PCreatSellAds from "./pages/P2PCreatSellAds";
import USDTReceiveModal from "./pages/USDTReceiveModal";
import P2PEnterBuy from "./pages/P2PEnterBuy";
import PinForUsdtWithdrwal from "./pages/PinForUsdtWithdrwal";
import Screen3SendingReceivingCoinToWallet from "./pages/Screen3SendingReceivingCoinToWallet";
import ChoseWhoToWithdrawFrom from "./pages/ChoseWhoToWithdrawFrom";
import USDTWithdrawalConfirmationModal from "./pages/USDTWithdrawalConfirmationModal";
import WithdrawFaitPaymentConfirmation from "./pages/WithdrawFaitPaymentConfirmation";
import ChoseAccountToWithdrawCash from "./pages/ChoseAccountToWithdrawCash";
import WithdrawalFiatConfirmPay from "./pages/WithdrawalFiatConfirmPay";
import P2PSellerPaymentConfirmation1 from "./pages/P2PSellerPaymentConfirmation1";
import Task from "./pages/Task";
import P2PCreateSell from "./pages/P2PCreateSell";
import Wallet from "./pages/Wallet";
import P2PBuyPaymentConfirmation from "./pages/P2PBuyPaymentConfirmation";
import AddCash from "./pages/AddCash";
import P2PEnterSell from "./pages/P2PEnterSell";
import Screen4P2P from "./pages/Screen4P2P";
import BanksUpdate from "./pages/BanksUpdate";
import Carbonfriendship from "./pages/Carbonfriendship";
import ComingSonWallet from "./pages/ComingSonWallet";
import ComingMarketPlace from "./pages/ComingMarketPlace";
import FriendsProfile from "./pages/FriendsProfile";
import StatsProfile from "./pages/StatsProfile";
import ComingSonTrade from "./pages/ComingSonTrade";
import ModalClaimingTaskForFailedTask from "./components/ModalClaimingTaskForFailedTask";
import FriendsProfile1 from "./pages/FriendsProfile1";
import TaskQuiz from "./pages/TaskQuiz";
import ModalStarPayForMultitap from "./components/ModalStarPayForMultitap";
import ModalStarPayForEnergyLimit from "./components/ModalStarPayForEnergyLimit";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/p2p-create-buy":
        title = "";
        metaDescription = "";
        break;
      case "/currency-update":
        title = "";
        metaDescription = "";
        break;
      case "/screen-1-trade":
        title = "";
        metaDescription = "";
        break;
      case "/chose-account-add-cash":
        title = "";
        metaDescription = "";
        break;
      case "/usdt-withdrawal-modal":
        title = "";
        metaDescription = "";
        break;
      case "/withdrawal-payment-confirmation":
        title = "";
        metaDescription = "";
        break;
      case "/-amount-to-withdraw":
        title = "";
        metaDescription = "";
        break;
      case "/pin-for-fiat-deposite":
        title = "";
        metaDescription = "";
        break;
      case "/p2p-buy-list":
        title = "";
        metaDescription = "";
        break;
      case "/usdt-send-modal":
        title = "";
        metaDescription = "";
        break;
      case "/screen-2-wallet":
        title = "";
        metaDescription = "";
        break;
      case "/pin-for-fiat-deposite1":
        title = "";
        metaDescription = "";
        break;
      case "/coin-overview":
        title = "";
        metaDescription = "";
        break;
      case "/add-amount-to-deposit":
        title = "";
        metaDescription = "";
        break;
      case "/p2p-buy-payment-confirmation":
        title = "";
        metaDescription = "";
        break;
      case "/p2p-pay-info-and-trade":
        title = "";
        metaDescription = "";
        break;
      case "/deposit-fait-payment-confirmation":
        title = "";
        metaDescription = "";
        break;
      case "/p2p-buy-confirm-pay":
        title = "";
        metaDescription = "";
        break;
      case "/usdt-payment-confirmation-modal":
        title = "";
        metaDescription = "";
        break;
      case "/p2p-seller-confirm-recipient":
        title = "";
        metaDescription = "";
        break;
      case "/linemdspeedloop":
        title = "";
        metaDescription = "";
        break;
      case "/confirm-add-amount-to-deposit":
        title = "";
        metaDescription = "";
        break;
      case "/deposit-payment-confirmation":
        title = "";
        metaDescription = "";
        break;
      case "/confirm-add-amount-to-deposit1":
        title = "";
        metaDescription = "";
        break;
      case "/boast":
        title = "";
        metaDescription = "";
        break;
      case "/usdt":
        title = "";
        metaDescription = "";
        break;
      case "/p2p-sell-list":
        title = "";
        metaDescription = "";
        break;
      case "/p2p-seller-payment-confirmation":
        title = "";
        metaDescription = "";
        break;
      case "/p2p":
        title = "";
        metaDescription = "";
        break;
      case "/deposit-fiat-confirm-pay":
        title = "";
        metaDescription = "";
        break;
      case "/trade":
        title = "";
        metaDescription = "";
        break;
      case "/p2p-creat-buy-ads":
        title = "";
        metaDescription = "";
        break;
      case "/p2p-add-payment-method":
        title = "";
        metaDescription = "";
        break;
      case "/updated-account-modal":
        title = "";
        metaDescription = "";
        break;
      case "/p2p-creat-sell-ads":
        title = "";
        metaDescription = "";
        break;
      case "/usdt-receive-modal":
        title = "";
        metaDescription = "";
        break;
      case "/p2p-enter-buy":
        title = "";
        metaDescription = "";
        break;
      case "/pin-for-usdt-withdrwal":
        title = "";
        metaDescription = "";
        break;
      case "/screen-3-sending-receiving-coin-to-wallet":
        title = "";
        metaDescription = "";
        break;
      case "/chose-who-to-withdraw-from":
        title = "";
        metaDescription = "";
        break;
      case "/usdt-withdrawal-confirmation-modal":
        title = "";
        metaDescription = "";
        break;
      case "/withdraw-fait-payment-confirmation":
        title = "";
        metaDescription = "";
        break;
      case "/chose-account-to-withdraw-cash":
        title = "";
        metaDescription = "";
        break;
      case "/withdrawal-fiat-confirm-pay":
        title = "";
        metaDescription = "";
        break;
      case "/p2p-seller-payment-confirmation1":
        title = "";
        metaDescription = "";
        break;
      case "/task":
        title = "";
        metaDescription = "";
        break;
      case "/p2p-create-sell":
        title = "";
        metaDescription = "";
        break;
      case "/wallet":
        title = "";
        metaDescription = "";
        break;
      case "/p2p-buy-payment-confirmation1":
        title = "";
        metaDescription = "";
        break;
      case "/add-cash":
        title = "";
        metaDescription = "";
        break;
      case "/p2p-enter-sell":
        title = "";
        metaDescription = "";
        break;
      case "/screen-4-p2p":
        title = "";
        metaDescription = "";
        break;
      case "/banks-update":
        title = "";
        metaDescription = "";
        break;
      case "/carbonfriendship":
        title = "";
        metaDescription = "";
        break;
      case "/coming-son-wallet":
        title = "";
        metaDescription = "";
        break;
      case "/coming-market-place":
        title = "";
        metaDescription = "";
        break;
      case "/start-task":
        title = "";
        metaDescription = "";
        break;
      case "/stats-profile":
        title = "";
        metaDescription = "";
        break;
      case "/coming-son-trade":
        title = "";
        metaDescription = "";
        break;
      case "/modal-claiming-task-for-failed-task":
        title = "";
        metaDescription = "";
        break;
      case "/friends-profile":
        title = "";
        metaDescription = "";
        break;
      case "/task-quiz":
        title = "";
        metaDescription = "";
        break;
      case "/modal-star-pay-for-multitap":
        title = "";
        metaDescription = "";
        break;
      case "/modal-star-pay-for-energy-limit":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/" element={<LeaderBoardProfile />} />
      <Route path="/p2p-create-buy" element={<P2PCreateBuy />} />
      <Route path="/currency-update" element={<CurrencyUpdate />} />
      <Route path="/screen-1-trade" element={<Screen1Trade />} />
      <Route path="/chose-account-add-cash" element={<ChoseAccountAddCash />} />
      <Route path="/usdt-withdrawal-modal" element={<USDTWithdrawalModal />} />
      <Route
        path="/withdrawal-payment-confirmation"
        element={<WithdrawalPaymentConfirmation />}
      />
      <Route path="/-amount-to-withdraw" element={<AmountToWithdraw />} />
      <Route path="/pin-for-fiat-deposite" element={<PinForFiatDeposite1 />} />
      <Route path="/p2p-buy-list" element={<P2PBuyList />} />
      <Route path="/usdt-send-modal" element={<USDTSendModal />} />
      <Route path="/screen-2-wallet" element={<Screen2Wallet />} />
      <Route path="/pin-for-fiat-deposite1" element={<PinForFiatDeposite />} />
      <Route path="/coin-overview" element={<CoinOverview />} />
      <Route path="/add-amount-to-deposit" element={<AddAmountToDeposit />} />
      <Route
        path="/p2p-buy-payment-confirmation"
        element={<P2PBuyPaymentConfirmation1 />}
      />
      <Route path="/p2p-pay-info-and-trade" element={<P2PPayInfoAndTrade />} />
      <Route
        path="/deposit-fait-payment-confirmation"
        element={<DepositFaitPaymentConfirmation />}
      />
      <Route path="/p2p-buy-confirm-pay" element={<P2PBuyConfirmPay />} />
      <Route
        path="/usdt-payment-confirmation-modal"
        element={<USDTPaymentConfirmationModal />}
      />
      <Route
        path="/p2p-seller-confirm-recipient"
        element={<P2PSellerConfirmRecipient />}
      />
      <Route path="/linemdspeedloop" element={<LineMdspeedLoop />} />
      <Route
        path="/confirm-add-amount-to-deposit"
        element={<ConfirmAddAmountToDeposit1 />}
      />
      <Route
        path="/deposit-payment-confirmation"
        element={<DepositPaymentConfirmation />}
      />
      <Route
        path="/confirm-add-amount-to-deposit1"
        element={<ConfirmAddAmountToDeposit />}
      />
      <Route path="/boast" element={<Boast />} />
      <Route path="/usdt" element={<USDT />} />
      <Route path="/p2p-sell-list" element={<P2PSellList />} />
      <Route
        path="/p2p-seller-payment-confirmation"
        element={<P2PSellerPaymentConfirmation />}
      />
      <Route path="/p2p" element={<P2P />} />
      <Route
        path="/deposit-fiat-confirm-pay"
        element={<DepositFiatConfirmPay />}
      />
      <Route path="/trade" element={<Trade />} />
      <Route path="/p2p-creat-buy-ads" element={<P2PCreatBuyAds />} />
      <Route path="/p2p-add-payment-method" element={<P2PAddPaymentMethod />} />
      <Route path="/updated-account-modal" element={<UpdatedAccountModal />} />
      <Route path="/p2p-creat-sell-ads" element={<P2PCreatSellAds />} />
      <Route path="/usdt-receive-modal" element={<USDTReceiveModal />} />
      <Route path="/p2p-enter-buy" element={<P2PEnterBuy />} />
      <Route path="/pin-for-usdt-withdrwal" element={<PinForUsdtWithdrwal />} />
      <Route
        path="/screen-3-sending-receiving-coin-to-wallet"
        element={<Screen3SendingReceivingCoinToWallet />}
      />
      <Route
        path="/chose-who-to-withdraw-from"
        element={<ChoseWhoToWithdrawFrom />}
      />
      <Route
        path="/usdt-withdrawal-confirmation-modal"
        element={<USDTWithdrawalConfirmationModal />}
      />
      <Route
        path="/withdraw-fait-payment-confirmation"
        element={<WithdrawFaitPaymentConfirmation />}
      />
      <Route
        path="/chose-account-to-withdraw-cash"
        element={<ChoseAccountToWithdrawCash />}
      />
      <Route
        path="/withdrawal-fiat-confirm-pay"
        element={<WithdrawalFiatConfirmPay />}
      />
      <Route
        path="/p2p-seller-payment-confirmation1"
        element={<P2PSellerPaymentConfirmation1 />}
      />
      <Route path="/task" element={<Task />} />
      <Route path="/p2p-create-sell" element={<P2PCreateSell />} />
      <Route path="/wallet" element={<Wallet />} />
      <Route
        path="/p2p-buy-payment-confirmation1"
        element={<P2PBuyPaymentConfirmation />}
      />
      <Route path="/add-cash" element={<AddCash />} />
      <Route path="/p2p-enter-sell" element={<P2PEnterSell />} />
      <Route path="/screen-4-p2p" element={<Screen4P2P />} />
      <Route path="/banks-update" element={<BanksUpdate />} />
      <Route path="/carbonfriendship" element={<Carbonfriendship />} />
      <Route path="/coming-son-wallet" element={<ComingSonWallet />} />
      <Route path="/coming-market-place" element={<ComingMarketPlace />} />
      <Route path="/start-task" element={<FriendsProfile />} />
      <Route path="/stats-profile" element={<StatsProfile />} />
      <Route path="/coming-son-trade" element={<ComingSonTrade />} />
      <Route
        path="/modal-claiming-task-for-failed-task"
        element={<ModalClaimingTaskForFailedTask />}
      />
      <Route path="/friends-profile" element={<FriendsProfile1 />} />
      <Route path="/task-quiz" element={<TaskQuiz />} />
      <Route
        path="/modal-star-pay-for-multitap"
        element={<ModalStarPayForMultitap />}
      />
      <Route
        path="/modal-star-pay-for-energy-limit"
        element={<ModalStarPayForEnergyLimit />}
      />
    </Routes>
  );
}
export default App;

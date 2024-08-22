import { useCallback } from "react";
import "./PinForUsdtWithdrwal.css";

const PinForUsdtWithdrwal = () => {
  const onButtonFrameContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='confirmButtonContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="pin-for-usdt-withdrwal">
      <div className="pin-body-frame4">
        <div className="header24">
          <img className="menu-icon24" alt="" src="/menu-icon.svg" />
          <div className="notification-and-count4">
            <img
              className="notification-icon22"
              alt=""
              src="/notification1.svg"
            />
            <b className="b21">12</b>
          </div>
          <div className="connect-wallet24">
            <b className="connect24">Connect</b>
          </div>
          <img className="profile-icon24" alt="" src="/profile1.svg" />
        </div>
        <div className="pin-instruction2">
          <div className="enter-pin2">Enter your Rising Coin Pin</div>
        </div>
        <div className="pin-body-frame5">
          <div className="pin-frame2">
            <div className="pin-12">
              <div className="div104">1</div>
            </div>
            <div className="pin-12">
              <div className="div105">2</div>
            </div>
            <div className="pin-12">
              <div className="div105">3</div>
            </div>
            <div className="pin-12">
              <div className="div105">4</div>
            </div>
          </div>
          <div className="wrong-pin-frame2">
            <div className="wrong-pin2">Wrong Pin</div>
          </div>
          <div className="button-frame4" onClick={onButtonFrameContainerClick}>
            <div
              className="confirm-button19"
              data-scroll-to="confirmButtonContainer"
            >
              <div className="countinue-button2">
                <b className="continue4">Continue</b>
              </div>
            </div>
          </div>
          <div className="forget-pin-fram2">
            <div className="wrong-pin2">{`Forgot Pin? `}</div>
            <div className="rest-here2">Rest here</div>
          </div>
        </div>
        <div className="social-media-handle2">
          <div className="community2">
            <div className="social-handle-frame2">
              <div className="join-our-communities2">Join our communities</div>
              <div className="social-media2">
                <img
                  className="facebook-logo-icon2"
                  alt=""
                  src="/facebooklogo@2x.png"
                />
                <img
                  className="facebook-logo-icon2"
                  alt=""
                  src="/twitterlogo2@2x.png"
                />
                <img
                  className="facebook-logo-icon2"
                  alt=""
                  src="/discordlogo1@2x.png"
                />
                <img
                  className="facebook-logo-icon2"
                  alt=""
                  src="/telegramlogo@2x.png"
                />
                <img
                  className="facebook-logo-icon2"
                  alt=""
                  src="/instagramlogo2@2x.png"
                />
                <img
                  className="facebook-logo-icon2"
                  alt=""
                  src="/youtubelogo1@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PinForUsdtWithdrwal;

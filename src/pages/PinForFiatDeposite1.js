import { useCallback } from "react";
import "./PinForFiatDeposite1.css";

const PinForFiatDeposite1 = () => {
  const onButtonFrameContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='confirmButtonContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="pin-for-fiat-deposite">
      <div className="pin-body-frame">
        <div className="header3">
          <img className="menu-icon3" alt="" src="/menu-icon.svg" />
          <div className="notification-and-count">
            <img
              className="notification-icon3"
              alt=""
              src="/notification1.svg"
            />
            <b className="b1">12</b>
          </div>
          <div className="connect-wallet3">
            <b className="connect3">Connect</b>
          </div>
          <img className="profile-icon3" alt="" src="/profile1.svg" />
        </div>
        <div className="pin-instruction">
          <div className="enter-pin">Enter your Rising Coin Pin</div>
        </div>
        <div className="pin-body-frame1">
          <div className="pin-frame">
            <div className="pin-1">
              <div className="div9">1</div>
            </div>
            <div className="pin-1">
              <div className="div10">2</div>
            </div>
            <div className="pin-1">
              <div className="div10">3</div>
            </div>
            <div className="pin-1">
              <div className="div10">4</div>
            </div>
          </div>
          <div className="wrong-pin-frame">
            <div className="wrong-pin">Wrong Pin</div>
          </div>
          <div className="button-frame" onClick={onButtonFrameContainerClick}>
            <div
              className="confirm-button4"
              data-scroll-to="confirmButtonContainer"
            >
              <div className="countinue-button">
                <b className="continue">Continue</b>
              </div>
            </div>
          </div>
          <div className="forget-pin-fram">
            <div className="wrong-pin">{`Forgot Pin? `}</div>
            <div className="rest-here">Rest here</div>
          </div>
        </div>
        <div className="social-media-handle">
          <div className="community">
            <div className="social-handle-frame">
              <div className="join-our-communities">Join our communities</div>
              <div className="social-media">
                <img
                  className="facebook-logo-icon"
                  alt=""
                  src="/facebooklogo@2x.png"
                />
                <img
                  className="facebook-logo-icon"
                  alt=""
                  src="/twitterlogo@2x.png"
                />
                <img
                  className="facebook-logo-icon"
                  alt=""
                  src="/discordlogo@2x.png"
                />
                <img
                  className="facebook-logo-icon"
                  alt=""
                  src="/telegramlogo@2x.png"
                />
                <img
                  className="facebook-logo-icon"
                  alt=""
                  src="/instagramlogo@2x.png"
                />
                <img
                  className="facebook-logo-icon"
                  alt=""
                  src="/youtubelogo@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PinForFiatDeposite1;

import { useCallback } from "react";
import "./PinForFiatDeposite.css";

const PinForFiatDeposite = () => {
  const onButtonFrameContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='confirmButtonContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="pin-for-fiat-deposite1">
      <div className="pin-body-frame2">
        <div className="header5">
          <img className="menu-icon5" alt="" src="/menu-icon.svg" />
          <div className="notification-and-count1">
            <img
              className="notification-icon5"
              alt=""
              src="/notification1.svg"
            />
            <b className="b4">12</b>
          </div>
          <div className="connect-wallet5">
            <b className="connect5">Connect</b>
          </div>
          <img className="profile-icon5" alt="" src="/profile1.svg" />
        </div>
        <div className="pin-instruction1">
          <div className="enter-pin1">Enter your Rising Coin Pin</div>
        </div>
        <div className="pin-body-frame3">
          <div className="pin-frame1">
            <div className="pin-11">
              <div className="div28">1</div>
            </div>
            <div className="pin-11">
              <div className="div29">2</div>
            </div>
            <div className="pin-11">
              <div className="div29">3</div>
            </div>
            <div className="pin-11">
              <div className="div29">4</div>
            </div>
          </div>
          <div className="wrong-pin-frame1">
            <div className="wrong-pin1">Wrong Pin</div>
          </div>
          <div className="button-frame1" onClick={onButtonFrameContainerClick}>
            <div
              className="confirm-button6"
              data-scroll-to="confirmButtonContainer"
            >
              <div className="countinue-button1">
                <b className="continue1">Continue</b>
              </div>
            </div>
          </div>
          <div className="forget-pin-fram1">
            <div className="wrong-pin1">{`Forgot Pin? `}</div>
            <div className="rest-here1">Rest here</div>
          </div>
        </div>
        <div className="social-media-handle1">
          <div className="community1">
            <div className="social-handle-frame1">
              <div className="join-our-communities1">Join our communities</div>
              <div className="social-media1">
                <img
                  className="facebook-logo-icon1"
                  alt=""
                  src="/facebooklogo@2x.png"
                />
                <img
                  className="facebook-logo-icon1"
                  alt=""
                  src="/twitterlogo1@2x.png"
                />
                <img
                  className="facebook-logo-icon1"
                  alt=""
                  src="/discordlogo1@2x.png"
                />
                <img
                  className="facebook-logo-icon1"
                  alt=""
                  src="/telegramlogo@2x.png"
                />
                <img
                  className="facebook-logo-icon1"
                  alt=""
                  src="/instagramlogo1@2x.png"
                />
                <img
                  className="facebook-logo-icon1"
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

export default PinForFiatDeposite;

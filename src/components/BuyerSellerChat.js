import { useMemo } from "react";
import PropTypes from "prop-types";
import "./BuyerSellerChat.css";

const BuyerSellerChat = ({
  className = "",
  propHeight,
  propTop,
  propLeft,
  propTop1,
  propTop2,
  profile,
  profile1,
  propTop3,
}) => {
  const buyerSellerChatStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const chatMainFrameStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const chatHeaderStyle = useMemo(() => {
    return {
      top: propTop1,
    };
  }, [propTop1]);

  const onlineDisputeStyle = useMemo(() => {
    return {
      top: propTop2,
    };
  }, [propTop2]);

  const typeMessageStyle = useMemo(() => {
    return {
      top: propTop3,
    };
  }, [propTop3]);

  return (
    <div
      className={`buyer-seller-chat ${className}`}
      style={buyerSellerChatStyle}
    >
      <div className="chat-main-frame" style={chatMainFrameStyle}>
        <div className="seller-chat">
          <img className="profile-icon42" alt="" src="/profile2.svg" />
          <b className="seller">Seller</b>
        </div>
        <div className="m">
          <div className="still-dont-getdalert-container">
            <span className="still-dont-getdalert-container1">
              <p className="still-dont-getdalert">Still dont getDalert yet</p>
              <p className="still-dont-getdalert">Will Update you</p>
            </span>
          </div>
        </div>
        <div className="m1">
          <div className="please-buser-provide">
            Please @Buser provide evidence of payment before 1 hour
          </div>
        </div>
        <div className="messsage-frame">
          <div className="ok">Ok</div>
        </div>
        <div className="messsage-frame1" />
        <div className="am-sending-payment">
          Am sending Payment Evident now. Please wait a minute.
        </div>
        <div className="messsage-frame2">
          <div className="hi">Hi</div>
        </div>
        <div className="buyer-frame">
          <img className="profile-icon43" alt="" src="/profile3.svg" />
          <b className="you">You</b>
        </div>
        <div className="buyer-frame1">
          <img className="profile-icon43" alt="" src="/profile3.svg" />
          <b className="you">You</b>
        </div>
        <img className="file-frame-icon" alt="" src="/file-frame@2x.png" />
        <div className="admin-feame">
          <img className="profile-icon45" alt="" src="/profile4.svg" />
          <b className="admin">Admin</b>
        </div>
      </div>
      <div className="chat-header" style={chatHeaderStyle}>
        <b className="chat">Chat</b>
        <div className="online-dispute" style={onlineDisputeStyle}>
          <div className="seller-frame">
            <img className="profile-icon46" alt="" src={profile} />
            <b className="seller1">Seller</b>
          </div>
          <div className="admin-feame1">
            <img className="profile-icon47" alt="" src={profile1} />
            <b className="admin1">Admin</b>
          </div>
          <div className="buyer-frame2">
            <img className="profile-icon48" alt="" src="/profile3.svg" />
            <b className="you">You</b>
          </div>
        </div>
      </div>
      <div className="type-message" style={typeMessageStyle}>
        <div className="type-your-message">Type your Message Here</div>
        <img className="iconamoonsend" alt="" src="/iconamoonsend.svg" />
        <img
          className="heroiconspaper-clip"
          alt=""
          src="/heroiconspaperclip.svg"
        />
      </div>
    </div>
  );
};

BuyerSellerChat.propTypes = {
  className: PropTypes.string,
  profile: PropTypes.string,
  profile1: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
  propTop1: PropTypes.any,
  propTop2: PropTypes.any,
  propTop3: PropTypes.any,
};

export default BuyerSellerChat;

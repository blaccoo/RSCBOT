import PropTypes from "prop-types";
import "./Points.css";

const Points = ({ className = "", prop, uSDTBep20 }) => {
  return (
    <div className={`points ${className}`}>
      <div className="buysell">
        <div className="icon-park-outlinemore-four-parent">
          <img
            className="icon-park-outlinemore-four"
            alt=""
            src="/iconparkoutlinemorefour.svg"
          />
          <b className="rscusdt">RSC/USDT</b>
          <img
            className="riarrow-drop-down-line-icon8"
            alt=""
            src="/riarrowdropdownline2.svg"
          />
        </div>
      </div>
      <div className="enter-amount9">
        <div className="amount7">
          <b className="b55">{prop}</b>
        </div>
        <div className="max2">
          <b className="buy-max">{uSDTBep20}</b>
        </div>
      </div>
    </div>
  );
};

Points.propTypes = {
  className: PropTypes.string,
  prop: PropTypes.string,
  uSDTBep20: PropTypes.string,
};

export default Points;

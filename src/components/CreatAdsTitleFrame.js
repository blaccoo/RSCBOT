import PropTypes from "prop-types";
import "./CreatAdsTitleFrame.css";

const CreatAdsTitleFrame = ({ className = "" }) => {
  return (
    <div className={`creat-ads-title-frame ${className}`}>
      <div className="create-ads">
        <div className="arcticonsmeta-ads">
          <img className="vector-icon27" alt="" src="/vector12.svg" />
          <img className="vector-icon28" alt="" src="/vector13.svg" />
        </div>
        <div className="create-ads-title">Create an Ad</div>
      </div>
    </div>
  );
};

CreatAdsTitleFrame.propTypes = {
  className: PropTypes.string,
};

export default CreatAdsTitleFrame;

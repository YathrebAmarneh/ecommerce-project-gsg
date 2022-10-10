import { IconContext } from "react-icons";
import "./style.css";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const ImageSlider = () => {
  return (
    <div className="container">
      <div className="left-arrow">
        <MdOutlineKeyboardArrowLeft size="3rem" />
      </div>

      <img
        alt="img-slider"
        src="assets/images/c97458358789c033061390d08b4fdcf4e98893b0.png"
      />

      <div className="content">
        <h5>Perfume Tips Tricks</h5>
        <button>SHOP NOW</button>
      </div>

      <div className="right-arrow">
        <MdOutlineKeyboardArrowRight size="3rem" />
      </div>
    </div>
  );
};

export default ImageSlider;

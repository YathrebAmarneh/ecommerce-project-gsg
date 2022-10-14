import style from "./style.module.css";
import Btn from "../shared-components/button";

const FeaturedCart = ({ id, brandNew, imageName, description, price }) => {
  return (
    <div className={style.container}>
      <div className={style.featuredImage}>
        <span className={style.new}>{brandNew ? "New" : ""}</span>
        <img alt="featuredCarts" src={`assets/images/${imageName}.png`} />
      </div>

      <div className={style.imageDescription}>
        <p className="description">{description}</p>
        <p className="price">{price}</p>
      </div>

      <div className={style.hover}>
        <Btn buttonContent="Quick view" className="quickView" />
      </div>
    </div>
  );
};

export default FeaturedCart;

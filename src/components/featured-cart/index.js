import "./style.css";

const FeaturedCart = ({ id, brandNew, imageName, description, price }) => {
  return (
    <div className="featured-cart">
      <div className="featured-img">
        <span className="new">{brandNew ? "New" : ""}</span>
        <img alt="featuredcarts" src={`assets/images/${imageName}.png`} />
      </div>

      {/* <button>QUICK VIEW</button> */}
      <div className="featured-img-description">
        <p className="description">{description}</p>
        <p className="price">{price}</p>
      </div>
    </div>
  );
};

export default FeaturedCart;

import { SiFacebook } from "react-icons/si";
import { AiFillTwitterCircle } from "react-icons/ai";
import Button from "../../shared-components/button";
const SubscribeItem = () => {
  return (
    <div className="subscribe-item">
      <h5>Subscribe to newsletter</h5>
      <div>
        <input placeholder="Enter your email" />
        <Button
          backgroundColor="red"
          height="200px"
          width="166"
          padding="5"
          buttonContent="SUBSCRIBE"
        />

        <div className="social-icons">
          <SiFacebook className="facebook" />
          <AiFillTwitterCircle />
        </div>
      </div>
    </div>
  );
};

export default SubscribeItem;

import "./style.css";

import { IoIosArrowDown } from "react-icons/io";
const NavigationLinks = () => {
  const data = ["SHOP", "FABRIC", "JOURNAL", "ABOUT"];
  return (
    <div className="navigation-links">
      {data.map((item) => {
        return (
          <>
            <a href={`#${item.toLowerCase()}`}>
              {item}
              <IoIosArrowDown
                className="IoIosArrowDown"
                // style={{ position: "absolute", top: "10px", right: "-20px" }}
              />
            </a>
          </>
        );
      })}
    </div>
  );
};

export default NavigationLinks;

import { IoIosArrowDown } from "react-icons/io";
import style from "./style.module.css";

const NavigationLinks = () => {
  const data = ["SHOP", "FABRIC", "JOURNAL", "ABOUT"];
  return (
    <div className={style.NavigationLinks}>
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

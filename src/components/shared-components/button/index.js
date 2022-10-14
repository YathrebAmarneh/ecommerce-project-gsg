import style from "./style.module.css";

const Btn = ({ buttonContent, className }) => {
  return (
    <button className={`${style.container} ${style[className]}`}>
      {buttonContent}
    </button>
  );
};

export default Btn;

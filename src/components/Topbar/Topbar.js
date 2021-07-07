
import Icons from "../Icons/Icons";
import "./Topbar.scss";

const Topbar = ({open, changeStyle}) => {


  return (
    <div className={open ? "topbar active" : "topbar"}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Jun web dev
          </a>
          <div className="itemContainer">
            <Icons type="person" filled={open ? true : false} />
            <span>+380 50 331 59 92</span>
          </div>
          <div className="itemContainer">
            <Icons type="mail" filled={open ? true : false} />
            <span>a.kudr74@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="burger" onClick={() => changeStyle(!open)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;

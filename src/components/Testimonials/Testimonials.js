import { testimonials } from "./data";
import "./Testimonials.scss";

const Testimonials = () => {

  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {testimonials.map((i) => (
          <div key={i.id} className={i.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="arrow"/>
              <img src={i.img} className="user" alt="pic" />
              <img src={i.icon} className="right" alt="icon" />
            </div>
            <div className="center">{i.desc}</div>
            <div className="bottom">
              <h3>{i.name}</h3>
              <h4>{i.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

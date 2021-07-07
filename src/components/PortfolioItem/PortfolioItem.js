import "./PortfolioItem.scss";

const PortfolioItem = ({item}) => {
  return (
    <div className="item">
      <img src={item.img} alt={item.title} />
      <h3>{item.title}</h3>
    </div>
  );
};

export default PortfolioItem;

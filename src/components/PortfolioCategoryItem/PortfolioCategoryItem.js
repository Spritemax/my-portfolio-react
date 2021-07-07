import "./PortfolioCategoryItem.scss";

const PortfolioCategoryItem = ({ title, onClick, active }) => {
  return (
    <li onClick={onClick} className={active ? "active" : ""}>
      {title}
    </li>
  );
};

export default PortfolioCategoryItem;

import { useEffect, useState } from "react";
import "./Portfolio.scss";
import { categories } from "./list";
import PortfolioCategoryItem from "../PortfolioCategoryItem/PortfolioCategoryItem";
import {
  contentPortfolio,
  designPortfolio,
  featuredPortfolio,
  mobilePortfolio,
  webPortfolio,
} from "./data";
import PortfolioItem from "../PortfolioItem/PortfolioItem";

const Portfolio = () => {
  const [selected, setSelected] = useState("Featured");
  const [portfolio, setPortfolio] = useState([]);

  const portfolioCategoryList = categories.map((i) => (
    <PortfolioCategoryItem
      key={i.id}
      title={i.title}
      onClick={() => setSelected(i.title)}
      active={selected === i.title}
    />
  ));

  const portfolioList = portfolio.map((i) => (
    <PortfolioItem key={i.id} item={i} />
  ));

  useEffect(() => {
    switch (selected) {
      case "Featured":
        setPortfolio(featuredPortfolio);
        break;
      case "Web App":
        setPortfolio(webPortfolio);
        break;
      case "Mobile App":
        setPortfolio(mobilePortfolio);
        break;
      case "Design":
        setPortfolio(designPortfolio);
        break;
      case "Content":
        setPortfolio(contentPortfolio);
        break;
      default:
        setPortfolio(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h2>Portfolio</h2>
      <ul>{portfolioCategoryList}</ul>
      <div className="container">{portfolioList}</div>
    </div>
  );
};

export default Portfolio;

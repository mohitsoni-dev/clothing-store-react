import ProductCard from "../product-card/product-card.component";
import React from "react";
import { Link } from "react-router-dom";
import "./category-preview.styles.scss";

const CategoryPreview = ({ title, items }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <Link to={`/shop/${title.toLowerCase()}`}>{title.toUpperCase()}</Link>
      </h2>
      <div className="preview">
        {items
          .filter((_, idx) => idx < 4)
          .map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;

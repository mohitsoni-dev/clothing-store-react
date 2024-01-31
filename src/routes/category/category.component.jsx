import "./category.styles.scss";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/product-card.component";

const Category = () => {
  const { categoryId } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[categoryId]);

  useEffect(() => {
    if (categoriesMap && categoriesMap[categoryId]) {
      setProducts(categoriesMap[categoryId]);
    }
  }, [categoryId, categoriesMap]);

  return (
    <>
      <h2 className="title">{categoryId.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default Category;

import * as React from "react";
import { InferGetServerSidePropsType } from "next";

// Components
import CategoryBar from "components/CategoryBar";
import OrderList from "components/OrderList";
import Cart from "components/Cart";

// Services
import restaurantService from "services/restaurantService";
import categoryService from "services/category/categoryService";
import productService from "services/product/productService";

// Types
import { CatType, ProdType } from "types";

const Home = ({
  categoriesData,
  productsData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [categories, setCategories] = React.useState(categoriesData);
  const [products, setProducts] = React.useState(productsData);

  return (
    <>
      <Cart />
      <section className="main-order">
        <CategoryBar categories={categories} setCatData={setCategories} />
        <OrderList categories={categories} />
      </section>
    </>
  );
};

export default Home;

export const getServerSideProps = async () => {
  let categoriesData: CatType[] = [];
  let productsData: ProdType[] = [];

  const [catData, prodData] = await Promise.all([
    categoryService.getAll(),
    productService.getAll(),
  ]);

  let cats = catData.data;
  let prods = prodData.data;

  cats.map((category) => {
    const product = prods.filter(
      (product) => product.category_code === category.code
    );

    if (product) {
      category.products = product;
    }
    return category;
  });

  categoriesData = cats;
  productsData = prods;

  return {
    props: {
      categoriesData,
      productsData,
    },
  };
};

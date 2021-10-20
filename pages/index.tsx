import * as React from "react";
import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import { InferGetServerSidePropsType } from "next";
import { CSSTransition } from "react-transition-group";

// Components
import Loading from "components/Loading";
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
  const [loading, setLoading] = React.useState(true);
  const nodeRef = React.useRef(null);
  // console.log(categories);
  // console.log(products);

  return (
    <>
      {/* <CSSTransition
        nodeRef={nodeRef}
        in={loading}
        timeout={300}
        classNames="loading"
        unmountOnExit
      >
        <div ref={nodeRef}>
          <Loading />
        </div>
      </CSSTransition> */}
      {/* {!loading && <section className="main-order">order</section>} */}
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

  for (let i = 0; i < prods.length; i++) {
    for (let j = 0; j < cats.length; j++) {
      if (!cats[j].products) {
        cats[j].products = [];
      }

      if (prods[i].category_code === cats[j].code) {
        cats[j].products.push(prods[i]);
      }
    }
  }

  categoriesData = cats;
  productsData = prods;

  return {
    props: {
      categoriesData,
      productsData,
    },
  };
};

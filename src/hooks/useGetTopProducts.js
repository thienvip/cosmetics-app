import { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = "http://makeup-api.herokuapp.com/api/v1/products";

const useGetTopProducts = () => {
  const [products, setProducts] = useState([]);
  const PRODUCTS_COUNT = 12;
  const getTopProducts = async () => {
    await axios
      .get(`${BASE_URL}.json`, {
        params: {
          brand: "dior",
          product_type: "lipstick",
        },
      })
      .then((response) => {
        const { data } = response;
        data.length =
          data.length > PRODUCTS_COUNT ? PRODUCTS_COUNT : getTopProducts();

        setProducts(data);
      });
  };

  useEffect(() => {
    try {
      getTopProducts();
    } catch (error) {
      console.log("Failed to fetch", error);
    }
  }, []);

  return products;
};

export default useGetTopProducts;

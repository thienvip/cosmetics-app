import { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = "http://makeup-api.herokuapp.com/api/v1/products.json";

const useGetProducts = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    await axios
      .get(BASE_URL, {
        params: {
          price_greater_than: 0,
        },
      })
      .then((response) => {
        const { data } = response;

        setProducts(data);
      });
  };

  useEffect(() => {
    try {
      getProducts();
    } catch (error) {
      console.log("Failed to fetch", error);
    }
  }, []);

  return products;
};

export default useGetProducts;

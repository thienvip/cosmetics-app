import { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = "http://makeup-api.herokuapp.com/api/v1/products";

const useGetOurBest = () => {
  const [products, setProducts] = useState([]);
  const PRODUCTS_COUNT = 4;
  const getOurBest = async () => {
    await axios
      .get(`${BASE_URL}.json`, {
        params: {
          brand: "nyx",
        },
      })
      .then((response) => {
        const { data } = response;
        data.length =
          data.length > PRODUCTS_COUNT ? PRODUCTS_COUNT : getOurBest();

        setProducts(data);
      });
  };

  useEffect(() => {
    try {
      getOurBest();
    } catch (error) {
      console.log("Failed to fetch", error);
    }
  }, []);

  return products;
};

export default useGetOurBest;

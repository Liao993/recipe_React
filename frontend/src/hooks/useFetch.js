import { useState, useEffect } from "react";
import { getRecipes } from "../services/JsonServerClient";

const useFetch = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const received_data = await getRecipes(); // Call the imported function to get json data
        setData(received_data);
      } catch (e) {
        alert(e.message);
      }
    }

    fetchData();
  }, []);

  return { data };
};

export default useFetch;

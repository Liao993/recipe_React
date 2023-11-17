import { useState, useEffect } from "react";
import { getRecipeDetails } from "../services/JsonServerClient";

const useFetchDetail = (id) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const received_data = await getRecipeDetails(id); // Call the imported function to get json data

        setData(received_data);
      } catch (e) {
        alert(e.message);
      }
    }

    fetchData();
  }, [id]);

  return { data };
};

export default useFetchDetail;

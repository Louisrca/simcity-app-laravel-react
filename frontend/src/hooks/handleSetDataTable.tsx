import { useEffect, useCallback, useState } from "react";
import { getBTS } from "../services/tables/BTS/getBTS";

export const handleSetDataTable = () => {
  const [btsData, setBtsData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Define an async function to fetch the BTS data
    const fetchData = async () => {
      try {
        setLoading(true);
        const storedData = localStorage.getItem("btsData");
        if (storedData) {
          setBtsData(JSON.parse(storedData));
        } else {
          const Btsdata = await getBTS();
          setBtsData(Btsdata);
          localStorage.setItem("btsData", JSON.stringify(Btsdata));
        }
        setLoading(false);
      } catch (error) {
        console.error("Une erreur s'est produite :", error);
        setLoading(false);
      }
    };

    // Call the fetchData function only when the component mounts
    fetchData();
  }, []); // Empty dependency array ensures this effect runs once

  const data = { btsData, loading };
  return data;
};

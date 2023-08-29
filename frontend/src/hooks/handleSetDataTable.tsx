import { useEffect, useState } from "react";
import { getBTS } from "../services/tables/BTS/getBTS";

export const handleSetDataTable = () => {
  const [btsData, setBtsData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    getBTS()
      .then((Btsdata) => {
        setBtsData(Btsdata);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Une erreur s'est produite :", error);
      });
  }, []);

  const data = { btsData, loading };
  return data;
};

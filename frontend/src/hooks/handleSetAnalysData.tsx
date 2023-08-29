import { useEffect, useState } from "react";
import { getBTSById } from "../services/tables/BTS/getBTSById";

export const handleSetAnalysData = (codeSite: string) => {
  const [btsDataById, setbtsDataById] = useState<any>([]);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    getBTSById(codeSite)
      .then((BtsData) => {
        setbtsDataById(BtsData);
      })
      .catch((error) => {
        console.error("Une erreur s'est produite :", error);
        setError(true);
      });
  }, []);

  const data = { btsDataById, error };

  return data;
};

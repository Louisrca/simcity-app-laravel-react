import { useEffect, useState } from "react";
import { getChartBTS } from "../services/charts/BTS/getChartBTS";

export const handleSetBTSChart = () => {
  const [btsChartData, setbtsChartData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    getChartBTS()
      .then((Btsdata) => {
        setbtsChartData(Btsdata);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Une erreur s'est produite :", error);
      });
  }, []);

  const data = { btsChartData, loading };
  return data;
};

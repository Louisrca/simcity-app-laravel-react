import { useEffect, useState } from "react";
import { getFormOP } from "../services/forms/BTS/getFormOP";

export const handleSetFormOPAudit = (codeSite: string) => {
  const [formOPData, setFormOPData] = useState<any>([]);

  useEffect(() => {
    getFormOP(codeSite)
      .then((data) => {
        setFormOPData(data);
      })
      .catch((error) => {
        console.error("Une erreur s'est produite :", error);
      });
  }, []);

  const data = { formOPData };
  return data;
};

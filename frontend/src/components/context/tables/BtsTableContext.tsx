import React, { createContext, useContext, useEffect, useState } from "react";
import { getBTS } from "../../../services/tables/BTS/getBTS"; // Assurez-vous d'importer correctement votre fonction
import { Troubleshoot } from "@mui/icons-material";

interface BTS {
  // Définissez la structure de votre objet BTS ici
  // Par exemple : id: number, name: string, etc.
}

interface BTSContextType {
  btsData: any;
  loading: boolean;
  fetchData: () => void;
}

const BTSContext = createContext<BTSContextType | undefined>(undefined);

export function BTSProvider({ children }: { children: React.ReactNode }) {
  const [btsData, setBtsData] = useState<BTS[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = () => {
    setLoading(true);
    getBTS()
      .then((data: BTS[]) => {
        setBtsData(data);
        setLoading(false);
      })
      .catch((error: Error) => {
        console.error("Erreur lors de la récupération des données :", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const btsContextValue: BTSContextType = {
    btsData,
    loading,
    fetchData,
  };

  return (
    <BTSContext.Provider value={btsContextValue}>
      {children}
    </BTSContext.Provider>
  );
}

export function useBTS() {
  const context = useContext(BTSContext);
  if (!context) {
    throw new Error("useBTS doit être utilisé à l'intérieur d'un BTSProvider");
  }
  return context;
}

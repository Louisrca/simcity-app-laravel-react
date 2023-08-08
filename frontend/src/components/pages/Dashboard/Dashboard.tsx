import { getAuthInfo } from "../../../services/auth/autLogInfo/getAuthInfo";
import { BtsTable } from "../../table/BtsTable";
import s from "./Dashboard.module.css";
import { useEffect, useState } from "react";

export const Dashboard = () => {
  const [meData, setMeData] = useState<any>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getAuthInfo()
      .then((MeData) => {
        setMeData(MeData);
        setError(null); // Réinitialiser l'erreur en cas de succès
      })
      .catch((error) => {
        setError("Une erreur s'est produite : " + error.message);
      });
  }, []);
  const { user } = meData;
  return (
    <div>
      <h1>Dashboard</h1>
      {user && <h4>{user.firstname + " " + user.lastname}</h4>}
      {error && <p className={s.error}>{error}</p>}
      <div className={s.dashboardTable}>
        <BtsTable />
      </div>
    </div>
  );
};

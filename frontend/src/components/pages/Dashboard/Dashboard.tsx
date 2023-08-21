import { getAuthInfo } from "../../../services/auth/autLogInfo/getAuthInfo";
import { BtsTable } from "../../table/BtsTable";
import s from "./Dashboard.module.css";
import { useEffect, useState } from "react";
import { userToken } from "../../../utils/UserToken";

export const Dashboard = () => {
  const [meData, setMeData] = useState<any>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getAuthInfo(userToken())
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
    <div className={s.dashboardView}>
      <h1>Dashboard</h1>
      {user && <h4>{user.firstname + " " + user.lastname}</h4>}
      {error && <p className={s.error}>{error}</p>}
      <div>
        <BtsTable />
      </div>
    </div>
  );
};

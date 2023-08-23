import { BtsTable } from "../../table/bts/BtsTable";
import { BtsTableFM } from "../../table/bts/BtsTableFM";
import { BtsTableAGH } from "../../table/bts/BtsTableAGH";
import s from "./Dashboard.module.css";
import { useAuth } from "../../../components/auth/authLogin/AuthContext";

export const Dashboard = () => {
  const { meData, error } = useAuth();
  const user = meData?.user;
  return (
    <div className={s.dashboardView}>
      <h1>Dashboard</h1>
      {user && (
        <h4>Connecté en tant que {user.firstname + " " + user.lastname}</h4>
      )}
      {error && <p className={s.error}>{error}</p>}
      {user?.role === "ext" ? (
        <BtsTableFM />
      ) : user?.role === "admin" ? (
        <BtsTable />
      ) : user?.role === "pilote_AGH" ? (
        <BtsTableAGH />
      ) : (
        undefined === user?.role
      )}
    </div>
  );
};

import { BtsTable } from "../../table/BtsTable";
import s from "./Dashboard.module.css";
export const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <div className={s.dashboardTable}>
        <BtsTable />
      </div>
    </div>
  );
};

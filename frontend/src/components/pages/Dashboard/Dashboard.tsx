import { BtsTable } from "../../table/BtsTable";
import s from "./Dashboard.module.css";
import { useEffect, useState } from "react";
export const Dashboard = () => {
  const [userProfile, setUserProfile] = useState("");
  useEffect(() => {
    setUserProfile(localStorage.getItem("userToken")!);
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <h1></h1>
      <div className={s.dashboardTable}>
        <BtsTable />
      </div>
      <div>{userProfile}</div>
    </div>
  );
};

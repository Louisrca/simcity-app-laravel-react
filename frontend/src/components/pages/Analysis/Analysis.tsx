// import { useAuth } from "../../context/auth/AuthContext";
import { AnalysisForm } from "../../analysisForm/AnalysisForm";
import s from "./Analysis.module.css";

export const Analysis = () => {
  return (
    <div className={s.analisysView}>
      <AnalysisForm />
    </div>
  );
};

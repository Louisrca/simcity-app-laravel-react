// import { useAuth } from "../../context/auth/AuthContext";
import { AnalysisForm } from "../../analysisForm/AnalysisForm";
import s from "./Analysis.module.css";

export const Analysis = () => {
  const URL = window.location.search;
  const urlParams = new URLSearchParams(URL);
  const getAnalyse = urlParams ? urlParams.get("analyse") : null;
  return (
    <div className={s.analisysView}>
      <div>
        <h2>
          {" "}
          Analyse Site{" "}
          {getAnalyse &&
            getAnalyse.charAt(0).toUpperCase() + getAnalyse.slice(1)}
        </h2>
      </div>

      <div>
        <AnalysisForm />
      </div>
    </div>
  );
};

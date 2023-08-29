// import { useAuth } from "../../context/auth/AuthContext";
import { AnalysisForm } from "../../analysisForm/AnalysisForm";
import s from "./Analysis.module.css";

export const Analysis = () => {
  // const { meData, error } = useAuth();
  // const user = meData?.user;

  return (
    <div className={s.analisysView}>
      <div>
        <h1>Analyse Site</h1>
        {/* {user && (
          <h4>Connecté en tant que {user.firstname + " " + user.lastname}</h4>
        )}
        {error && <p className={s.error}>{error}</p>} */}
      </div>

      <div>
        <AnalysisForm />
      </div>
    </div>
  );
};

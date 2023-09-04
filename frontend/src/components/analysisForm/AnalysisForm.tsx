// import { handleSetAnalysData } from "../../hooks/handleSetAnalysData";
import { HeaderForm } from "./components/HeaderForm";
import s from "./AnalysisForm.module.css";
export const AnalysisForm = () => {
  const URL = window.location.search;
  const urlParams = new URLSearchParams(URL);
  const getAnalyse = urlParams.get("analyse");
  return (
    <>
      <div className={s.header}>
        <HeaderForm />
      </div>

      <p> Analyse {getAnalyse && getAnalyse.toUpperCase()}</p>
    </>
  );
};

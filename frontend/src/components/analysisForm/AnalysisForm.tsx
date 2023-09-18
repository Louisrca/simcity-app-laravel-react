import { HeaderForm } from "./components/HeaderForm";
import { FormAnalyseOperation } from "./components/form/BTS/FormAnalyseOperation/FormAnalyseOperation";
import s from "./AnalysisForm.module.css";
import { FormAnalysePatrimoine } from "./components/form/BTS/FormAnalysePatrimoine/FormAnalysePatrimoine";
import { FormAnalyseHSE } from "./components/form/BTS/FormAnalyseHSE/FormAnalyseHSE";
export const AnalysisForm = () => {
  const URL = window.location.search;
  const urlParams = new URLSearchParams(URL);
  const getAnalyse = urlParams ? urlParams.get("analyse") : null;

  return (
    <>
      <div className={s.titlePage}>
        <h1>
          {" "}
          Analyse Site{" "}
          {getAnalyse &&
            getAnalyse.charAt(0).toUpperCase() + getAnalyse.slice(1)}
        </h1>
      </div>
      <div className={s.header}>
        <HeaderForm />
      </div>
      <div className={s.form}>
        {getAnalyse && getAnalyse === "operation" ? (
          <FormAnalyseOperation />
        ) : getAnalyse && getAnalyse === "patrimoine" ? (
          <FormAnalysePatrimoine />
        ) : getAnalyse && getAnalyse === "hse" ? (
          <FormAnalyseHSE />
        ) : null}
      </div>
    </>
  );
};

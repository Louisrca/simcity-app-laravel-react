import { HeaderForm } from "./components/HeaderForm";
import { FormAnalyseOperation } from "./components/form/BTS/FormAnalyseOperation/FormAnalyseOperation";
import { FormAutreDoc } from "./components/form/BTS/FormAnalyseOperation/Forms/FormAutreDoc";
import s from "./AnalysisForm.module.css";
export const AnalysisForm = () => {
  return (
    <>
      <div className={s.header}>
        <HeaderForm />
      </div>

      <div className={s.formOperation}>
        <FormAnalyseOperation />
        <FormAutreDoc />
      </div>
    </>
  );
};

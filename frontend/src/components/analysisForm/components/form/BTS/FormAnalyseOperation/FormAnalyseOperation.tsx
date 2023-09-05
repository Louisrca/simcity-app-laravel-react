import s from "./FormAnalyseOperation.module.css";
import { FormLayout } from "../../../../../layout/formLayout/FormLayout";
import { FormAudit } from "./Forms/FormAudit";
export const FormAnalyseOperation = () => {
  return (
    <div>
      <FormLayout>
        {" "}
        <section className={s.grid}>
          <FormAudit />
        </section>
      </FormLayout>
    </div>
  );
};

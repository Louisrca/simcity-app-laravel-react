import s from "./FormAnalyseOperation.module.css";
import { FormLayout } from "../../../../../layout/formLayout/FormLayout";
import { FormAudit } from "./Forms/FormAudit";
import { FormAutreDoc } from "./Forms/FormAutreDoc";
import { FormDocTech } from "./Forms/FormDocTech";
export const FormAnalyseOperation = () => {
  return (
    <div>
      <FormLayout>
        {" "}
        <section className={s.grid}>
          <div>
            <FormAudit />
          </div>
          <div>
            <FormDocTech />
            <FormAutreDoc />
          </div>
        </section>
      </FormLayout>
    </div>
  );
};

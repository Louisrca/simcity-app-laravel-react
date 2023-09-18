import s from "./FormAnalyseOperation.module.css";
import { FormLayout } from "../../../../../layout/formLayout/FormLayout";
import { FormAudit } from "./Forms/FormAudit";
import { FormAutreDoc } from "./Forms/FormAutreDoc";
import { FormDocTech } from "./Forms/FormDocTech";
import { FormGeneral } from "./Forms/FormGeneral";
import { FormEtudeNDC } from "./Forms/FormEtudeNDC";
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
            <FormGeneral />
            <FormEtudeNDC />
            <FormDocTech />
            <FormAutreDoc />
          </div>
        </section>
      </FormLayout>
    </div>
  );
};

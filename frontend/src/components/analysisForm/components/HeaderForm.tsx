import { HeaderFormLayout } from "../../layout/headerFormLayout/HeaderFormLayout";
import { handleSetAnalysData } from "../../../hooks/handleSetAnalysData";
import { useNavigate } from "react-router-dom";
import s from "../AnalysisForm.module.css";

export const HeaderForm = () => {
  const navigate = useNavigate();
  const URL = window.location.search;
  const urlParams = new URLSearchParams(URL);
  const { btsDataById, error } = handleSetAnalysData(`${urlParams.get("id")}`);

  const btsData = btsDataById[0];
  console.log(btsData);
  return (
    <>
      <HeaderFormLayout>
        <div className={s.headerGrid}>
          <div className={s.topHeaderGrid}>
            <div className={s.HeaderData}>
              <h5>Code Site</h5>
              <p>{btsData && btsData.code_site}</p>
            </div>
            <div className={s.HeaderData}>
              <h5>Type Infra</h5>
              <p>{btsData && btsData.type_infra}</p>
            </div>
            <div className={s.HeaderData}>
              <h5>Loyer Déclaré FM</h5>
              <p>{btsData && btsData.loyer_declare_fm}€</p>
            </div>
            <div className={s.HeaderData}>
              <h5>CDP OP</h5>
              <p>{btsData && btsData.charge_prod_ope}</p>
            </div>
            <div className={s.HeaderData}>
              <h5>CDP SM</h5>
              <p>{btsData && btsData.charge_prod_sm}</p>
            </div>
            <div className={s.HeaderData}>
              <h5>CDP HSE</h5>
              <p>{btsData && btsData.charge_prod_hse}</p>
            </div>
          </div>

          <div className={s.bottomHeaderGrid}>
            <div className={s.headerLink}>
              <div>
                <button
                  onClick={() => {
                    navigate(
                      `/portails?id=${btsData.code_site}&analyse=operation`
                    );
                  }}
                >
                  Analyse Opération
                </button>
              </div>
              <div>
                <button
                  onClick={() => {
                    navigate(
                      `/portails?id=${btsData.code_site}&analyse=patrimoine`
                    );
                  }}
                >
                  Analyse SM
                </button>
              </div>
              <div>
                <button
                  onClick={() => {
                    navigate(`/portails?id=${btsData.code_site}&analyse=hse`);
                  }}
                >
                  Analyse HSE
                </button>
              </div>
            </div>

            <div className={s.HeaderData}>
              {/* <h5>Synthèse</h5> */}
              <div className={s.syntheseData}>
                <div>
                  <h5>AVIS OP</h5>
                  <p>{btsData && btsData.avis_op}</p>
                </div>
                <div>
                  <h5>AVIS SM</h5>
                  <p>{btsData && btsData.avis_sm}</p>
                </div>
                <div>
                  <h5>AVIS HSE</h5>
                  <p>{btsData && btsData.avis_hse}</p>
                </div>
              </div>
            </div>
            <div className={s.HeaderData}></div>
          </div>
        </div>

        <div>{error && <p className={s.error}>{error}</p>}</div>
      </HeaderFormLayout>
    </>
  );
};

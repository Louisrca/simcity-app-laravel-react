import { HeaderFormLayout } from "../../layout/headerFormLayout/HeaderFormLayout";
import { handleSetAnalysData } from "../../../hooks/handleSetAnalysData";
import { useNavigate } from "react-router-dom";
import s from "../AnalysisForm.module.css";
import { TextField } from "@mui/material";
import { CircleSyntheseAnalyse } from "../../../common/icons/CircleSyntheseAnalyse";
import { CircleNoneSyntheseAnalyse } from "../../../common/icons/CircleNoneSyntheseAnalyse";

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
              <TextField
                id="outlined-controlled"
                label="Code Site"
                disabled
                size="small"
                InputLabelProps={{ shrink: true }}
                sx={{
                  "& .MuiInputLabel-root.Mui-disabled": {
                    WebkitTextFillColor: "rgb(33, 53, 71)",
                    // fontWeight: "bold",
                  },
                }}
                value={btsData && btsData.code_site}
              />
            </div>
            <div className={s.HeaderData}>
              <TextField
                id="outlined-controlled"
                label="Type Infrastructure"
                disabled
                size="small"
                InputLabelProps={{ shrink: true }}
                sx={{
                  "& .MuiInputLabel-root.Mui-disabled": {
                    WebkitTextFillColor: "rgb(33, 53, 71)",
                    // fontWeight: "bold",
                  },
                }}
                value={btsData && btsData.type_infra}
              />
            </div>
            <div className={s.HeaderData}>
              <TextField
                id="outlined-controlled"
                label="Loyer Déclaré FM €"
                disabled
                size="small"
                InputLabelProps={{ shrink: true }}
                sx={{
                  "& .MuiInputLabel-root.Mui-disabled": {
                    WebkitTextFillColor: "#1976d2",
                    // fontWeight: "bold",
                  },
                }}
                value={btsData && btsData.loyer_declare_fm}
              />
            </div>
            <div className={s.HeaderData}>
              <TextField
                id="outlined-controlled"
                label="CDP OP"
                disabled
                size="small"
                InputLabelProps={{ shrink: true }}
                sx={{
                  "& .MuiInputLabel-root.Mui-disabled": {
                    WebkitTextFillColor: "rgb(33, 53, 71)",
                    // fontWeight: "bold",
                  },
                }}
                value={btsData && btsData.charge_prod_ope}
              />
            </div>
            <div className={s.HeaderData}>
              <TextField
                id="outlined-controlled"
                label="CDP SM"
                disabled
                size="small"
                InputLabelProps={{ shrink: true }}
                sx={{
                  "& .MuiInputLabel-root.Mui-disabled": {
                    WebkitTextFillColor: "rgb(33, 53, 71)",
                    // fontWeight: "bold",
                  },
                }}
                value={btsData && btsData.charge_prod_sm}
              />
            </div>
            <div className={s.HeaderData}>
              <TextField
                id="outlined-controlled"
                label="CDP HSE"
                disabled
                size="small"
                InputLabelProps={{ shrink: true }}
                sx={{
                  "& .MuiInputLabel-root.Mui-disabled": {
                    WebkitTextFillColor: "rgb(33, 53, 71)",
                    // fontWeight: "bold",
                  },
                }}
                value={btsData && btsData.charge_prod_hse}
              />
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
                  <p>
                    {btsData && btsData.avis_op === "OK" ? (
                      <CircleSyntheseAnalyse
                        color="rgb(4, 120, 87)"
                        width="16"
                      />
                    ) : btsData && btsData.avis_op === "Bloquant" ? (
                      <CircleSyntheseAnalyse
                        color="rgb(190, 18, 60)"
                        width="16"
                      />
                    ) : (
                      <CircleNoneSyntheseAnalyse color="black" width="16" />
                    )}
                  </p>
                </div>
                <div>
                  <h5>AVIS SM</h5>
                  <p>
                    {btsData && btsData.avis_sm === "OK" ? (
                      <CircleSyntheseAnalyse
                        color="rgb(4, 120, 87)"
                        width="16"
                      />
                    ) : btsData && btsData.avis_sm === "Bloquant" ? (
                      <CircleSyntheseAnalyse
                        color="rgb(190, 18, 60)"
                        width="16"
                      />
                    ) : (
                      <CircleNoneSyntheseAnalyse color="black" width="16" />
                    )}
                  </p>
                </div>
                <div>
                  <h5>AVIS HSE</h5>
                  <p>
                    {btsData && btsData.avis_hse === "OK" ? (
                      <CircleSyntheseAnalyse
                        color="rgb(4, 120, 87)"
                        width="16"
                      />
                    ) : btsData && btsData.avis_hse === "Bloquant" ? (
                      <CircleSyntheseAnalyse
                        color="rgb(190, 18, 60)"
                        width="16"
                      />
                    ) : (
                      <CircleNoneSyntheseAnalyse color="black" width="16" />
                    )}
                  </p>
                </div>

                <div>
                  <h5>SYNTHESE</h5>
                  <p>
                    {btsData && btsData.synthese === "OK" ? (
                      <CircleSyntheseAnalyse
                        color="rgb(4, 120, 87)"
                        width="16"
                      />
                    ) : btsData && btsData.synthese === "Bloquant" ? (
                      <CircleSyntheseAnalyse
                        color="rgb(190, 18, 60)"
                        width="16"
                      />
                    ) : (
                      <CircleNoneSyntheseAnalyse color="black" width="16" />
                    )}
                  </p>
                </div>
              </div>
            </div>
            <div className={s.HeaderData}>
              <TextField
                id="outlined-controlled"
                label="Etat d'analyse"
                disabled
                size="small"
                InputLabelProps={{ shrink: true }}
                sx={{
                  "& .MuiInputLabel-root.Mui-disabled": {
                    WebkitTextFillColor: "orange",
                    // fontWeight: "bold",
                  },
                }}
                value={btsData && btsData.etat}
              />
            </div>
            <div className={s.HeaderData}>
              <TextField
                id="outlined-controlled"
                label="Arbitrage"
                disabled
                size="small"
                InputLabelProps={{ shrink: true }}
                sx={{
                  "& .MuiInputLabel-root.Mui-disabled": {
                    WebkitTextFillColor: "rgb(33, 53, 71)",
                    // fontWeight: "bold",
                  },
                }}
                value={btsData && btsData.arbitrage}
              />
            </div>
          </div>
        </div>

        <div>{error && <p className={s.error}>{error}</p>}</div>
      </HeaderFormLayout>
    </>
  );
};

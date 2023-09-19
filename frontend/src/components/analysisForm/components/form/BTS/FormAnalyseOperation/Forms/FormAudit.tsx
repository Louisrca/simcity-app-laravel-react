import s from "../../FormAnalyse.module.css";
import { useState } from "react";
import { InputText } from "../../utils/inputText";
import { InputSelector } from "../../utils/inputSelector";
import { postFormOP } from "../../../../../../../services/forms/BTS/postFormOP";
import { handleSetFormOPAudit } from "../../../../../../../hooks/handleSetFormOPAudit";
export const FormAudit = () => {
  const URL = window.location.search;
  const urlParams = new URLSearchParams(URL);
  const codeSite = urlParams.get("id");
  const dateCession = urlParams.get("date_cession");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    try {
      await postFormOP(data);
      setLoading(false);
    } catch (error) {
      console.error("Une erreur s'est produite :", error);
    }
  };

  const { formOPData } = handleSetFormOPAudit(`${codeSite}`);

  const [data, setData] = useState({
    ["date_cession"]: dateCession,
    ["code_site"]: codeSite,
  });

  console.log(data);

  return (
    <div className={s.formSection}>
      <div className={s.title}>
        <h3>AUDIT</h3>
        <div className={s.separator}></div>
      </div>
      <form action="" onSubmit={handleSubmit} className={s.formInputsSection}>
        <div className={s.inputContent}>
          <InputSelector
            title="TYPE"
            name="typologie"
            isBloquant={s.notBloquantLabel}
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
            isRequired={true}
          >
            {formOPData[0] ? (
              <option value={formOPData[0]?.typologie}>
                {formOPData[0]?.typologie}
              </option>
            ) : (
              <option value="" disabled selected>
                Séléctionner
              </option>
            )}

            <option value="Pylône">Pylône</option>
            <option value="Pylône d'éclairage">Pylône d'éclairage</option>
          </InputSelector>
          <InputSelector
            title="PARATONNERRE"
            name="paratonnerre"
            isBloquant={s.bloquantLabel}
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
            isRequired={true}
          >
            {formOPData[0] ? (
              <option value={formOPData[0]?.paratonnerre}>
                {formOPData[0]?.paratonnerre}
              </option>
            ) : (
              <option value="" disabled selected>
                Séléctionner
              </option>
            )}
            <option value="OUI">OUI</option>
            <option value="NON">NON</option>
            <option value="BLOQUANT">BLOQUANT</option>
          </InputSelector>
          <InputSelector
            title="ETUDE FOUDRE"
            name="etude_foudre"
            isBloquant={s.bloquantLabel}
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
            isRequired={true}
          >
            {formOPData[0] ? (
              <option value={formOPData[0]?.etude_foudre}>
                {formOPData[0]?.etude_foudre}
              </option>
            ) : (
              <option value="" disabled selected>
                Séléctionner
              </option>
            )}
            <option value="OUI">OUI</option>
            <option value="NON">NON</option>
            <option value="BLOQUANT">BLOQUANT</option>
          </InputSelector>
          <InputText
            title="SURFACE OCCUPEE (en m²)"
            type="number"
            placeholder={
              formOPData[0] ? formOPData[0]?.surface_occupee : "Surface Occupée"
            }
            name="surface_occupee"
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
          />
          <InputSelector
            title="SI PYLONE : FOURNISSEUR"
            name="pylone_fabriquant"
            isBloquant={s.bloquantLabel}
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
            isRequired={true}
          >
            {formOPData[0] ? (
              <option value={formOPData[0]?.pylone_fabriquant}>
                {formOPData[0]?.pylone_fabriquant}
              </option>
            ) : (
              <option value="" disabled selected>
                Séléctionner
              </option>
            )}
            <option value="OUI">OUI</option>
            <option value="NON">NON</option>
            <option value="BLOQUANT">BLOQUANT</option>
          </InputSelector>

          <InputSelector
            title="SI PYLONE : GAMME"
            name="pylone_gamme"
            isBloquant={s.bloquantLabel}
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
            isRequired={true}
          >
            {formOPData[0] ? (
              <option value={formOPData[0]?.pylone_gamme}>
                {formOPData[0]?.pylone_gamme}
              </option>
            ) : (
              <option value="" disabled selected>
                Séléctionner
              </option>
            )}
            <option value="OUI">OUI</option>
            <option value="NON">NON</option>
            <option value="BLOQUANT">BLOQUANT</option>
          </InputSelector>

          <InputSelector
            title="SI PYLONE : REFERENCE"
            name="pylone_reference"
            isBloquant={s.bloquantLabel}
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
            isRequired={true}
          >
            {formOPData[0] ? (
              <option value={formOPData[0]?.pylone_reference}>
                {formOPData[0]?.pylone_reference}
              </option>
            ) : (
              <option value="" disabled selected>
                Séléctionner
              </option>
            )}
            <option value="OUI">OUI</option>
            <option value="NON">NON</option>
            <option value="BLOQUANT">BLOQUANT</option>
          </InputSelector>

          <InputSelector
            title="SI PYLONE : ENTRAXE ENTRE PIEDS PYLONE"
            name="section_pied_pylone"
            isBloquant={s.bloquantLabel}
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
            isRequired={true}
          >
            {formOPData[0] ? (
              <option value={formOPData[0]?.section_pied_pylone}>
                {formOPData[0]?.section_pied_pylone}
              </option>
            ) : (
              <option value="" disabled selected>
                Séléctionner
              </option>
            )}
            <option value="OUI">OUI</option>
            <option value="NON">NON</option>
            <option value="BLOQUANT">BLOQUANT</option>
          </InputSelector>

          <InputSelector
            title="SI PYLONE : DEPOINTAGE (en mm)"
            name="pylone_depointage"
            isBloquant={s.bloquantLabel}
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
            isRequired={true}
          >
            {formOPData[0] ? (
              <option value={formOPData[0]?.pylone_depointage}>
                {formOPData[0]?.pylone_depointage}
              </option>
            ) : (
              <option value="" disabled selected>
                Séléctionner
              </option>
            )}
            <option value="OUI">OUI</option>
            <option value="NON">NON</option>
            <option value="BLOQUANT">BLOQUANT</option>
          </InputSelector>

          <InputSelector
            title="SI PYLONE : VOILURE (en m²)"
            name="pylone_voilure"
            isBloquant={s.bloquantLabel}
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
            isRequired={true}
          >
            {formOPData[0] ? (
              <option value={formOPData[0]?.pylone_voilure}>
                {formOPData[0]?.pylone_voilure}
              </option>
            ) : (
              <option value="" disabled selected>
                Séléctionner
              </option>
            )}
            <option value="OUI">OUI</option>
            <option value="NON">NON</option>
            <option value="BLOQUANT">BLOQUANT</option>
          </InputSelector>

          <InputSelector
            title="SI PYLONE : ID NORME DE CALCUL"
            name="pylone_id_norme_calcul"
            isBloquant={s.bloquantLabel}
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
            isRequired={true}
          >
            {formOPData[0] ? (
              <option value={formOPData[0]?.pylone_id_norme_calcul}>
                {formOPData[0]?.pylone_id_norme_calcul}
              </option>
            ) : (
              <option value="" disabled selected>
                Séléctionner
              </option>
            )}
            <option value="OUI">OUI</option>
            <option value="NON">NON</option>
            <option value="BLOQUANT">BLOQUANT</option>
          </InputSelector>

          <InputSelector
            title="SI PYLONE : SECTION MEMBRURES (en cm)"
            name="pylone_entraxe"
            isBloquant={s.bloquantLabel}
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
            isRequired={true}
          >
            {formOPData[0] ? (
              <option value={formOPData[0]?.pylone_entraxe}>
                {formOPData[0]?.pylone_entraxe}
              </option>
            ) : (
              <option value="" disabled selected>
                Séléctionner
              </option>
            )}
            <option value="OUI">OUI</option>
            <option value="NON">NON</option>
            <option value="BLOQUANT">BLOQUANT</option>
          </InputSelector>

          <InputSelector
            title="SI PYLONE : TYPE DE SUPPORT"
            name="pylone_type_support"
            isBloquant={s.bloquantLabel}
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
            isRequired={true}
          >
            {formOPData[0] ? (
              <option value={formOPData[0]?.pylone_type_support}>
                {formOPData[0]?.pylone_type_support}
              </option>
            ) : (
              <option value="" disabled selected>
                Séléctionner
              </option>
            )}
            <option value="OUI">OUI</option>
            <option value="NON">NON</option>
            <option value="BLOQUANT">BLOQUANT</option>
          </InputSelector>

          <InputSelector
            title="SI PYLONE : SOUS TYPE"
            name="pylone_sous_type"
            isBloquant={s.bloquantLabel}
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
            isRequired={true}
          >
            {formOPData[0] ? (
              <option value={formOPData[0]?.pylone_sous_type}>
                {formOPData[0]?.pylone_sous_type}
              </option>
            ) : (
              <option value="" disabled selected>
                Séléctionner
              </option>
            )}
            <option value="OUI">OUI</option>
            <option value="NON">NON</option>
            <option value="BLOQUANT">BLOQUANT</option>
          </InputSelector>

          <InputSelector
            title="TYPE DE MASSIF"
            name="type_massif"
            isBloquant={s.bloquantLabel}
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
            isRequired={true}
          >
            {formOPData[0] ? (
              <option value={formOPData[0]?.type_massif}>
                {formOPData[0]?.type_massif}
              </option>
            ) : (
              <option value="" disabled selected>
                Séléctionner
              </option>
            )}
            <option value="OUI">OUI</option>
            <option value="NON">NON</option>
            <option value="BLOQUANT">BLOQUANT</option>
          </InputSelector>

          <InputSelector
            title="TYPE DE SUPPORT"
            name="type_support"
            isBloquant={s.bloquantLabel}
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
            isRequired={true}
          >
            {formOPData[0] ? (
              <option value={formOPData[0]?.type_support}>
                {formOPData[0]?.type_support}
              </option>
            ) : (
              <option value="" disabled selected>
                Séléctionner
              </option>
            )}
            <option value="OUI">OUI</option>
            <option value="NON">NON</option>
            <option value="BLOQUANT">BLOQUANT</option>
          </InputSelector>

          <InputSelector
            title="SI MAT : TYPE DE FIXATION"
            name="conception"
            isBloquant={s.bloquantLabel}
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
            isRequired={true}
          >
            {formOPData[0] ? (
              <option value={formOPData[0]?.conception}>
                {formOPData[0]?.conception}
              </option>
            ) : (
              <option value="" disabled selected>
                Séléctionner
              </option>
            )}
            <option value="OUI">OUI</option>
            <option value="NON">NON</option>
            <option value="BLOQUANT">BLOQUANT</option>
          </InputSelector>

          <InputSelector
            title="SYSTEME D'INTERFACAGE"
            name="systeme_interfacage"
            isBloquant={s.bloquantLabel}
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
            isRequired={true}
          >
            {formOPData[0] ? (
              <option value={formOPData[0]?.systeme_interfacage}>
                {formOPData[0]?.systeme_interfacage}
              </option>
            ) : (
              <option value="" disabled selected>
                Séléctionner
              </option>
            )}
            <option value="OUI">OUI</option>
            <option value="NON">NON</option>
            <option value="BLOQUANT">BLOQUANT</option>
          </InputSelector>

          <InputSelector
            title="INTEGRATION"
            name="integration"
            isBloquant={s.bloquantLabel}
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
            isRequired={true}
          >
            {formOPData[0] ? (
              <option value={formOPData[0]?.integration}>
                {formOPData[0]?.integration}
              </option>
            ) : (
              <option value="" disabled selected>
                Séléctionner
              </option>
            )}
            <option value="OUI">OUI</option>
            <option value="NON">NON</option>
            <option value="BLOQUANT">BLOQUANT</option>
          </InputSelector>

          <InputSelector
            title="SI INTEGRATION : TYPE"
            name="si_integration_type"
            isBloquant={s.bloquantLabel}
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
            isRequired={true}
          >
            {formOPData[0] ? (
              <option value={formOPData[0]?.si_integration_type}>
                {formOPData[0]?.si_integration_type}
              </option>
            ) : (
              <option value="" disabled selected>
                Séléctionner
              </option>
            )}
            <option value="OUI">OUI</option>
            <option value="NON">NON</option>
            <option value="BLOQUANT">BLOQUANT</option>
          </InputSelector>

          <InputSelector
            title="SI INTEGRATION : FOURNISSEUR IP"
            name="si_integration_fourniseurs_ip"
            isBloquant={s.bloquantLabel}
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
            isRequired={true}
          >
            {formOPData[0] ? (
              <option value={formOPData[0]?.si_integration_fourniseurs_ip}>
                {formOPData[0]?.si_integration_fourniseurs_ip}
              </option>
            ) : (
              <option value="" disabled selected>
                Séléctionner
              </option>
            )}
            <option value="OUI">OUI</option>
            <option value="NON">NON</option>
            <option value="BLOQUANT">BLOQUANT</option>
          </InputSelector>

          <InputSelector
            title="SI INTEGRATION : COULEURS"
            name="si_integration_couleurs"
            isBloquant={s.bloquantLabel}
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
            isRequired={true}
          >
            {formOPData[0] ? (
              <option value={formOPData[0]?.si_integration_couleurs}>
                {formOPData[0]?.si_integration_couleurs}
              </option>
            ) : (
              <option value="" disabled selected>
                Séléctionner
              </option>
            )}
            <option value="OUI">OUI</option>
            <option value="NON">NON</option>
            <option value="BLOQUANT">BLOQUANT</option>
          </InputSelector>

          <InputSelector
            title="TYPE D'ANTENNE"
            name="type_antenne"
            isBloquant={s.bloquantLabel}
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
            isRequired={true}
          >
            {formOPData[0] ? (
              <option value={formOPData[0]?.type_antenne}>
                {formOPData[0]?.type_antenne}
              </option>
            ) : (
              <option value="" disabled selected>
                Séléctionner
              </option>
            )}
            <option value="OUI">OUI</option>
            <option value="NON">NON</option>
            <option value="BLOQUANT">BLOQUANT</option>
          </InputSelector>

          <InputText
            title="HAUTEUR SUPPORT (en mètre)"
            name="hauteur_support"
            type="number"
            placeholder={
              formOPData[0]
                ? formOPData[0]?.hauteur_support
                : "Hauteur en mètre"
            }
            handleFunction={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
          />
        </div>

        <div className={s.submitSection}>
          <div className={s.submitContent}>
            <button>
              {loading ? (
                <div className={s.loader}>
                  {/* <div className={s.circle}></div> */}
                </div>
              ) : (
                <div>Valider</div>
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
